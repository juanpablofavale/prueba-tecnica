const errorHandler = (err, req, res, next) => {
    let status = err.status || 500

    res.status(status).json({
        response: err.message,
        error:true,
        success:false
    })
}

export default errorHandler