const express = require("express");
const games = express.Router();
const { checkTitle, checkGenre} = require("../validations/checkgames.js");
const {
  getAllGames,
  getGame,
  createGame,
  deleteGame,
  updateGame
} = require("../queries/games");

// INDEX
games.get("/", async (req, res) => {
  const allGames = await getAllGames();
  if (allGames[0]) {
    res.status(200).json(allGames);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

// SHOW
games.get("/:id", async (req, res) => {
  const { id } = req.params;
  const game = await getGame(id);
  console.log("game", game);
  if (!game.message) {
    res.status(200).json(game);
  } else {
    res.status(404).json({ error: "not found" });
  }
});

// CREATE
games.post("/", checkTitle, checkGenre, async (req, res) => {
  try {
    const game = await createGame(req.body);
    res.status(200).json(game);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});


// DELETE
games.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params
    const deletedGame = await deleteGame(id)
    res.status(200).json(deletedGame)
  } catch (error) {
    res.status(404).json({ error: "id not found" })
  }
})

// UPDATE
games.put("/:id", checkTitle, checkGenre, async (req, res) => {
  try {
    const { id } = req.params
    const updatedGame = await updateGame(id, req.body)
    res.status(200).json(updatedGame)
  } catch (error) {
    res.status(404).json({ error: "game not found" })
  }
})


module.exports = games;
