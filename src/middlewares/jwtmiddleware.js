const jwt = require('jsonwebtoken');

const generatetoken = async(payload)=>{
    const token = await jwt.sign(payload,process.env.SECRET_KEY);
    return token;
};

const verifytoken = async(token)=>{
    const verify = await jwt.verify(token,process.env.SECRET_KEY);
    return verify;
};

module.exports = {generatetoken,verifytoken};