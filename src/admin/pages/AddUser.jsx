import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API = "https://68a9f782909a5835049b5641.mockapi.io/users/posts";

const AddUser = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
  });

  const navigate = useNavigate();

  // 🔹 Input handle
  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 🔹 Form submit
  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(API, userData);
      console.log("User added:", response.data);
      alert("✅ User added successfully!");
      setUserData({ name: "", email: "", phone: "", website: "" });
      navigate("/dashboard"); // redirect to dashboard
    } catch (error) {
      console.error("Error:", error);
      alert("❌ Failed to add user!");
    }
  };

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-grow-1" style={{ marginLeft: "240px" }}>
        {/* Top Navbar */}
        <Navbar />

        {/* Form Section */}
        <div className="container-fluid p-4">
          <div className="card shadow-sm border-1">
            <div className="card-header fw-bold">Add New User</div>
            <div className="card-body">
              <form onSubmit={submitForm}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={userData.name}
                      onChange={handleInput}
                      id="name"
                      placeholder="Enter name"
                      required
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={userData.email}
                      onChange={handleInput}
                      placeholder="Enter email"
                      required
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="phone" className="form-label">
                      Phone
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      value={userData.phone}
                      name="phone"
                      onChange={handleInput}
                      placeholder="Enter phone number"
                      required
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label htmlFor="website" className="form-label">
                      Website
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="website"
                      name="website"
                      value={userData.website}
                      onChange={handleInput}
                      placeholder="Enter website URL"
                      required
                    />
                  </div>
                </div>

                <div className="d-flex justify-content-center mt-3">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                  <button
                    type="reset"
                    className="btn btn-secondary ms-2"
                    onClick={() =>
                      setUserData({ name: "", email: "", phone: "", website: "" })
                    }
                  >
                    Reset
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
