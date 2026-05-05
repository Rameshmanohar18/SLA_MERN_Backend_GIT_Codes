import express from 'express'
import { insertDatas } from '../controllers/middlewareControllers.js'
import { validateUsers } from '../middleware/authMiddleware.js'


// http://localhost:5000/api/crud/insert
// http://localhost:5000/api/crud/getData

const routes = express.Router()


routes.post("/insert", validateUsers,  insertDatas)


export default routes




// http://localhost:5000/api/middleware/insert
// Req: userName,email,mobile,age - req
// res:successfully done


// http://localhost:5000/api/crud/getData
// req  - when you hit this - it will give the 
// datas from the DB