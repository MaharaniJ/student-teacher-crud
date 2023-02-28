import { Link } from "react-router-dom";



function Sidebar() {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            {/* <!-- Sidebar - Brand --> */}
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </a>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider my-0" />

            
            <li className="nav-item active">
                <Link className="nav-link" to="/portal/students">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Student</span></Link>
            </li>
            <li className="nav-item active">
                <Link className="nav-link" to="/portal/teacher">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Teacher</span></Link>
            </li>
        </ul>
    )
}
export default Sidebar;