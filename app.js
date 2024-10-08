const express = require("express");
const app = express();

//routes
app.get("/", (req, res) => {
   res.send(`<h1>Task Manager App</h1>`)
})


app.listen(3000, () => {
   console.log("Server is listening on port 3000...");
});


//app.get("/api/v1/tasks") --> get all tasks
//app.post("/api/v1/tasks") --> create new task
//app.get("/api/v1/tasks/:id") --> get single task
//app.patch("/api/v1/tasks/:id") --> update task
//app.delete("/api/v1/tasks/:id") --> delete task