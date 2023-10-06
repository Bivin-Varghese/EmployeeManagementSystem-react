const db = require('./db');

//get all the records of employee
const allEmployees = () => {
    return db.Employee.find().then((result) => {
        if (result) {
            return {
                statusCode: 200,
                employees: result
            }
        }
        else {
            return {
                statusCode: 401,
                message: "No employee found"
            }
        }
    })
}


const addEmployee = (id, empname, age, title, position, salary) => {
    return db.Employee.findOne({ id }).then((result) => {
        if (result) {
            return {
                statusCode: 401,
                message: 'Employee already exists'
            }
        }
        else {
            const newEmployee = new db.Employee({ id, empname, age, title, position, salary })
            newEmployee.save()
            return {
                statusCode: 200,
                message: 'Employee added sucsessfully'
            }
        }
    })
}


//delete employee

const deleteEmployee = (id) => {
    return db.Employee.deleteOne({ id }).then((response) => {
        return {
            statusCode: 200,
            message: 'Employee deleted sucessfully'
        }
    })
}



// fetch particular employee 

const fetchEmployee = (id) => {
    return db.Employee.findOne({ id }).then((result) => {
        return {
            statusCode: 200,
            employee: result
        }
    })
}

// update emplpyee 
const updateEmployee = (id, empname, age, title, position, salary) => {
    return db.Employee.findOne({ id }).then((result) => {
        if (result) {
            result.id = id
            result.empname = empname
            result.age = age
            result.title = title
            result.position = position
            result.salary = salary

            result.save()

            // send response to client 
            return {
                statusCode: 200,
                message: 'employee data updated successfully'
            }
        }
        else {
            return {
                statusCode: 401,
                message: 'no data found'
            }
        }


    })
}


module.exports = {
    allEmployees,
    addEmployee,
    deleteEmployee,
    fetchEmployee,
    updateEmployee
}