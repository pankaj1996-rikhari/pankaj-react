import React, { useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = ({ toggleDropdown, dropdownOpen, onSearch }) => {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  const [loggedUser, setLoggedUser] = useState(null);

  // component load hote hi localStorage se user uthao
  useEffect(() => {
    const savedUser = localStorage.getItem("loggedInUser");
    if (savedUser) {
      setLoggedUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    alert("✅ Logged out successfully!");
    navigate("/login");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchInput);
  };

  return (
    <nav className="navbar navbar-light bg-white border-bottom px-4 shadow-sm">
      <h5 className="mb-0">Dashboard 01</h5>

      <form className="d-flex ms-auto me-3" onSubmit={handleSearch}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search by Name or Phone..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button className="btn btn-primary">Search</button>
      </form>

      <div className="d-flex align-items-center position-relative">
        <div
          className="d-flex align-items-center"
          onClick={toggleDropdown}
          style={{ cursor: "pointer" }}
        >
          <FaUserCircle className="fs-4 text-primary" />
          <span className="fw-bold ms-2">
            {/* agar loggedUser hai to uska name dikha warna Guest */}
            {loggedUser ? loggedUser.name : "Guest"}
          </span>
        </div>

        {dropdownOpen && (
          <div
            className="dropdown-menu show mt-2 shadow"
            style={{ position: "absolute", top: "100%", right: 0 }}
          >
            <button className="dropdown-item">Profile</button>
            <button className="dropdown-item">Settings</button>
            <div className="dropdown-divider"></div>
            <button
              className="dropdown-item text-danger"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
