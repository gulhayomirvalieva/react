// controller/gameController.js
const { Game } = require("../models");

// 🔹 Barcha o'yinlarni olish
exports.getGames = async (req, res) => {
    try {
        const games = await Game.findAll();
        res.status(200).json(games);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Serverda xatolik yuz berdi" });
    }
};

// 🔹 ID bo'yicha o'yin olish
exports.getGameById = async (req, res) => {
    try {
        const game = await Game.findByPk(req.params.id);
        if (!game) return res.status(404).json({ message: "O'yin topilmadi" });
        res.status(200).json(game);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Serverda xatolik yuz berdi" });
    }
};

// 🔹 Yangi o'yin yaratish
exports.createGame = async (req, res) => {
    try {
        const { title, coverUrl, genre, rating } = req.body;
        if (!title || !coverUrl || !genre || rating === undefined) {
            return res.status(400).json({ message: "Ma'lumotlar to‘liq emas" });
        }
        const game = await Game.create({ title, coverUrl, genre, rating });
        res.status(201).json(game);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Serverda xatolik yuz berdi" });
    }
};

// 🔹 O'yinni yangilash
exports.updateGame = async (req, res) => {
    try {
        const { title, coverUrl, genre, rating } = req.body;
        const game = await Game.findByPk(req.params.id);
        if (!game) return res.status(404).json({ message: "O'yin topilmadi" });

        await game.update({ title, coverUrl, genre, rating });
        res.status(200).json(game);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Serverda xatolik yuz berdi" });
    }
};

// 🔹 O'yinni o'chirish
exports.deleteGame = async (req, res) => {
    try {
        const game = await Game.findByPk(req.params.id);
        if (!game) return res.status(404).json({ message: "O'yin topilmadi" });

        await game.destroy();
        res.status(204).send();
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Serverda xatolik yuz berdi" });
    }
};

// 🔹 Qidiruv
exports.searchGames = async (req, res) => {
    try {
        const query = req.query.query;
        if (!query) return res.status(400).json({ message: "Qidiruv so‘rovi bo‘sh" });

        const games = await Game.findAll({
            where: {
                title: { [require("sequelize").Op.iLike]: `%${query}%` }
            }
        });
        res.status(200).json(games);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Serverda xatolik yuz berdi" });
    }
};
