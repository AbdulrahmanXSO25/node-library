const Joi = require('joi');

class BookValidator {
    static async validateCreate(req, res, next) {
        const schema = Joi.object({
            title: Joi.string().required(),
            publishDate: Joi.date().required(),
            quantity: Joi.number().integer().min(1).required(),
            price: Joi.number().positive().required(),
            authorName: Joi.string().required()
        });

        try {
            await schema.validateAsync(req.body);
            next();
        } catch (error) {
            res.status(400).json({ message: error.details[0].message });
        }
    }

    static async validateUpdate(req, res, next) {
        const schema = Joi.object({
            title: Joi.string().optional(),
            publishDate: Joi.date().optional(),
            quantity: Joi.number().integer().min(1).optional(),
            price: Joi.number().positive().optional(),
            authorName: Joi.string().optional()
        }).min(1);

        try {
            await schema.validateAsync(req.body);
            next();
        } catch (error) {
            res.status(400).json({ message: error.details[0].message });
        }
    }
}

module.exports = BookValidator;