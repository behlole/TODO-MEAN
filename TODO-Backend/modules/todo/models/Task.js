const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    name: String,
    description: String,
    priority: String,
    dueDate: Date,
    status: String
}, {timestamps: true});
taskSchema.method("toJSON", function () {
    const {__v, _id, ...object} = this.toObject();
    object.id = _id;
    return object;
});
const Task = mongoose.model('Task', taskSchema);

module.exports = Task;


