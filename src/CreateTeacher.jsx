import { useFormik } from 'formik';
import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Createteacher() {
    const navigate = useNavigate()

    const formik = useFormik({
       
        initialValues:  {
        teachername:'',
        subject:'',
        studentid:'',
        salary:'',
        joiningdate:''
        
    },
    validate:(values) =>{
let errors ={}

if(values.teachername === ""){
    errors.teachername="Please Enter name"
}
if(values.subject === ""){
errors.subject="Please Enter subject"
}

if(values.studentid === ""){
errors.studentid="Please Enter studentid"
}


if(values.salary === ""){
    errors.salary="Please Enter salary"
}


if(values.joiningdate === ""){
    errors.joiningdate="Please Enter joiningdate"
}


return errors;
    },
    onSubmit: async (values)=>{
        let teacher = await axios.post(`https://63fdfa3d19f41bb9f6587a85.mockapi.io/mockapi/teacher`, values)
        alert("teacher Created")
        navigate('/portal/teacher')
    }
}

    )
   

  return (
    <>
    
        <div className='container'>
            <form onSubmit={formik.handleSubmit}>
        <div className='row'>
        
        <div className='col-lg-6'>
            <label>Teacher Name</label>
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
            <label>Student Id</label>
            <input className='form-control'
            type={"text"}
             value={formik.values.studentid}
             onChange={formik.handleChange} 
             name="studentid"
              ></input>
               <span style={{color:'red'}}>{formik.errors.studentid}</span>
            </div>
           <div className='col-lg-6'>
            <label>Salary</label>
            <input className='form-control'
            value={formik.values.salary}
            onChange={formik.handleChange}
            name="salary"
            type={"text"}></input>
             <span style={{color:'red'}}>{formik.errors.salary}</span>
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

export default Createteacher;