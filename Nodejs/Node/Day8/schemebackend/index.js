import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/db.js'

import userRoutes from './routes/userRoute.js'

dotenv.config()

const main = express()

connectDB()

main.use(cors())
main.use(express.json())

main.use("/api/users",userRoutes)

const PORT  = process.env.PORT || 3000



main.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`);
    
})

// http://localhost:5000/api/users