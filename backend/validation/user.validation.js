const Joi = require("joi");

const registerValidationSchema = Joi.object({
  username: Joi.string().required().trim().min(3).max(30),
  password: Joi.string()
    .min(8)
    .max(30)
    .pattern(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/
    ),

  firstname: Joi.string(),
  lastname: Joi.string(),
  brithday: Joi.string().optional(),
  jinsi: Joi.string().optional(),
  address: Joi.string(),
  phone: Joi.string().pattern(/^\+998\d{9}$/),
  car_id: Joi.string(),
  house_id: Joi.string(),
  product_id: Joi.string(),
});

const updateValidationSchema = Joi.object({
  username: Joi.string().required().trim().min(3).max(30),
  password: Joi.string()
    .min(8)
    .max(30)
    .pattern(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/
    ),

  firstname: Joi.string(),
  lastname: Joi.string(),
  brithday: Joi.string().optional(),
  jinsi: Joi.string().optional(),
  address: Joi.string(),
  phone: Joi.string().pattern(/^\+998\d{9}$/),
  car_id: Joi.string(),
  house_id: Joi.string(),
  product_id: Joi.string(),
});
module.exports = {
  registerValidationSchema,
  updateValidationSchema,
};
