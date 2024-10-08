const express = require("express");
const router = express.Router();

//controllers
const {
   getTask
} = require("../controllers/tasks.js");

router.get("/", getTask);

module.exports = router;