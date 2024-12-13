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

const port = process.env.PORT || 3000;

const start = async () => {
   try {
      await connectDB(process.env.MONGO_URL);
      app.listen(port, () => {
         console.log(`Server is listening on ${port} ...`);
      });
   } catch (error) {
      console.log(error);
   }
};

start();