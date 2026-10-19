const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/cdac";


app.use(cors({
    origin: [
        'http://localhost:5173',
        'http://127.0.0.1:5173',
        'http://localhost:5174',
        'http://127.0.0.1:5174'
    ]
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    age: { type: Number, required: true, min: 1 },
    place: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

const User = mongoose.models.students || mongoose.model("students", userSchema);

// GET all users
app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    // The React frontend accepts either an array or { dataset: [...] }.
    res.status(200).json({ dataset: users });
  } catch (error) {
    console.error("GET /api/users failed:", error);
    res.status(500).json({ message: "Unable to fetch users", error: error.message });
  }
});

// Add a user
app.post("/api/users", async (req, res) => {
  try {
    const { name, age, place } = req.body;
    if (!name?.trim() || age === undefined || Number(age) < 1 || !place?.trim()) {
      return res.status(400).json({ message: "Name, valid age, and place are required." });
    }

    const user = await User.create({
      name: name.trim(),
      age: Number(age),
      place: place.trim(),
    });

    res.status(201).json({ message: "User added successfully", dataset: user });
  } catch (error) {
    console.error("POST /api/users failed:", error);
    res.status(500).json({ message: "Unable to add user", error: error.message });
  }
});

// Delete a user by MongoDB ID
app.delete("/api/users/:userid", async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.userid)) {
      return res.status(400).json({ message: "Invalid user ID." });
    }
    const deleted = await User.findByIdAndDelete(req.params.userid);
    if (!deleted) return res.status(404).json({ message: "User not found." });
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("DELETE /api/users failed:", error);
    res.status(500).json({ message: "Unable to delete user", error: error.message });
  }
});

// Update a user by MongoDB ID
app.put("/api/users/:userid", async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.userid)) {
      return res.status(400).json({ message: "Invalid user ID." });
    }
    const user = await User.findByIdAndUpdate(req.params.userid, req.body, {
      new: true,
      runValidators: true,
    });
    if (!user) return res.status(404).json({ message: "User not found." });
    res.status(200).json({ message: "User updated successfully", dataset: user });
  } catch (error) {
    console.error("PUT /api/users failed:", error);
    res.status(500).json({ message: "Unable to update user", error: error.message });
  }
});

app.get("/", (req, res) => {
  res.send("Paw Palace API is running. Try GET /api/users.");
});

async function startServer() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB:", MONGO_URI);
    app.listen(PORT, () => console.log(`Paw Palace API running at http://localhost:${PORT}`));
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    console.error("Make sure MongoDB is installed and running, then restart the backend.");
    process.exit(1);
  }
}

startServer();
