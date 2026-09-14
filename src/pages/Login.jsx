import React, { useState,} from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  // Input change handle
  const handleInput = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Login Submit
  const submitLogin = (e) => {
    e.preventDefault();

    // LocalStorage se users nikaalo
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Check user
    const validUser = existingUsers.find(
      (u) => u.email === formData.email && u.password === formData.password
    );

    if (validUser) {
      alert("✅ Login Successful!");
      localStorage.setItem("loggedInUser", JSON.stringify(validUser)); // Save logged-in user
      navigate('/dashboard');

      // Form reset
      setFormData({ email: "", password: "" });
    } else {
      alert("❌ Invalid Email or Password");
    }
  };

  return (
    <section id="contact" className="contact section">
      {/* Section Title */}
      <div
        className="container section-title aos-init aos-animate"
        data-aos="fade-up"
      >
        <h2>Login</h2>
      </div>

      {/* Form */}
      <div
        className="container aos-init aos-animate"
        data-aos="fade-up"
        data-aos-delay={100}
      >
        <div className="row gy-4">
          <div className="col-lg-5 m-auto">
            <form onSubmit={submitLogin} className="php-email-form">
              <div className="row gy-4">
                <div className="col-md-12">
                  <label htmlFor="email-field" className="pb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={formData.email}
                    onChange={handleInput}
                  />
                </div>
                <div className="col-md-12">
                  <label htmlFor="password-field" className="pb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={formData.password}
                    onChange={handleInput}
                  />
                </div>
                <div className="col-md-12 text-center">
                  <button type="submit">Login</button>
                </div>
              </div>
            </form>
          </div>
          {/* End Contact Form */}
        </div>
      </div>
    </section>
  );
};

export default Login;
