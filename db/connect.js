const mongoose = require("mongoose");

const connectionString = "mongodb"; 

mongoose
   .connect(connectionString, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
   })
   .then(() => { console.log("Connected to DB...") })
   .catch((err) => { console.log(err) });