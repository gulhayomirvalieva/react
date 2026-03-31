// backend/middleware/upload.js
const multer = require("multer");
const path = require("path");

// Rasm saqlanish joyi va nomi
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/"); // 'uploads' papkasini yaratish shart
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

// Faqat rasm fayllarini qabul qilish
const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) cb(null, true);
    else cb(new Error("Faqat rasm yuklash mumkin"), false);
};

// Multer instansiyasi
const upload = multer({ storage, fileFilter });

module.exports = upload;
