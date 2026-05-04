const error = (err,req,res,next)=>{
    const statusCode = err.statusCode || 500 ;
    res.status(statusCode).json({
        Error : err.message || 'Internal Server Error'
    });
};

module.exports = error;