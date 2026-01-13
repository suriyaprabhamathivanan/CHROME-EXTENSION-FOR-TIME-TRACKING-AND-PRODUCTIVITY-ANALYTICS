const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const Track = require("./models/track"); // ✅ IMPORT MODEL

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/timetracker")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// ✅ Test route
app.get("/", (req, res) => {
  res.send("Backend server is running");
});

// ✅ Save data from extension
app.post("/save", async (req, res) => {
  const { site, seconds } = req.body;

  await Track.findOneAndUpdate(
    { site },
    { seconds },
    { upsert: true }
  );

  res.json({ message: "Saved successfully" });
});

// ✅ Fetch data for dashboard
app.get("/data", async (req, res) => {
  const data = await Track.find();
  res.json(data);
});

// Start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
