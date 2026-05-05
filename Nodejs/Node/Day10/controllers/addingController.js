import addingModle from "../models/addingModel.js";

export const addingData = async (req,res)=>{


try {

const {name,mobile,email} = req.body

const adding = await addingModle.create({name,mobile,email})
res.status(201).json({msg:"Succfully Added",adding})
    
 } catch (error) {

    console.log('error',error);
    res.status(500).json({msg:"Error",error})
    
    
 }
    



}

export const gettingData = async (req,res)=>{


try {

    const getData = await addingModle.find()
    res.status(200).json({getData})
    
} catch (error) {
    
    console.log('error',error);
    
    res.status(500).json({msg:error})
    
}


}