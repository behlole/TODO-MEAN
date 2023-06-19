const express = require('express');
const todoRouter = express.Router();
const taskController = require('./controllers/TaskController'); // Replace './path/to/task/controller' with the correct path to your task controller file


// Create a new task
todoRouter.post('/', taskController.createTask);

// Get all tasks
todoRouter.get('/', taskController.getAllTasks);

// Get a single task by ID
todoRouter.get('/:id', taskController.getTaskById);

// Update a task by ID
todoRouter.put('/:id', taskController.updateTaskById);

// Delete a task by ID
todoRouter.delete('/:id', taskController.deleteTaskById);

module.exports = todoRouter;
