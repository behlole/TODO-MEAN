const express = require('express');
const authRouter = require("./modules/auth/routes");
const todoRouter = require('./modules/todo/routes')
const mainRouter = express.Router();
mainRouter.use('/auth', authRouter);
mainRouter.use('/tasks', todoRouter);


module.exports = mainRouter;
