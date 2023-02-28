import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom';
import axios from 'axios';

function StudentsView() {

    const params = useParams()
    
    const [searchParams, setSearchParams] = useSearchParams()
    console.log(...searchParams)
    const [studentData, setstudentData] = useState({});
    
    useEffect(()=>{
        loadStudent()
    },[])
    let loadStudent = async ()=>{
        try {
            let student = await axios.get(`https://63fcaeb9859df29986c21a62.mockapi.io/mockapi/student/${params.id}`)
            setstudentData(student.data)
        }
        catch(error){

        }
       
}
   
  return (
    <div>
        <h1>{studentData.studentname}</h1>
        <h1>{studentData.subject}</h1>
        <h1>{studentData.teacherid}</h1>
        <h1>{studentData.teachername}</h1>
        <h1>{studentData.admissiondate}</h1>
        </div>
  )
}

export default StudentsView;