const bodyParser = require('body-parser')
const express=require('express')

//imports
const connectDb=require('./db')
const employeeRoutes=require('./controllers/employee.controller')
const { errorHandler } = require('./middlewares')

//app 
const app=express()

//middleware
app.use(bodyParser.json())
app.use('/api/employees',employeeRoutes)
app.use(errorHandler)


connectDb()
    .then(()=>{
        console.log('db connection is succeeded');
        app.listen(3000,()=>{
            console.log('server started on 3000 ')
        })  
    })
    .catch(err=>console.log(err))