const checkTitle = (req, res, next) => {
    if (req.body.title) {
      next();
    } else {
      res.status(400).json({ error: "Title is required" });
    }
  };
  
  const checkGenre = (req, res, next) => {
    if (req.body.genre) {
      next();
    } else {
      res.status(400).json({ error: "Genre is required" });
    }
  };
  
  module.exports = { checkTitle, checkGenre};

