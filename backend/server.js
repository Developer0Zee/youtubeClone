import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./model/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { verify } from "auth.js";
import Video from "./model/Video.js";
import videoRoute from "./routes/videoRoutes.js"

dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;
const seckretKey = process.env.seckretKey;

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection failed:", err));
app.use(express.json());

app.post("/register", async (req, res) => {
  const { email, password, name } = req.body;

  try {
    const existinguser = await User.findOne({ email });

    if (existinguser)
      return res.status(403).json({ message: "User already exist" });

    const newUser = new User({
      name: name,
      email: email,
    });

    const hashedPassword = await bcrypt.hash(password, 10);

    newUser.password = hashedPassword;
    await newUser.save();

    res.status(201).json({ message: "User created" });
  } catch (error) {
    res.status(400).json({ message: "Bad request" });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) return res.status(403).json({ message: "Unathourised" });

    const token = jwt.sign({ user: user._id }, seckretKey, { expiresIn: "1h" });

    res.status(200).json(token);
  } catch (error) {
    res.status(500).json({ message: "Internal Server error" });
  }
});

app.use("/api",videoRoute);

app.listen(PORT, () => {
  console.log("server is running");
});
