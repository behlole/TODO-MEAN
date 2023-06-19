const Task = require('../models/Task'); // Replace './path/to/task/model' with the correct path to your task model file
const taskSchema = require('../Schema/taskSchema');
const {sendSuccessMessage, sendErrorMessage} = require("../../../utils/sendFormattedResponses"); // Replace './path/to/task/schema' with the correct path to your task schema file

// Create a new task
const createTask = async (req, res) => {
    try {
        const {error, value} = taskSchema.validate(req.body);
        if (error) {
            res.status(400).json({error: error.details[0].message});
            return;
        }

        const {name, description, priority, dueDate, status} = value;
        const task = new Task({name, description, priority, dueDate, status});
        const savedTask = await task.save();
        res.json(savedTask);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

// Get all tasks
const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        return sendSuccessMessage(res, tasks)
    } catch (error) {
        return sendErrorMessage(res, error.message)
    }
};

// Get a single task by ID
const getTaskById = async (req, res) => {
    try {
        const taskId = req.params.id;
        const task = await Task.findById(taskId);
        if (!task) {
            return sendErrorMessage(res, "Task Not found")
        } else {
            return sendSuccessMessage(res, task)
        }
    } catch (error) {
        return sendErrorMessage(res, error.message)
    }
};

// Update a task by ID
const updateTaskById = async (req, res) => {
    try {
        const {error, value} = taskSchema.validate(req.body);
        if (error) {
            res.status(400).json({error: error.details[0].message});
            return;
        }

        const taskId = req.params.id;
        const {name, description, priority, dueDate, status} = value;
        const updatedTask = await Task.findByIdAndUpdate(
            taskId,
            {name, description, priority, dueDate, status},
            {new: true}
        );
        if (!updatedTask) {
            return sendErrorMessage(res, "Task Not Found")
        } else {
            return sendSuccessMessage(res, updatedTask)
        }
    } catch (error) {
        return sendErrorMessage(res, error.message)
    }
};

// Delete a task by ID
const deleteTaskById = async (req, res) => {
    try {
        const taskId = req.params.id;
        const deletedTask = await Task.findByIdAndDelete(taskId);
        if (!deletedTask) {
            return sendErrorMessage(res, "Task Not Found")
        } else {
            return sendSuccessMessage(res, deletedTask)
        }
    } catch (error) {
        return sendErrorMessage(res, error.message)
    }
};

module.exports = {
    createTask,
    getAllTasks,
    getTaskById,
    updateTaskById,
    deleteTaskById
};
