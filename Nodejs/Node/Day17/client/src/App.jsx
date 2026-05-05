import axios from "axios"
import { useEffect, useState } from "react"


const App = () => {

const [formDatas,setFormDatas] = useState({taskName:"",taskType:"",taskDate:""})
const [showData,setShowData] = useState([])
const [editId,setEditId] = useState("")

 const getDatas = async ()=>{
  try {

    const getbackendData = await axios.get("http://localhost:5000/api/todo/gettask")
   
    setShowData(getbackendData.data.getData)

    
  } catch (error) {

    alert(error.response.data.msg)
    
  }
}


useEffect(()=>{

 

(async ()=>{getDatas()})()


},[])



const handleChange = (e)=>{

  setFormDatas({...formDatas,[e.target.name]:e.target.value})

}

const handleAdd = async (e)=>{

  e.preventDefault()

  try {

   const addTask = await axios.post("http://localhost:5000/api/todo/createtask",formDatas)
   alert(addTask.data.msg)
   
   setFormDatas({taskName:"",taskType:"",taskDate:""})
   
   getDatas()
    
  } catch (error) {

    alert(error.response.data.msg)
    
  }

}



const handleEdit = (users)=>{

console.log(users);

setFormDatas(users)

setEditId(users._id)

}

const handleUpdate = async(e)=>{
 e.preventDefault()

  try {

    const updateData = await axios.put(`http://localhost:5000/api/todo/updatetask/${editId}`,formDatas)
    alert(updateData.data.msg)
    setEditId("")
    setFormDatas({taskName:"",taskType:"",taskDate:""})
    
    getDatas()
    
  } catch (error) {

    alert(error.response.data.msg)
    
  }


}



const handleDelete = async(userid)=>{


  try {

    const deteleData = await axios.delete(`http://localhost:5000/api/todo/deletetask/${userid}`)
    alert(deteleData.data.msg)
    getDatas()
    
  } catch (error) {

    alert(error.response.data.msg)
    
  }


}

  return (
  <>
  <form>
    <input type="text" name="taskName"  placeholder="Enter the Task" onChange={handleChange} value={formDatas.taskName} />
    <input type="text" name="taskType"  placeholder="Enter the Task Type" onChange={handleChange} value={formDatas.taskType} />
    <input type="date" name="taskDate"  placeholder="Enter the Task Date" onChange={handleChange} value={formDatas.taskDate} />
    {editId?<button onClick={handleUpdate}>Update Task</button>: <button onClick={handleAdd}>Add Task</button>}
   
    
  </form>




<hr />

  <div>
   <table border={2}>
    <thead>
      <tr>
        <th>S.no</th>
        <th>Task Name</th>
        <th>Task Type</th>
        <th>Task Start Date</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    </thead>


    <tbody>

      {showData.map((e,i)=>(
        <tr key={e._id}>
        <td>{i+1}</td>
        <td>{e.taskName}</td>
        <td>{e.taskType}</td>
        <td>{e.taskDate}</td>
        <td>{
          e.taskStatus?"Completed":"Pending"
          }</td>
        <td><button onClick={()=>handleEdit(e)}>Edit</button> || <button onClick={()=>handleDelete(e._id)}>Delete</button></td>
      </tr>

      ))}
      
    </tbody>
   </table>
  </div>
  </>
  )
}

export default App
