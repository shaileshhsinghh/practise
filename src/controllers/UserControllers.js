const User = require('../models/UserSchema');
const {passwordcheck} = require('../middlewares/authMiddleware');

const savetodb = async(data)=>{
        const userdata = await User.create(data);
        return userdata;
};

const login = async({username,password})=>{
    const data = await User.findOne({username});
    if(data === null){
        return false;
    }
    else if(passwordcheck(password,data.password)){
        return true;
    }
    return false;
}

module.exports = {savetodb,login};