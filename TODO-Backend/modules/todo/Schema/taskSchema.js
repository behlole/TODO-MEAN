const Joi = require('joi');

const taskSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    priority: Joi.string().valid('low', 'medium', 'high').required(),
    dueDate: Joi.date().iso().required(),
    status: Joi.string().valid('pending', 'in progress', 'completed').required(),
});

module.exports = taskSchema;
