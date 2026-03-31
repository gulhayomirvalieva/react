const Joi = require("joi");

const userSchema = Joi.object({
    userName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    role: Joi.string()
});

function ValidateUser(data) {
    return userSchema.validate(data)
};

module.exports = ValidateUser;