require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const { protect } = require("./middleware/authMiddleware");

const app = express();

// Middleware
app.use(express.json());
app.use(cors()); // Enable CORS for frontend communication

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit process with failure
  }
};

connectDB();

// Routes
app.use("/api/auth", authRoutes); // Authentication routes (login, register)
app.use("/api/user", protect, userRoutes); // User-related routes (profile, admin) with token protection

// Root endpoint
app.get("/", (req, res) => {
  res.send("Server is up and running");
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
