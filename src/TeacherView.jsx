import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom';
import axios from 'axios';

function TeachersView() {

    const params = useParams()
    
    const [searchParams, setSearchParams] = useSearchParams()
    console.log(...searchParams)
    const [teacherData, setteacherData] = useState({});
    
    useEffect(()=>{
        loadTeacher()
    },[])
    let loadTeacher = async ()=>{
        try {
            let teacher = await axios.get(`https://63fdfa3d19f41bb9f6587a85.mockapi.io/mockapi/teacher/${params.id}`)
            setteacherData(teacher.data)
        }
        catch(error){

        }
       
}
   
  return (
    <div>
        
        <h1>{teacherData.teachername}</h1>
        <h1>{teacherData.subject}</h1>
        <h1>{teacherData.teacheid}</h1>
        <h1>{teacherData.salary}</h1>
        <h1>{teacherData.joiningdate}</h1>
        </div>
  )
}

export default TeachersView;