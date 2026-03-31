const Joi = require("joi");

const validateLibrary = (data) => {
  const schema = Joi.object({
    userId: Joi.number().required(),
    gameId: Joi.number().required()
  });
  return schema.validate(data);
};

module.exports = { validateLibrary };
