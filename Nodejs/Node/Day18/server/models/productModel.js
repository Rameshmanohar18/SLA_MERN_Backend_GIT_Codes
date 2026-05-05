import mongoose from "mongoose";


const productSchema =  new mongoose.Schema({

    producName:String,
    image:String

},{timestamps:true})


const productModel = mongoose.model("Products",productSchema)


export default productModel