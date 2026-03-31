// 1 - Token nima?
// Token — bu foydalanuvchiga tizimga muvaffaqiyatli kirganidan keyin server tomonidan beriladigan ruxsatnoma (kalit) bo‘lib, u foydalanuvchini tanish uchun ishlatiladi.

// 2 - Token nima uchun kerak?
// Har safar foydalanuvchi biror so‘rov yuborganda (masalan, postCard yoki addLike), server tokenni tekshiradi,
// foydalanuvchi haqiqatan ham login bo‘lganmi yoki yo‘qmi, shuni biladi.

// 3 - Token qayerda tekshiriladi?
// Token asosan middleware orqali tekshiriladi.
// Middleware — bu so‘rov endpointga yetmasdan oldin ishlaydigan oraliq tekshiruvchi funksiya.

const { User } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// 4 - User Register (Sign Up)
const register = async (req, res) => {
    const { userName, email, password, role } = req.body;
    try {
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser)
            return res.status(400).json({ message: "Email already exists" });

        // const hashedPass = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            userName,
            email,
            password,
            // password: hashedPass,
            role,
        });

        return res.status(201).json({ message: "User registered", user: newUser });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

// 5 - Login (Sign In)
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });

        if (!user) return res.status(404).json({ message: "User not found" });

        const isValidPass = await bcrypt.compare(password, user.password);
        if (!isValidPass)
            return res.status(400).json({ message: "Password is wrong" });

        // JWT token yaratish
        const token = jwt.sign(
            { id: user.id, role: user.role },
            process.env.JWT_SECRET_KEY,
            { expiresIn: "1h" }
        );

        // Token bilan birga ro‘lni ham yuboramiz
        return res
            .status(200)
            .json({ message: "Login success", token, role: user.role });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports = { register, login };