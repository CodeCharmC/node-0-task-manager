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


//app.get("/api/v1/tasks") --> get all tasks
//app.post("/api/v1/tasks") --> create new task
//app.get("/api/v1/tasks/:id") --> get single task
//app.patch("/api/v1/tasks/:id") --> update task
//app.delete("/api/v1/tasks/:id") --> delete task

//REST API = REpresentational State Transfer API