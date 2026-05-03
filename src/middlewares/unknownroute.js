const notfound = async(req,res,next)=>{
    try{
        res.status(500).json({
            msg:'Route not found'
        });
        next();
    }catch(err){
        console.error(`${err.message}`);
    }
};

module.exports = notfound;