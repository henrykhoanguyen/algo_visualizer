const express = require("express");
const {} = require("../controllers/search-algos.ts");

const router = express.Router({ mergeParams: true }); //merge parameters together

// router.route("/").get();

module.exports = router;