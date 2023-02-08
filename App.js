// IMPORTS
const cors = require("cors");
const express = require("express");
const GamesController = require("./controllers/GameController.js");


// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());
// games ROUTES
app.use("/games", GamesController);

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Game Store App");
});



// 404 PAGE
app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

// EXPORT
module.exports = app;