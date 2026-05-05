import express from 'express'
import { registerData,loginData,dashboardData } from '../controllers/validationController.js'

// http://localhost:5000/api/validation/register
// http://localhost:5000/api/validation/login
// http://localhost:5000/api/validation/dashboard
const routes = express.Router()


routes.post("/register",registerData)
routes.post("/login",loginData)
routes.get("/dashboard",dashboardData)

export default routes




// http://localhost:5000/api/validation/register

// http://localhost:5000/api/validation/login

// {userName,userEmail,userPassword} - req


