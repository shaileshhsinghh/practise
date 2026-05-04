const bcrypt = require('bcryptjs');

const hashPassword = async(password)=>{
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);
    return hashedPassword;
};

const passwordcheck = async(password)=>{
    const comparePassword = async (enteredPassword, storedPassword) =>{
        return await bcrypt.compare(enteredPassword,storedPassword);
    };
};

module.exports = {hashPassword,passwordcheck};