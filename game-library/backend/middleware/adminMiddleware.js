module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ message: "Token topilmadi" });

    const token = authHeader.split(" ")[1];
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;

        // Faqat admin foydalanuvchi
        if (!req.user.isAdmin) {
            return res.status(403).json({ message: "Siz admin emassiz" });
        }

        next();
    } catch (err) {
        res.status(403).json({ message: "Noto‘g‘ri token" });
    }
};
