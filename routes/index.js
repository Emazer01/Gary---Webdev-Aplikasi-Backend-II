const express = require("express");
const router = express.Router();

router.use("/praktikan", require("./praktikan.routes"));

module.exports = router;