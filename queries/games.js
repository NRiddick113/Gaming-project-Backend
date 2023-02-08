const db = require("../db/dbConfig");

const getAllGames = async () => {
  try {
    const allGames = await db.any("SELECT * FROM games");
    return allGames;
  } catch (error) {
    return error;
  }
};

const getGame = async (id) => {
  try {
    const oneGame = await db.one("SELECT * FROM games WHERE id=$1", id);
    return oneGame;
  } catch (error) {
    return error;
  }
};

// CREATE
const createGame = async (game) => {
  try {
    const newGame = await db.one(
      "INSERT INTO games (name, url, category, is_favorite) VALUES($1, $2, $3, $4) RETURNING *",
      [game.name, game.url, game.category, game.is_favorite]
    );
    return newGame;
  } catch (error) {
    return error;
  }
};


// DELETE
const deleteGame = async (id) => {
  try {
    const deletedGame = await db.one('DELETE FROM games WHERE id=$1 RETURNING *', id)
    return deletedGame
  } catch (error) {
    return error
  }
}


// UPDATE
const updateGame = async (id, Game) => {
  try {
    const updatedGame = await db.one("UPDATE Games SET url=$1, name=$2, category=$3, is_favorite=$4 WHERE id=$5 RETURNING *", [Game.url, Game.name, Game.category, Game.is_favorite, id])
    return updatedGame
  } catch (error) {
    return error
  }
}


module.exports = { getAllGames, getGame, createGame, deleteGame, updateGame };