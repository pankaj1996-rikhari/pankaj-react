import React from 'react';
import {
  FaTachometerAlt,
  FaMobileAlt,
  FaCogs,
  FaFileAlt
} from "react-icons/fa";
import { NavLink, useNavigate } from 'react-router-dom';



const Sidebar = () => {
  const navigate = useNavigate();
  const handleLogout = () =>{
    localStorage.removeItem("loggedInUser");
    alert("✅ Logged out successfully!");
    navigate("/login"); // redirect to login page
  }
  return (
    <>
       <div
        className="bg-light vh-100 p-3 shadow"
        style={{ width: "240px", position: "fixed" }}
      >
        <h4 className="sitename">
          <strong>Pankaj</strong>{" "}
          <span style={{ color: "var(--accent-color)", fontWeight: "bold" }}>
            Rikhari
          </span>
        </h4>
        <ul className="nav flex-column mt-4">
          <li className="nav-item mb-2">
            <NavLink className="nav-link text-black d-flex align-items-center" to="/dashboard">
              <FaTachometerAlt className="me-2" /> Dashboard
            </NavLink>
          </li>
          <li className="nav-item mb-2">
            <NavLink className="nav-link text-black d-flex align-items-center" to="/AddUser">
              <FaMobileAlt className="me-2" /> Add User
            </NavLink>
          </li>
          <li className="nav-item mb-2">
            <button className="nav-link text-black d-flex align-items-center" onClick={handleLogout}>
              <FaFileAlt className="me-2" /> Logout
            </button>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Sidebar
