function responseFormatter(req, res, next) {
    res.sendSuccess = function (result, statusCode = 200) {
        res.status(statusCode).json({
            success: true,
            error: null,
            result: result
        });
    };

    res.sendError = function (errorMessage, statusCode = 500) {
        res.status(statusCode).json({
            success: false,
            error: errorMessage,
            result: null
        });
    };

    next();
}

module.exports = responseFormatter;
