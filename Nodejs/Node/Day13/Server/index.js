import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import validationRoute from './routes/validationRoutes.js'
import ConnecDB from './config/db.js'

dotenv.config()


const app = express()
app.use(cors())
app.use(express.json())
app.use("/api/validation",validationRoute)
const PORT = process.env.PORT || 3000

ConnecDB()
app.listen(PORT,()=>{
    console.log(`Server Connected http://localhost:${PORT}`);
    
})


// http://localhost:5000/api/validation