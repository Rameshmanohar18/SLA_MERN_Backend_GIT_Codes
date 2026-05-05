import express from 'express'
import { addingData,gettingbyId,gettingData,deletebydata,updatedata } from '../controllers/addingController.js'


// http://localhost:5000/api/adding/insert
// http://localhost:5000/api/adding/getting
// http://localhost:5000/api/adding/gettingbyid/69e213aad2a46bf37f2faaa7
// http://localhost:5000/api/adding/deletedata/69e213aad2a46bf37f2faaa7
// http://localhost:5000/api/adding/updatedata/69e213aad2a46bf37f2faaa7

const route = express.Router()

route.post("/insert",addingData)
route.get("/getting",gettingData)
route.get("/gettingbyid/:userid",gettingbyId)
route.delete("/deletedata/:userid",deletebydata)
route.put("/updatedata/:userid",updatedata)

export default route