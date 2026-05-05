import express from 'express'
import { added,getDatas } from '../controllers/prodcutController.js'
import { uplaod } from '../config/multer.js'
import { useState } from 'react'

// // http://localhost:5000/api/product/imageadded
// // http://localhost:5000/api/product/getData

const routes = express.Router()


routes.post("/imageadded", uplaod.single("image") ,added)

routes.get("/getData" ,getDatas)

export default routes







