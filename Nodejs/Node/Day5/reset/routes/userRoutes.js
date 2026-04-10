import express from 'express'
import { dataAdding, getByID,getdatas } from '../controllers/userController.js'



// http://localhost:5000/api/auth/create
// http://localhost:5000/api/auth/getByid/100
// http://localhost:5000/api/auth/get
const routes = express.Router()


routes.post("/create",dataAdding)

routes.put("/getByid/:userId",getByID)
routes.get("/get",getdatas)

export default routes