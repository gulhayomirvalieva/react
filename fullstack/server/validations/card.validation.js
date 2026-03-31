const Joi = require("joi");

const cardSchema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string()
});

function ValidateCard(data) {
    return cardSchema.validate(data)
};

module.exports = ValidateCard;