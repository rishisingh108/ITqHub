const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const contactRoutes = require("./routes/contactRoutes");

app.use("/api/contact", contactRoutes);
app.get("/", (req, res) => {
  res.send("ITQHUB Backend Running");
});
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log("Mongo Error:", err.message);
  });

app.listen(5000, () => {
  console.log("Server running on port 5000");
});