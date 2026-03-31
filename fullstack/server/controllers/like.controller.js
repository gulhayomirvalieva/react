const { Like, User, Card } = require('../models');

// 1 – Like yaratish (PostLike)
const postLike = async (req, res) => {
    try {
        const user_id = req.user.id; // token ichidan user id olish
        const { card_id } = req.body;

        const newLike = await Like.create({ user_id, card_id });
        res.status(201).json(newLike);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// 2 – Barcha like'larni olish (GetLikes)
const getLikes = async (req, res) => {
    try {
        const likes = await Like.findAll({
            include: [
                { model: User, as: 'user' },
                { model: Card, as: 'card' },
            ],
        });
        res.status(200).json(likes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// 3 – ID orqali bitta like olish (GetLikeByPk)
const getLikeByPk = async (req, res) => {
    try {
        const like = await Like.findByPk(req.params.id, {
            include: [
                { model: User, as: 'user' },
                { model: Card, as: 'card' },
            ],
        });

        if (!like) {
            return res.status(404).json({ message: 'Like not found' });
        }

        res.status(200).json(like);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// 4 – Like yangilash (UpdateLike)
const updateLike = async (req, res) => {
    try {
        const like = await Like.findByPk(req.params.id);

        if (!like) {
            return res.status(404).json({ message: 'Like not found' });
        }

        await like.update(req.body);
        res.status(200).json(like);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// 5 – Like o‘chirish (DeleteLike)
const deleteLike = async (req, res) => {
    try {
        const like = await Like.findByPk(req.params.id);

        if (!like) {
            return res.status(404).json({ message: 'Like not found' });
        }

        await like.destroy();
        res.status(200).json({ message: 'Like deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { postLike, getLikes, getLikeByPk, updateLike, deleteLike, };