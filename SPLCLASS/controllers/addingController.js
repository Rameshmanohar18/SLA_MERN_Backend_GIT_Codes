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



export const gettingbyId = async (req,res)=>{

    try {
        const {userid} = req.params

        if(!userid){
        console.log('Somethinv error',error);
        return  res.status(500).json({msg:"User DI not found"})
        }
        const getid = await addingModle.findById(userid)
        //console.log(getid);
        res.status(200).json({getid})
        
    } catch (error) {

        console.log('Somethinv error',error);
        res.status(500).json({msg:"User DI not found"})
        
    }

}


export const deletebydata = async(req,res) =>{
    try {
        const {userid} = req.params
         if(!userid){
        console.log('Somethinv error',error);
        return  res.status(500).json({msg:"User DI not found"})
        }
        const deleebyid = await addingModle.findByIdAndDelete(userid)
        res.status(200).json({msg:"Successfully Deteleted"})
        
    } catch (error) {

        console.log('Somethinv error',error);
        res.status(500).json({msg:"User DI not found"})
        
    }
}


export const updatedata = async (req,res)=>{


    try {

    const {name,mobile,email} = req.body
    const {userid} = req.params
    const update = await addingModle.findByIdAndUpdate(userid,{name,mobile,email})
    res.status(200).json({msg:"Updated"})
        
    } catch (error) {
         console.log('Somethinv error',error);
        res.status(500).json({msg:error})
    }

}