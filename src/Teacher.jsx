import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';


function Teachers() {
    const [teachers, setTeachers] = useState([])
    const [isLoading, setLoading] = useState(false)
    
    useEffect(() => {
        loaddata()

    }, [])

    let loaddata = async () => {
        setLoading(true)
        let teachers = await axios.get(`https://63fdfa3d19f41bb9f6587a85.mockapi.io/mockapi/teacher`)
        setTeachers(teachers.data)
        setLoading(false)
    }
    let teacherDelete = async (id)=>{
        try{
            let ask  = window.confirm("Do you want to delete?")
            if(ask){
                await axios.delete(`https://63fdfa3d19f41bb9f6587a85.mockapi.io/mockapi/teacher/${id}`)
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
                    <Link to="/portal/createteacher" className={"d-none d-sm-inline-block btn-sm btn-primary"}><li className='fas fa-download fa-sn text-white-50'>
                        </li>Create teacher</Link></p>
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
                                        <th>TeacherName</th>
                                        <th>Subject</th>
                                        <th>Teacher Id</th>
                                        <th>Salary</th>
                                        <th>Joining Date</th>
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
                                        teachers.map((teacher, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{teacher.teachername}</td>
                                                    <td>{teacher.subject}</td>
                                                    <td>{teacher.id}</td>
                                                    <td>{teacher.teachername}</td>
                                                    <td>{teacher.joiningdate}</td>
                                                    <td>
                                                    <Link to={`/portal/teacher/${teacher.id}`} className='btn btn-sm btn-warning mr-2'>View</Link>
                                                    <Link to={`/portal/teacher/edit/${teacher.id}`} className='btn btn-sm btn-primary mr-2'>Edit</Link>
                                                    <button onClick={()=>teacherDelete(teacher.id)} className='btn btn-sm btn-danger mr-2'>Delete</button>
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

export default Teachers;
