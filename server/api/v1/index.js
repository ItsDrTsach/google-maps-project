const router = require("express").Router();

router.use("/city", require("./cities"));

module.exports = router;
