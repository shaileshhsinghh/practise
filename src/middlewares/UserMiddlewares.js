const {savetodb,login} = require("../controllers/UserControllers");
const {hashPassword} = require('./authMiddleware');

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
  if(check){
    res.status(200).json({
      msg:'User Login Succesfull'
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

module.exports = { testingmiddleware, createusermiddleware , loginmiddleware };
