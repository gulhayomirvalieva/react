// backend/middleware/adminCodeMiddleware.js
exports.adminCodeMiddleware = (req, res, next) => {
    const adminCode = req.headers["x-admin-code"]; // frontenddan header orqali yuboriladi
    const ADMIN_CODE = process.env.ADMIN_CODE || "0100";

    if (!adminCode || adminCode !== ADMIN_CODE) {
        return res.status(403).json({ message: "Admin kodi noto‘g‘ri ❌" });
    }

    next();
};
