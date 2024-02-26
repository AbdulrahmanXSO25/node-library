const rateLimit = require('express-rate-limit');

const apiRateLimit = rateLimit({
    windowMs: 30 * 1000,
    max: 60,
    standardHeaders: true,
    legacyHeaders: false,
    message: {
        success: false,
        message: "Too many requests, please try again later."
    }
});

module.exports = apiRateLimit;