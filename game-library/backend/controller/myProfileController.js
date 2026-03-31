const { User } = require("../models");

exports.getMyProfile = async (req, res) => {
    try {
        const user = await User.findByPk(req.user.id, {
            attributes: { exclude: ["password"] }, // passwordni yubormaymiz
        });
        if (!user) return res.status(404).json({ message: "Foydalanuvchi topilmadi" });
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: "Server xatosi" });
    }
};
