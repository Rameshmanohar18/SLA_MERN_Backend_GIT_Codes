import curdModel from "../modles/crudModel.js";

export const insertDatas = async (req,res)=>{

    try {

        const {userName,email,mobile,age} = req.body
        if(!userName || !email || !mobile || !age){
            console.log('check');
            
            res.status(404).json({msg:"Please Fill the form"})
            return
        }

        const saveddata = await curdModel.findOne({email})
       
        //console.log(saveddata);

        if(saveddata){
            res.status(404).json({msg:"Already register Use Different"})
            return
        }
        

        const insertData = await curdModel.create({userName,email,mobile,age})
        res.status(201).json({msg:"Successfully Added Your Data"})
        
    } catch (error) {

        console.log('Error',error);
        res.status(500).json({msg:error})
        
        
    }
    

}


export const getDatas = async (req,res)=>{


    try {

        const datas = await curdModel.find()

        res.status(200).json({datas})
        
    } catch (error) {

        res.status(404).json({msg:"Soemthing error"})
        
    }


}