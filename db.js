
const mongoose =require('mongoose')

const dbUri='mongodb+srv://priyanshu:priyanshu1234@cluster0.svwgo43.mongodb.net/employee_db?retryWrites=true&w=majority'

mongoose.set('strictQuery',false)
module.exports=()=>{
    return mongoose.connect(dbUri)
}
