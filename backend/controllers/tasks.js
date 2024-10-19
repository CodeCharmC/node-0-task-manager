const Task = require("../models/task.js");

const getAllTask = async (req, res) => {
   try {
      const tasks = await Task.find({})
      res.status(200).send({ tasks });
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
};

const createTask = async (req, res) => {
   try {
      const task = await Task.create(req.body);
      res.status(201).json({ task });
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
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