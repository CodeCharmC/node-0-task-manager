const express = require("express");
const router = express.Router();

//controllers
const {
   getAllTask,
   createTask,
   getTask,
   updateTask,
   deleteTask
} = require("../controllers/tasks.js");


//routes
router.route("/").get(getAllTask).post(createTask);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;