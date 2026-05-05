const { verify } = require("node:crypto");
const {savetodb,login,savetodo,updateuser} = require("../controllers/UserControllers");
const {hashPassword} = require('./authMiddleware');
const {generatetoken,verifytoken} = require('./jwtmiddleware');

const testingmiddleware = async (req, res, next) => {
  try {
    res.status(200).json({
      msg: "Server Working",
    });
  } catch (err) {
    next(err);
  }
};

const createusermiddleware = async (req, res, next) => {
  try {
    const { name, username, password } = req.body;

    const newpassword = await hashPassword(password);

    const user = {
      name,
      username,
      password : newpassword
    };

    const userdata = await savetodb(user);

    res.status(201).json({
      msg: "User created",
      data: userdata,
    });

  } catch (err) {
    next(err);
  }
};

const loginmiddleware = async(req,res,next)=>{
  try{
    const {username , password } = req.body;
  const check = await login({username,password});
  if(check.status){
    const token = await generatetoken({
      id:check.data.id,
      username:username
    });
    res.status(200).json({
      msg:'User Login Succesfull',
      data : check.data,
      jwttoken : token
    });
  }
  else{
     res.status(404).json({
      msg:'User not found or password or username wrong'
    });
  }
  }catch(err){
    next(err);
  }
}

const createtodomiddleware = async(req,res,next)=>{
  try{
    const header = req.headers.authorization;
    const jwttoken = header.split(" ")[1];
    const { title } = req.body;
    const payload = await verifytoken(jwttoken);
    const todo = {
      title,
      user:payload.id
    }
    const saveddata = await savetodo(todo);

    await updateuser(payload.id,saveddata.id);

     res.status(201).json({
      msg: "Todo created",
      data: saveddata,
    });
  }catch(err){
    next(err);
  }
}

module.exports = { testingmiddleware, createusermiddleware , loginmiddleware , createtodomiddleware};
