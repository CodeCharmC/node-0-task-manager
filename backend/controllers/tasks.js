const getAllTask = (req, res) => {
   res.send(`<h1>Task Manager App</h1>`)
};

const createTask = (req, res) => {
   res.send(`<h1>Create Task</h1>`)
};

const getTask = (req, res) => {
   res.send(`<h1>Get Task</h1>`)
};

const updateTask = (req, res) => {
   res.send(`<h1>Update Task</h1>`)
};

const deleteTask = (req, res) => {
   res.send(`<h1>Delete Task</h1>`)
};

module.exports = {
   getAllTask,
   createTask,
   getTask,
   updateTask,
   deleteTask
};