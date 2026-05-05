import mongoose from "mongoose";




const addingSchema = new mongoose.Schema({
    name:String,
    mobile:Number,
    email:String,
    createdby:{type:String,default:"Admin"},
    updatedby:{type:String,default:"Admin"},

},{timestamps:true})


const addingModle = mongoose.model("addingData",addingSchema)


export default addingModle