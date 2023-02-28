import { useFormik } from 'formik'
import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function EditStudents() {
    const params = useParams()
    const navigate = useNavigate()
    const formik = useFormik({
       
        initialValues:  {
        studentname:'',
        subject:'',
        teacherid:'',
        teachername:'',
        admissiondate:''
        
    },
    validate:(values) =>{
let errors ={}

if(values.studentname === ""){
    errors.studentname="Please Enter studentname"
}
if(values.subject === ""){
errors.subject="Please Enter subject"
}

if(values.teacherid === ""){
errors.teacherid="Please Enter teacherid"
}


if(values.teachername === ""){
    errors.teachername="Please Enter teachername"
}


if(values.admissiondate === ""){
    errors.admissiondate="Please Enter admissiondate"
}


return errors;
    },
    onSubmit: async (values)=>{
       let students =  await axios.put(`https://63fcaeb9859df29986c21a62.mockapi.io/mockapi/student/${params.id}`,values)
       alert("student updated")
        navigate("/portal/students")

       
    }
})
useEffect(()=>{
    loadStudent()

},[])
let loadStudent = async ()=>{
    try{
        let student = await axios.get(`https://63fcaeb9859df29986c21a62.mockapi.io/mockapi/student/${params.id}`)
        formik.setValues({
            studentname:student.data.studentname,
            subject:student.data.subject,
            teacherid:student.data.teacherid,
            teachername:student.data.teachername,
            admissiondate:student.data.admissiondate
            
        }
        )
        
    }
    catch (error){

    }
}


  return (
    <>
    
        <div className='container'>
            <form onSubmit={formik.handleSubmit}>
        <div className='row'>
        
        <div className='col-lg-6'>
            <label>StudentName</label>
            <input 
            className='form-control'
             type={"text"}
        value={formik.values.studentname}
        onChange={formik.handleChange}
        name="studentname">
        </input>
        <span style={{color:'red'}}>{formik.errors.studentname}</span>
            </div>
            <div className='col-lg-6'>
            <label>Subject</label>
            <input className='form-control'
            value={formik.values.subject}
            onChange={formik.handleChange} 
            name="subject"
            type={"text"}>
            </input>
            <span style={{color:'red'}}>{formik.errors.subject}</span>
            </div>
            <div className='col-lg-6'>
            <label>TeacherId</label>
            <input className='form-control'
            type={"text"}
             value={formik.values.teacherid}
             onChange={formik.handleChange} 
             name="teacherid"
              ></input>
               <span style={{color:'red'}}>{formik.errors.teacherid}</span>
            </div>
           <div className='col-lg-6'>
            <label>TeacherName</label>
            <input className='form-control'
            value={formik.values.teachername}
            onChange={formik.handleChange}
            name="teachername"
            type={"text"}></input>
             <span style={{color:'red'}}>{formik.errors.teachername}</span>
            </div>
            <div className='col-lg-6'>
            <label>Admission Date</label>
            <input className='form-control'
            value={formik.values.admissiondate}
            onChange={formik.handleChange}
            name="admissiondate"
             type={"text"}></input>
              <span style={{color:'red'}}>{formik.errors.admissiondate}</span>
            </div>
            
           
            <div className='col-lg-6'>
            <button className='btn btn-primary mt-2' 
            type={"submit"} value={"submit"} disabled={!formik.isValid}>submit</button>
            </div>
            
        </div>
        </form>
    </div>
    </>
   

  )
}

export default EditStudents