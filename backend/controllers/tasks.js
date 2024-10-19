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

const getTask = async (req, res) => {
   try {
      const { id: taskID } = req.params;
      const task = await Task.findOne({ _id: taskID });

      if (!task) {
         return res.status(404).json({ msg: `No task with id : ${taskID}` });
      };
      
      res.status(200).json({ task });  
   } catch (error) {
      res.status(500).json({ error: error.message });
   };
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