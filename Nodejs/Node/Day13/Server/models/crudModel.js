import mongoose from 'mongoose'




const crudScheme = new mongoose.Schema({
    userName:String,
    email:String,
    mobile:Number,
    age:Number,
    createBy:{type:String,default:"Admin"},
    updatedBy:{type:String,default:"Admin"}
},{timestamps:true})

 
const curdModel  = mongoose.model("registerData",crudScheme)

export default curdModel