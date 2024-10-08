const express = require("express");
const app = express();

//routes
app.get("/", (req, res) => {
   res.send(`<h1>Task Manager App</h1>`)
})


app.listen(3000, () => {
   console.log("Server is listening on port 3000...");
});
