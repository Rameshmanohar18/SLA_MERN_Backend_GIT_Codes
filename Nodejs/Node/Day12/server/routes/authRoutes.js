import express from 'express'
import { insertData, loginData } from '../controllers/authController.js'


// http://localhost:5000/api/auth/insert
// http://localhost:5000/api/auth/login
const routes = express.Router()

routes.post("/insert",insertData)
routes.post("/login",loginData)


export default routes