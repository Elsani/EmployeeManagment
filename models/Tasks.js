const mongoose = require ('mongoose');

const TasksSchema = mongoose.Schema({
    task_id: Number,
    title: String,
    description: String,

    updated_date: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Tasks', TasksSchema);