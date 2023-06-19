const User = require('../models/User');
const bcrypt = require('bcrypt');
const {UserSchema, loginSchema} = require('../Schema/authSchema');
const jsonwebtoken = require('jsonwebtoken');

const {sendSuccessMessage, sendErrorMessage} = require("../../../utils/sendFormattedResponses");
module.exports = {
    login: async (req, res) => {
        try {
            let isValidated = loginSchema.validate(req.body);
            if (isValidated.error) {
                throw isValidated.error
            }

            let {email, password} = req.body
            let user = await User.findOne({email: email});
            if (user) {
                if (bcrypt.compareSync(password, user.password)) {
                    let token = await jsonwebtoken.sign({
                        user
                    }, process.env.SECRET_KEY)
                    return sendSuccessMessage(res, {user, token: token}, "User Logged in Successfully")
                }
            }
            throw "No User Found or Invalid Password";
        } catch (e) {
            if (e.message)
                return sendErrorMessage(res, e.message)
            else
                return sendErrorMessage(res, e)
        }

    },
    register: async (req, res) => {
        try {
            let isValidated = UserSchema.validate(req.body)
            if (isValidated.error) {
                throw isValidated.error
            }
            let {name, email, password} = req.body;

            password = await bcrypt.hashSync(password, 10);
            const user = await User.create({name, email, password});
            return sendSuccessMessage(res, user)
        } catch (e) {
            return sendErrorMessage(res, e.message)
        }
    }
}
