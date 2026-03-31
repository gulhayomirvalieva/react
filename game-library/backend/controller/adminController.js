const { Game } = require("../models");

exports.getAllGames = async (req, res) => {
    try {
        const games = await Game.findAll();
        res.json(games);
    } catch (err) {
        res.status(500).json({ message: "Server xatosi: " + err.message });
    }
};

exports.addGame = async (req, res) => {
    try {
        const { title, coverUrl, genre, rating } = req.body;
        await Game.create({ title, coverUrl, genre, rating });
        res.json({ message: "✅ O‘yin qo‘shildi!" });
    } catch (err) {
        res.status(500).json({ message: "Server xatosi: " + err.message });
    }
};

exports.updateGame = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, coverUrl, genre, rating } = req.body;
        await Game.update({ title, coverUrl, genre, rating }, { where: { id } });
        res.json({ message: "✏️ O‘yin yangilandi!" });
    } catch (err) {
        res.status(500).json({ message: "Server xatosi: " + err.message });
    }
};

exports.deleteGame = async (req, res) => {
    try {
        const { id } = req.params;
        await Game.destroy({ where: { id } });
        res.json({ message: "🗑️ O‘yin o‘chirildi!" });
    } catch (err) {
        res.status(500).json({ message: "Server xatosi: " + err.message });
    }
};
