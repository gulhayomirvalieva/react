const ValidateCard = require('../validations/card.validation');
const { Card, User } = require('../models');

// 1 – PostCard
const postCard = async (req, res) => {
    const { error } = ValidateCard(req.body);

    if (error) return res.status(400).send(error.details[0].message);

    const { title, description } = req.body;

    try {
        const existingCard = await Card.findOne({ where: { title } });

        if (existingCard) {
            return res.status(409).json({ message: 'Card already exists' });
        }

        const card = await Card.create({ title, description });
        res.status(201).json({ message: 'Card created', card });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// 2 – GetCards
const getCards = async (req, res) => {
    try {
        const cards = await Card.findAll();
        res.status(200).send(cards);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// 3 – GetCardByPk
const getCardByPk = async (req, res) => {
    try {
        const card = await Card.findByPk(req.params.id);

        if (!card) {
            res.status(404).send({ message: 'Card not found' });
        } else {
            res.status(200).send(card);
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// 4 – UpdateCard
const updateCard = async (req, res) => {
    const { error } = ValidateCard(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const card = await Card.findByPk(req.params.id);

        if (!card) {
            return res.status(404).send({ message: 'Card not found' });
        } else {
            await card.update(req.body);
            res.status(200).send(card);
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// 5 – DeleteCard
const deleteCard = async (req, res) => {
    try {
        const card = await Card.findByPk(req.params.id);

        if (!card) {
            return res.status(404).send({ message: 'Card not found' });
        }

        const cardData = card.toJSON();
        await card.destroy();
        return res.status(200).send(cardData);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = { postCard, getCards, getCardByPk, updateCard, deleteCard };