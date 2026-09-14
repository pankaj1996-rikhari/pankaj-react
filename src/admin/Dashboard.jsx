import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [userData, setUserData] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;

  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const API = "https://68a9f782909a5835049b5641.mockapi.io/users/posts";

  // Get All Users
  const getUser = async () => {
    try {
      const res = await axios.get(API);
      setUserData(res.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  // Delete User
  const deleteUser = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await axios.delete(`${API}/${id}`);
        setUserData(userData.filter((u) => u.id !== id));
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  // Filtered users based on search
  const filteredUsers = userData.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.phone.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="d-flex">
      <Sidebar />

      <div className="flex-grow-1" style={{ marginLeft: "240px" }}>
        <Navbar
          toggleDropdown={toggleDropdown}
          dropdownOpen={dropdownOpen}
          onSearch={setSearchTerm}
        />

        {/* Stats Cards */}
        <div className="container-fluid p-4">
          <div className="row g-3">
            <div className="col-md-3">
              <div className="card p-3 shadow-sm border-0 bg-danger">
                <h6 className="text-white">Total Users</h6>
                <h3 className="text-white">{userData.length}</h3>
                <small className="text-black">↑ Updated Live</small>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card p-3 shadow-sm border-0 bg-warning">
                <h6 className="text-white">Total Profit</h6>
                <h3 className="text-white">67,987</h3>
                <small className="text-danger">↓ 0.75% Last 6 days</small>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card p-3 shadow-sm border-0 bg-success">
                <h6 className="text-white">Total Expenses</h6>
                <h3 className="text-white">$76,965</h3>
                <small className="text-black">↑ 0.9% Last 9 days</small>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card p-3 shadow-sm border-0 bg-info">
                <h6 className="text-white">Total Cost</h6>
                <h3 className="text-white">$59,765</h3>
                <small className="text-success">↑ 0.6% Last year</small>
              </div>
            </div>
          </div>

          {/* User Table */}
          <div className="card mt-4 shadow-sm border-0">
            <div className="card-header fw-bold bs-dark-bg-subtle text-black">
              User List
            </div>
            <div className="card-body p-0">
              <table className="table table-striped align-middle table-bordered mb-0 text-center">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {currentUsers.length > 0 ? (
                    currentUsers.map((user) => (
                      <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>
                          <button
                            className="btn btn-primary me-2"
                            onClick={() => navigate(`/edit/${user.id}`)}
                          >
                            Edit
                          </button>
                          <button
                            className="btn btn-danger"
                            onClick={() => deleteUser(user.id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5">No users found.</td>
                    </tr>
                  )}
                </tbody>
              </table>

              {/* Pagination */}
              <nav className="mt-3">
                <ul className="pagination justify-content-center">
                  {Array.from({ length: totalPages }, (_, i) => (
                    <li
                      key={i + 1}
                      className={`page-item ${
                        currentPage === i + 1 ? "active" : ""
                      }`}
                    >
                      <button
                        className="page-link"
                        onClick={() => paginate(i + 1)}
                      >
                        {i + 1}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
