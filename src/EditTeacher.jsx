import { useFormik } from 'formik'
import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function EditTeachers() {
    const params = useParams()
    const navigate = useNavigate()
    const formik = useFormik({
       
        initialValues:  {
        teachername:'',
        subject:'',
        id:'',
        salary:'',
        joiningdate:''
        
    },
    validate:(values) =>{
let errors ={}

if(values.teachername === ""){
    errors.teachername="Please Enter teachername"
}
if(values.subject === ""){
errors.subject="Please Enter subject"
}

if(values.id === ""){
errors.id="Please Enter id"
}


if(values.salary === ""){
    errors.salary="Please Enter teachername"
}


if(values.joiningdate === ""){
    errors.joiningdate="Please Enter joiningdate"
}


return errors;
    },
    onSubmit: async (values)=>{
        await axios.put(`https://63fdfa3d19f41bb9f6587a85.mockapi.io/mockapi/teacher/${params.id}`,values)
        alert("update teacher")
        navigate("/portal/teacher")
       
    }
})
useEffect(()=>{
    loadteacher()

},[])
let loadteacher = async ()=>{
    try{
        let teacher = await axios.get(`https://63fdfa3d19f41bb9f6587a85.mockapi.io/mockapi/teacher/${params.id}`)
        formik.setValues({
            teachername:teacher.data.teachername,
            subject:teacher.data.subject,
            id:teacher.data.id,
            salary:teacher.data.salary,
            joiningdate:teacher.data.joiningdate
            
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
            <label>TeacherName</label>
            <input 
            className='form-control'
             type={"text"}
        value={formik.values.teachername}
        onChange={formik.handleChange}
        name="teachername">
        </input>
        <span style={{color:'red'}}>{formik.errors.teachername}</span>
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
            <label>Teacher Id</label>
            <input className='form-control'
            type={"text"}
             value={formik.values.id}
             onChange={formik.handleChange} 
             name="id"
              ></input>
               <span style={{color:'red'}}>{formik.errors.id}</span>
            </div>
           <div className='col-lg-6'>
            <label>Salary</label>
            <input className='form-control'
            value={formik.values.salary}
            onChange={formik.handleChange}
            name="salary"
            type={"text"}></input>
             <span style={{color:'red'}}>{formik.errors.teachername}</span>
            </div>
            <div className='col-lg-6'>
            <label>Joining Date</label>
            <input className='form-control'
            value={formik.values.joiningdate}
            onChange={formik.handleChange}
            name="joiningdate"
             type={"text"}></input>
              <span style={{color:'red'}}>{formik.errors.joiningdate}</span>
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

export default EditTeachers;