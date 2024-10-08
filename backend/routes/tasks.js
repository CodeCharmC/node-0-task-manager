const express = require("express");
const router = express.Router();

//controllers
const {
   getAllTask
} = require("../controllers/tasks.js");


//routes
router.route("/").get(getAllTask);

module.exports = router;