const Joi = require("joi");

exports.registerValidation = (data) => {
    const schema = Joi.object({
        username: Joi.string().min(3).max(30).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required(),
    });
    return schema.validate(data);
};

exports.loginValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required(),
    });
    return schema.validate(data);
};

exports.updateValidation = (data) => {
    const schema = Joi.object({
        username: Joi.string().min(3).max(30),
        email: Joi.string().email(),
        password: Joi.string().min(6),
        photoUrl: Joi.string().uri(),
    });
    return schema.validate(data);
};
