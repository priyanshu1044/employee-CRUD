
const mongoose =require('mongoose')

const dbUri='Your mongodb url here'

mongoose.set('strictQuery',false)
module.exports=()=>{
    return mongoose.connect(dbUri)
}
