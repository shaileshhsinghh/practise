const notfound = async(req,res,next)=>{
    try{
        res.status(404).json({
            msg:'Route not found'
        });
    }catch(err){
        next(err);
    }
};

module.exports = notfound;