import mongoose from "mongoose";




const connectDB = async()=>{

try {

  const dataconn = await mongoose.connect(process.env.MONGO_URI)
  console.log(`DB Connected Successfully ${dataconn.connection.host}`);
    
} catch (error) {

    console.log('Something error',error);
    
    
}
  


}

export default connectDB