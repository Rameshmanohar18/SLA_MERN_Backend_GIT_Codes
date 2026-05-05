import mongoose from "mongoose";



const validSchema = new mongoose.Schema({

    userName:String,
    userEmail:String,
    userPassword:String

},{timestamps:true})


const validationModel = mongoose.model("userDatas",validSchema)

export default validationModel