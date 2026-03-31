const ValidateUser = require('../validations/user.validation');
const { User } = require("../models");

// 1 – PostUser
const postUser = async (req, res) => {
    const { error } = ValidateUser(req.body);

    if (error) return res.status(400).send(error.details[0].message);

    const { userName, email, password, role } = req.body;

    try {
        const existingUser = await User.findOne({ where: { userName } });

        if (existingUser) {
            return res.status(409).json({ message: 'User already exists' });
        }

        const newUser = await User.create({ userName, email, password, role });
        res.status(201).send(newUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// 2 – GetUsers
const getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).send(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// 3 – GetUserByPk
const getUserByPk = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);

        if (!user) {
            res.status(404).send({ message: 'User not found' });
        } else {
            res.status(200).send(user);
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// 4 – UpdateUser
const updateUser = async (req, res) => {
    const { error } = ValidateUser(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const user = await User.findByPk(req.params.id);

        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        } else {
            await user.update(req.body);
            res.status(200).send(user);
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// 5 – DeleteUser
const deleteUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);

        if (!user) {
            res.status(404).send({ message: 'User not found' });
        } else {
            const userData = user.toJSON();
            await user.destroy();
            res.status(204).send(userData);
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = { postUser, getUsers, getUserByPk, updateUser, deleteUser };