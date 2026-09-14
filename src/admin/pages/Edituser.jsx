import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const API = "https://68a9f782909a5835049b5641.mockapi.io/users/posts";

const Edituser = () => {

  const {id} = useParams();
  const navigate = useNavigate();


  const [userData, setUserData] = useState({
      name: "",
      email: "",
      phone: "",
      website: "",
  })


   // 1️⃣ Load existing user data on mount
  useEffect(() => {
    axios
      .get(`${API}/${id}`)
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => console.error(err));
  }, [id]);

  const handleChange = (e) =>{
     const {name, value} = e.target;
     setUserData((prev) => ({
      ...prev, [name] : value,
     }))
  }

  

  const handleSubmit = async (e) =>{
      e.preventDefault();
      try{
       await axios.put(`${API}/${id}`, userData);
       alert("User updated successfully");
      navigate("/dashboard"); // go back or to user list

      }catch(error){
        console.error(error);
      alert("Error updating user");
      }
  }
  

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
            <div className="card-header fw-bold">Edit User</div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
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
                      onChange={handleChange}
                      placeholder="Enter name"
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={userData.email}
                      onChange={handleChange}
                      placeholder="Enter email"
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
                      name="phone"
                      value={userData.phone}
                      onChange={handleChange}
                      placeholder="Enter phone number"
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label htmlFor="website" className="form-label">
                      Website
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="website"
                      value={userData.website}
                      onChange={handleChange}
                      placeholder="Enter website URL"
                    />
                  </div>
                </div>

                <div className="d-flex justify-content-center mt-3">
                  <button type="submit" className="btn btn-primary">
                    Update
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

export default Edituser;
