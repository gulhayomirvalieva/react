const Joi = require("joi");

const carValidationSchema = Joi.object({
  title: Joi.string().required().trim().min(5).max(40),
  model: Joi.string(),
  description: Joi.string().pattern(/^(?=.*[A-Za-z])(?=.*[@$]).{20,}%/),
  color: Joi.string(),
  horsePower: Joi.string(),
  carType: Joi.string(),
  charging: Joi.boolean().required(),
  weight: Joi.string(),
  gasoline: Joi.string(),
  yearMachine: Joi.number(),
  price: Joi.number().integer().min(5).max(10000000).positive().required(),
  year: Joi.date().greater("2023-12-31"),
  // password: Joi.string()
  //   .min(8)
  //   .pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&]).{8,}$/)
  //   .required(),
});

const carValidationSchemaUpdate = Joi.object({
  title: Joi.string().required().trim().min(5).max(40),
  model: Joi.string(),
  description: Joi.string()
    .pattern(/^(?=.*[A-Za-z])(?=.*[@$]).{10,}%/)
    .required(),
  color: Joi.string(),
  horsePower: Joi.string(),
  carType: Joi.string(),
  charging: Joi.boolean().required(),
  weight: Joi.string(),
  gasoline: Joi.string(),
  yearMachine: Joi.string(),
  price: Joi.number().integer().min(5).max(1000000).positive().required(),
  year: Joi.date().greater("2023-12-31"),
  // password: Joi.string()
  //   .min(8)
  //   .pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&]).{8,}$/)
  //   .required(),
});

module.exports = {
  carValidationSchema,
  carValidationSchemaUpdate,
};
