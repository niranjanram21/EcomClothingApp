const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken")
const multer = require("multer")
const path = require("path")

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

const mongoUri = process.env.MONGODB_URI;

if (!mongoUri) {
  console.error("MONGODB_URI is not defined. Please check your .env file.");
  process.exit(1); // Exit the process with failure
}

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected..."))
.catch((error) => console.log("MongoDB connection error:", error));

app.get("/", (req, res) => {
  res.send("Express app is running");
});

app.listen(port, (error) => {
  if (!error) {
    console.log("Server is running on port: " + port);
  } else {
    console.log("Error: " + error);
  }
});
