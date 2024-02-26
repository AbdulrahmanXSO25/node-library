const asyncErrorHandler = fn => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch((err) => {

        console.error(err);
        
        if (err.name === 'ValidationError') {
            const messages = Object.values(err.errors).map(val => val.message);
            return res.sendError({
                errors: messages
            }, 400);
        }

        if (err.name === 'SequelizeUniqueConstraintError') {
            return res.sendError({
                error: err.errors[0].message
            }, 400);
        }
        
        return res.sendError(err.message, 500);
    });
};

module.exports = asyncErrorHandler;
