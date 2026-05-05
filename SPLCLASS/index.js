import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import addingRoutes from './routes/addingRoute.js'
import dbConnect from './config/db.js'

dotenv.config()


const app = express()

dbConnect()

app.use(cors())
app.use(express.json())

app.use("/api/adding",addingRoutes)

const PORT = process.env.PORT || 3000


app.listen(PORT,()=>{
    console.log(`Server Connected Successfully on http://loclahost:${PORT}`);
    
})



// http://localhost:5000/api/adding