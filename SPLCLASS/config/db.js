import mongoose  from "mongoose";


const dbConnect = async()=>{


  try {

    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log(`Db Connected ${conn.connection.host}`);
    
  } catch (error) {

    console.log('something error',error);
    process.exit(0)
    
  }
    


}


export default dbConnect