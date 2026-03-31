const { Favorite, Game } = require("../models");

exports.getFavorites = async (req, res) => {
  const userId = req.user.id;
  try {
    const items = await Favorite.findAll({ where: { userId }, include: Game });
    res.status(200).json(items);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Serverda xatolik yuz berdi" });
  }
};

exports.addFavorite = async (req, res) => {
  const userId = req.user.id;
  const { gameId } = req.body;
  if (!gameId) return res.status(400).json({ message: "gameId required" });

  try {
    const exists = await Favorite.findOne({ where: { userId, gameId } });
    if (exists) return res.status(400).json({ message: "O'yin allaqachon Favoritesda" });

    const newItem = await Favorite.create({ userId, gameId });
    res.status(201).json(newItem);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Serverda xatolik yuz berdi" });
  }
};

exports.removeFavorite = async (req, res) => {
  const userId = req.user.id;
  const { gameId } = req.params;

  try {
    const item = await Favorite.findOne({ where: { userId, gameId } });
    if (!item) return res.status(404).json({ message: "Item topilmadi" });

    await item.destroy();
    res.status(200).json({ message: "O'chirildi" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Serverda xatolik yuz berdi" });
  }
};
