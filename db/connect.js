const mongoose = require("mongoose");

// Connect to DB
const connectDB = (url) => {
   return mongoose
      .connect(url, {
         useNewUrlParser: true,
         useCreateIndex: true,
         useFindAndModify: false,
         useUnifiedTopology: true,
      })
};

module.exports = connectDB;