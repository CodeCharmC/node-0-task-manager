const express = require("express");
const app = express();
const task = require("./backend/routes/tasks.js");
const notFound = require("./backend/middleware/not-found.js");
const errorHandler = require("./backend/middleware/error-handler.js");

const connectDB = require("./db/connect.js");

require("dotenv").config();

//middleware
app.use(express.static("./frontend"));
app.use(express.json());

//routes
app.use("/api/v1/tasks", task);

app.use(notFound);
app.use(errorHandler);

const start = async () => {
   try {
      await connectDB(process.env.MONGO_URL);
      app.listen(3000, () => {
         console.log("Server is listening on port 3000...");
      });
   } catch (error) {
      console.log(error);
   }
};

start();


//app.get("/api/v1/tasks") --> get all tasks
//app.post("/api/v1/tasks") --> create new task
//app.get("/api/v1/tasks/:id") --> get single task
//app.patch("/api/v1/tasks/:id") --> update task
//app.delete("/api/v1/tasks/:id") --> delete task

//REST API = REpresentational State Transfer API