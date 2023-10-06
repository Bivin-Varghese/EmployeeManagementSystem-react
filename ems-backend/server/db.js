const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/ems', () => {
    console.log('Mongodb connection established');
})

const Employee = mongoose.model('Employee', {
    id: String,
    empname: String,
    age: String,
    title: String,
    position: String,
    salary: String

})


module.exports = {
    Employee
}