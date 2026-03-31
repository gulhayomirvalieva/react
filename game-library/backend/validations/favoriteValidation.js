const Joi = require("joi");

exports.validateFavorite = (data) => {
  const schema = Joi.object({
    userId: Joi.number().integer().required(),
    gameId: Joi.number().integer().required(),
  });

  return schema.validate(data);
};
