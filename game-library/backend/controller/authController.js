const { User } = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// 🔹 Register (faqat oddiy user)
exports.registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const existingUser = await User.findOne({ where: { email } });
        if (existingUser)
            return res.status(400).json({ message: "Email allaqachon mavjud" });

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            username,
            email,
            password: hashedPassword,
            isAdmin: false, // doim false
        });

        res.status(201).json({
            message: "Foydalanuvchi muvaffaqiyatli ro'yxatdan o'tdi",
            user: newUser,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Serverda xatolik yuz berdi" });
    }
};

// 🔹 Login
exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ where: { email } });
        if (!user) return res.status(404).json({ message: "User topilmadi" });

        const validPass = await bcrypt.compare(password, user.password);
        if (!validPass) return res.status(401).json({ message: "Parol noto‘g‘ri" });

        const token = jwt.sign(
            { id: user.id, email: user.email, isAdmin: user.isAdmin },
            process.env.JWT_SECRET || "secretkey",
            { expiresIn: "1d" }
        );

        res.json({
            message: "Login muvaffaqiyatli",
            token,
            user: {
                id: user.id,
                username: user.username,
                email: user.email,
                isAdmin: user.isAdmin,
            },
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Serverda xatolik yuz berdi" });
    }
};
