const { User } = require("../models");
const bcrypt = require("bcryptjs");

// 🟢 Ro‘yxatdan o‘tish
exports.register = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({ message: "Barcha maydonlarni to‘ldiring" });
        }

        const existing = await User.findOne({ where: { email } });
        if (existing) return res.status(400).json({ message: "Bu email allaqachon mavjud" });

        const hashed = await bcrypt.hash(password, 10);
        const newUser = await User.create({ username, email, password: hashed });

        res.status(201).json({ message: "Foydalanuvchi yaratildi", user: newUser });
    } catch (err) {
        res.status(500).json({ message: "Server xatosi", error: err.message });
    }
};

// 🟢 Login
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) return res.status(400).json({ message: "Email va parol kerak" });

        const user = await User.findOne({ where: { email } });
        if (!user) return res.status(401).json({ message: "Email yoki parol noto‘g‘ri" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ message: "Email yoki parol noto‘g‘ri" });

        res.json({ message: "Kirish muvaffaqiyatli", user });
    } catch (err) {
        res.status(500).json({ message: "Server xatosi", error: err.message });
    }
};

// 🟢 Profilni olish
exports.getProfile = async (req, res) => {
    try {
        const user = await User.findByPk(req.user.id, {
            attributes: { exclude: ["password"] }
        });
        if (!user) return res.status(404).json({ message: "Foydalanuvchi topilmadi" });
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: "Server xatosi", error: err.message });
    }
};

// 🟢 Profilni yangilash
exports.updateProfile = async (req, res) => {
    try {
        const userId = req.user?.id || req.params.id; // har ikkala holatni qo‘llaydi
        const { username, email, password, photoUrl } = req.body;

        const user = await User.findByPk(userId);
        if (!user) return res.status(404).json({ message: "Foydalanuvchi topilmadi" });

        if (username) user.username = username;
        if (email) user.email = email;
        if (password) user.password = await bcrypt.hash(password, 10);
        if (photoUrl) user.photoUrl = photoUrl;

        await user.save();
        res.json({ message: "Profil yangilandi", user });
    } catch (err) {
        console.error("UpdateProfile error:", err);
        res.status(500).json({ message: "Server xatosi", error: err.message });
    }
};


// 🟢 Foydalanuvchini o‘chirish
exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.user.id);
        if (!user) return res.status(404).json({ message: "Foydalanuvchi topilmadi" });

        await user.destroy();
        res.json({ message: "Foydalanuvchi o‘chirildi" });
    } catch (err) {
        res.status(500).json({ message: "Server xatosi", error: err.message });
    }
};
