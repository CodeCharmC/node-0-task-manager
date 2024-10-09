const Task = require("../models/task.js");

const getAllTask = (req, res) => {
   res.send(`<h1>Task Manager App</h1>`)
};

const createTask = (req, res) => {
   res.json(req.body);
};

const getTask = (req, res) => {
   res.json({
      id: req.params.id
   })   
};

const updateTask = (req, res) => {
   res.json({
      id: req.params.id
   }) 
};

const deleteTask = (req, res) => {
   res.json({
      id: req.params.id
   }) 
};

module.exports = {
   getAllTask,
   createTask,
   getTask,
   updateTask,
   deleteTask
};