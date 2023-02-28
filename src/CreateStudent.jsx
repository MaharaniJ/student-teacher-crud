import { useFormik } from 'formik';
import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateStudent() {
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
    errors.studentname="Please Enter name"
}
if(values.subject === ""){
errors.subject="Please Enter subject"
}

if(values.id === ""){
errors.id="Please Enter id"
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
        let student = await axios.post(`https://63fcaeb9859df29986c21a62.mockapi.io/mockapi/student`, values)
        alert("student Created")
        navigate('/portal/students')
    }
}

    )

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
            <label>Teacher Id</label>
            <input className='form-control'
            type={"text"}
             value={formik.values.id}
             onChange={formik.handleChange} 
             name="teacherid"
              ></input>
               <span style={{color:'red'}}>{formik.errors.id}</span>
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

export default CreateStudent;