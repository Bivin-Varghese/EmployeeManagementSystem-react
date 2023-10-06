const express = require('express')

const cors = require('cors')

const logic = require('./server/logic')

const server = express()

server.use(cors({
    origin: 'http://localhost:3000'
}))

server.use(express.json())

server.listen(8000, () => {
    console.log('EMS server started on 8000');
})

//get all employe data
server.get('/getEmployees', (req, res) => {
    logic.allEmployees().then((result) => {
        res.status(result.statusCode).json(result)
    })
})


//add employeee
server.post('/addEmployee', (req, res) => {
    logic.addEmployee(req.body.id, req.body.empname, req.body.age, req.body.title, req.body.position, req.body.salary,).then((result) => {
        res.status(result.statusCode).json(result)
    })
})

// delete employee 
server.delete('/deleteEmployee/:id', (req, res) => {
    logic.deleteEmployee(req.params.id).then((result) => {
        res.status(result.statusCode).json(result)
    })
})


//fetch particular employee

server.get('/getEmployee/:id', (req, res) => {
    logic.fetchEmployee(req.params.id).then((result) => {
        res.status(result.statusCode).json(result)

    })
})



// update employee 

server.post('/updateEmployee', (req, res) => {
    logic.updateEmployee(req.body.id, req.body.empname, req.body.age, req.body.title, req.body.position, req.body.salary,).then((result) => {
        res.status(result.statusCode).json(result)
    })
})