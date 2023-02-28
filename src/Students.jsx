import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';


function Students() {
    const [students, setstudents] = useState([])
    const [isLoading, setLoading] = useState(false)
    
    useEffect(() => {
        loaddata()

    }, [])

    let loaddata = async () => {
        setLoading(true)
        let students = await axios.get(`https://63fcaeb9859df29986c21a62.mockapi.io/mockapi/student`)
        setstudents(students.data)
        setLoading(false)
    }
    let studentDelete = async (id)=>{
        try{
            let ask  = window.confirm("Do you want to delete?")
            if(ask){
                await axios.delete(`https://63fcaeb9859df29986c21a62.mockapi.io/mockapi/student/${id}`)
                loaddata()
            }
   
        }
        catch (error){

        }
    }

    return (
        <div className="container-fluid">
            <div className='d-sm-flex align-items-center justify-content-between mb-4'>

                {/* <!-- Page Heading --> */}
                <h1 className="h3 mb-2 text-gray-800">Tables</h1>
                <p className="mb-4">
                    <Link to="/portal/createstudent" className={"d-none d-sm-inline-block btn-sm btn-primary"}><li className='fas fa-download fa-sn text-white-50'>
                        </li>Create student</Link></p>
            </div>
            {/* <!-- DataTales Example --> */}
            {
                isLoading? <span>Loading...</span>:
                <div className="card shadow mb-4">
                <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                <thead>
                                    <tr>
                                        <th>#Sl</th>
                                        <th>StudentName</th>
                                        <th>Subject</th>
                                        <th>TeacherId</th>
                                        <th>TeacherName</th>
                                        <th>Admission Date</th>
                                       <th>Action</th>
                                    </tr>
                                </thead>
                                <tfoot>
                                    <tr>
                                        <th>#Sl</th>
                                        <th>Action</th>
                                        <th>Name</th>
                                        <th>Position</th>
                                        <th>Office</th>
                                        <th>Age</th>
                                        <th>Start date</th>
                                        <th>Salary</th>
                                    </tr>
                                </tfoot>
                                <tbody>
                                    {
                                        students.map((student, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{student.studentname}</td>
                                                    <td>{student.subject}</td>
                                                    <td>{student.teacherid}</td>
                                                    <td>{student.teachername}</td>
                                                    <td>{student.admissiondate}</td>
                                                    <td>
                                                    <Link to={`/portal/students/${student.id}`} className='btn btn-sm btn-warning mr-2'>View</Link>
                                                    <Link to={`/portal/students/edit/${student.id}`} className='btn btn-sm btn-primary mr-2'>Edit</Link>
                                                    <button onClick={()=>studentDelete(student.id)} className='btn btn-sm btn-danger mr-2'>Delete</button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            }
        </div>
        // <!-- /.container-fluid -->


    )
}

export default Students;
