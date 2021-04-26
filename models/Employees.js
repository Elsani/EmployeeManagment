const mongoose = require ('mongoose');

const EmployeesSchema = mongoose.Schema({
    employee_id: Number,
    name: String,
    email: String,
    department: String,
    joinD: String,
    description: String,
    status: String,
    updated_date: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Employees', EmployeesSchema);