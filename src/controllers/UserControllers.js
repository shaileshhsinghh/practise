const User = require('../models/UserSchema');
const Todo = require('../models/todoSchema');
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
        return {status:true,
            data:data
        };
    }
    return false;
}

const savetodo = async(todo)=>{
    const tododata = await Todo.create(todo);
    return tododata;
}

const updateuser = async(userid,todoid)=>{
    await User.findByIdAndUpdate(userid,{$push:{todos:todoid}});
}

module.exports = {savetodb,login,savetodo,updateuser};