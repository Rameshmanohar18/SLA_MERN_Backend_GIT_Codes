import express from 'express'
import cors from 'cors'
import dotenv from'dotenv'

import curdRoute from './routes/crudRoutes.js'
import connectDB from './config/db.js'

dotenv.config()


const app = express()

 connectDB()


app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 3000
app.use("/api/crud",curdRoute)

app.listen(PORT,()=>{

    console.log(`Server Connected http://localhost:${PORT}`);
    
})


// http://localhost:5000/api/crud