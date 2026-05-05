import mongoose  from "mongoose";

const connectDB = async () =>{

        try{
                const dataconnection = await mongoose.connect(process.env.MONGO_URI)
                console.log(`DB Connected Successfully ${dataconnection.connection.host}`);

        }
        catch(error){
            console.log("Something error", error)

        }
    }


  
export default connectDB;