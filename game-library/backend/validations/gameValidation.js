const Joi = require("joi");

const validateGame = (game) => {
  const schema = Joi.object({
    title: Joi.string().min(2).required(),
    coverUrl: Joi.string().uri().required(),
    genre: Joi.string().min(2).required(),
    rating: Joi.number().min(0).max(10),
    inLibrary: Joi.boolean()
  });

  return schema.validate(game);
};

module.exports = { validateGame };
