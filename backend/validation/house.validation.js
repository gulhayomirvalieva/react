const Joi = require("joi");

const houseValidationSchema = Joi.object({
  region: Joi.string().required().trim().min(6).max(50),
  city: Joi.string(),
  house_number: Joi.number(),
  street: Joi.string(),
  family_members: Joi.number(),
  location: Joi.string(),
  password: Joi.string()
    .min(8)
    .pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&]).{8,}$/)
    .required(),
});

const houseValidationSchemaUpdate = Joi.object({
  region: Joi.string().required().trim().min(6).max(50),
  city: Joi.string(),
  house_number: Joi.number(),
  street: Joi.string(),
  family_members: Joi.number(),
  location: Joi.string(),
  password: Joi.string()
    .min(8)
    .pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&]).{8,}$/)
    .required(),
});

module.exports = {
  houseValidationSchema,
  houseValidationSchemaUpdate,
};
