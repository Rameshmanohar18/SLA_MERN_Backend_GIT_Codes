import express from 'express'
import { addingData,gettingData } from '../controllers/addingController.js'


// http://localhost:5000/api/adding/insert
// http://localhost:5000/api/adding/getting

const route = express.Router()

route.post("/insert",addingData)
route.get("/getting",gettingData)


export default route