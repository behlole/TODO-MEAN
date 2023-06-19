const Joi = require('joi');

const UserSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(5).required()
})
const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(5).required()
})
module.exports = {UserSchema, loginSchema};
