const express = require("express");
const router = express.Router();

// @route   GET api/users/test
// @desc    Testa a rota de usuário
// @access  Public
router.get("/test", (req, res) =>
  res.json({ msg: "Testando a rota de users." })
);

module.exports = router;
