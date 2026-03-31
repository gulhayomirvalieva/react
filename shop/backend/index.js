const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const cors = require("cors");

app.use(express.json());
app.use(cors());

// MongoDB
mongoose
  .connect(
    "mongodb+srv://gulhayomirvaliyeva1000:gulhayo1027@cluster0.8w4gmpb.mongodb.net/e-commerce"
  )
  .then(() => console.log(" MongoDB connected"))
  .catch((err) => console.error(" MongoDB error:", err));

// Test endpoint
app.get("/", (req, res) => {
  res.send("🚀 Express App is Running");
});

// Ensure folder exists
const uploadPath = path.join(__dirname, "upload/images");
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
}

// Multer config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage });

// Static file serve
app.use("/images", express.static(uploadPath));

// Upload endpoint
app.post("/upload", upload.single("product"), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ success: 0, message: " No file uploaded" });
  }
  try {
    res.json({
      success: 1,
      image_url: `http://localhost:${port}/images/${req.file.filename}`,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
