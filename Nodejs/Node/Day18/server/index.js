import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'

dotenv.config()

const app = express()

connectDB()
app.use(cors())
app.use(express.json())



app.use("/uploads", express.static("uploads"))

app.use("/api/product", productRoutes)

const PORT = process.env.PORT || 4000


app.listen(PORT,()=>{
    console.log(`Server Connected http://localhost:${PORT}`);
    
})


// http://localhost:5000/api/product