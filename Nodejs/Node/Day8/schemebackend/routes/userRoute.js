import express from 'express'
import { createData,getData,getDatayId,updatedDatayId,deleteDatayId } from '../controllers/userController.js'


const route = express.Router()


route.post("/create",createData)
route.get("/get",getData)
route.get("/getid/:userid",getDatayId)
route.put("/getupdateid/:userid",updatedDatayId)
route.delete("/getdeleteid/:userid",deleteDatayId)
export default route


// http://localhost:5000/api/users/create
// http://localhost:5000/api/users/get
// http://localhost:5000/api/users/getid/69df76a679ae310b0f829af5

// http://localhost:5000/api/users/getupdateid/69df76a679ae310b0f829af5
// http://localhost:5000/api/users/getdeleteid/69df76a679ae310b0f829af5