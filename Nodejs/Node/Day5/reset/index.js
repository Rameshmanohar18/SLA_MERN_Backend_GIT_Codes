import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import userRoute from './routes/userRoutes.js'

dotenv.config()


const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/auth",userRoute)

const PORT = process.env.PORT || 4000


app.listen(PORT,()=>{
    console.log(`Server Running on http://localhost:${PORT}`);
    
})

// req - name ,mobile,email 

// res - json {}
// http://localhost:5000/api/auth