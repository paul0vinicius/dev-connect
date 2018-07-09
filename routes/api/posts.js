const express = require("express");
const router = express.Router();

// @route   GET api/posts/test
// @desc    Testa a rota de posts
// @access  Public
router.get("/test", (req, res) =>
  res.json({ msg: "Testando a rota de posts." })
);

module.exports = router;
