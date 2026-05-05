import validationModel from '../models/validationModel.js'
import bcrypt from 'bcrypt'
export const registerData = async (req,res)=>{

    const {userName,userEmail,userPassword} = req.body


    try {

       const checkEmail = await validationModel.findOne({userEmail})

       if(checkEmail){
        res.status(404).json({msg:"Already Regsiter"})
        return
       }

      const passwordHash = await bcrypt.hash(userPassword,10)
      
      const conndata = await validationModel.create({userName,userEmail,userPassword:passwordHash})
        
      res.status(201).json({msg:"Successfully Created"})

    } catch (error) {

        console.log('Erorr',error);
         res.status(500).json({msg:error})
        
        
    }

}


export const loginData = async (req,res)=>{


        const {userEmail,userPassword} = req.body


    try {

       const checkEmail = await validationModel.findOne({userEmail})

       if(!checkEmail){
        res.status(404).json({msg:"Ypur Not a Valid user please Register"})
        return
       }

      const passwordCheck = await bcrypt.compare(userPassword,checkEmail.userPassword)
      
      if(!passwordCheck){
        res.status(404).json({msg:"Password Is Wrong"})
        return
            
      }
        
      res.status(200).json({users:checkEmail})

    } catch (error) {

        console.log('Erorr',error);
         res.status(500).json({msg:error})
        
        
    }

}

// export const dashboardData = async(req,res)=>{

//     const getDatas = await validationModel.find()

//     res.status(200).json({users:getDatas})

// }