import express from 'express'
import { insertDatas,getDatas } from '../controllers/curdControllers.js'

// http://localhost:5000/api/crud/insert
// http://localhost:5000/api/crud/getData

const routes = express.Router()


routes.post("/insert",insertDatas)
routes.get("/getData",getDatas)

export default routes




// http://localhost:5000/api/crud/insert
// Req: userName,email,mobile,age - req
// res:successfully done


// http://localhost:5000/api/crud/getData
// req  - when you hit this - it will give the 
// datas from the DB