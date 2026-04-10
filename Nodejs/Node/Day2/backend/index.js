import dotenv from 'dotenv'
import http from 'http'
dotenv.config()



const PORT = process.env.PORT || 3000

// console.log(process);


const app = http.createServer()


// console.log(app);

app.listen(PORT,()=>{
    console.log(`Server Connected Successfully on http://localhost:${PORT}`);
    
})
// console.log(process);
