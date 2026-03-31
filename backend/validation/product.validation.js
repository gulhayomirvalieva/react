const Joi = require("joi");
const productValidationSchema = Joi.object({
  title: Joi.string().required().trim().min(3).max(39),
  // password: Joi.string()
  //   .required()
  //   .trim()
  //   .min(8)
  //   .max(39)
  //   .pattern(
  //     /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/
  //   ),
  description: Joi.string(),
  price: Joi.string(),
  isActive: Joi.string(),
  sellerName: Joi.string(),
  sellerLastName: Joi.string(),
  sellerphone: Joi.string(),
  count: Joi.string(),
});

const updateProductValidationSchema = Joi.object({
  title: Joi.string().required().trim().min(3).max(30),
  // password: Joi.string()
  //   .required()
  //   .min(8)
  //   .max(30)
  //   .pattern(
  //     /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/
  //   ),
  title: Joi.string(),
  description: Joi.string(),
  price: Joi.string(),
  isActive: Joi.string(),
  sellerName: Joi.string(),
  sellerLastName: Joi.string(),
  sellerphone: Joi.string(),
  count: Joi.string(),
});
module.exports = {
  productValidationSchema,
  updateProductValidationSchema,
};
