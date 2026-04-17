export const movieCreate = (req,res)=>{
console.log(req)
   const {id,movieName,movieCat,hero,heroine} = req.body
   try {
    const data = []
    const obj = {id,movieName,movieCat,hero,heroine}
    data.push(obj)``
    //console.log(data);
   const newData = data.find((e)=>e.id==1003)
   console.log('Filter',newData);
    res.status(200).json({msg:"Successfully Added" ,sendData:newData.movieName})
   } catch (error) {
    console.log('Error',error);
    res.json({msg:"Something error"})
   }
}




export const MovieGetByParams = (req,res)=>{
    console.log(req.params);
}


export const movieFilter = (req,res)=>{
    console.log(req.query);
    console.log(res)
}

export const movieToken = (req,res)=>{
    console.log(req.headers.authorization);     
}