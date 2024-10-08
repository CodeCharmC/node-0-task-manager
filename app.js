const express = require("express");
const app = express();
const task = require("./backend/routes/tasks.js");

//routes
app.use("/api/v1/tasks", task); //the inisial route


app.listen(3000, () => {
   console.log("Server is listening on port 3000...");
});


//app.get("/api/v1/tasks") --> get all tasks
//app.post("/api/v1/tasks") --> create new task
//app.get("/api/v1/tasks/:id") --> get single task
//app.patch("/api/v1/tasks/:id") --> update task
//app.delete("/api/v1/tasks/:id") --> delete task