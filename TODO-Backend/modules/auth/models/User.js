const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String
}, {timestamps: true});
userSchema.method("toJSON", function () {
    const {__v, _id, ...object} = this.toObject();
    object.id = _id;
    return object;
});
const User = mongoose.model('User', userSchema);

module.exports = User;


