// 1 - Middleware nima?
// Middleware — bu oraliq tekshiruvchi funksiya bo‘lib, u so‘rov (request) endpointga yetmasdan oldin ishlaydi.
// Ya’ni foydalanuvchi serverga murojaat qilsa — so‘rov to‘g‘ridan to‘g‘ri maqsadga bormaydi, avval middleware dan o‘tadi.

const jwt = require("jsonwebtoken");

// 1 - Token tekshiruvi
const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) return res.status(401).json({ message: "Token required" });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ message: "Invalid token" });
    }
};

// 2 - Admin yoki User (Role tekshiruvi)
const adminMiddleware = (req, res, next) => {
    if (req.user.role !== "admin") {
        return res.status(403).json({ message: "Access denied - Admins only" });
    }
    next();
};

module.exports = { authMiddleware, adminMiddleware };