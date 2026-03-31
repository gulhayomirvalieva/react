import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/contacts", (req, res) => {
  console.log("Yangi xabar:", req.body);
  res.status(200).json({ message: "Xabar qabul qilindi!" });
});

app.listen(5000, () => {
  console.log("Server 5000-portda ishlayapti");
});
