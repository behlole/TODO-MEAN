const authRouter = require('express').Router();
const authController = require('../auth/controllers/AuthController');
authRouter.post('/register', authController.register);
authRouter.post('/login', authController.login);
module.exports = authRouter;
