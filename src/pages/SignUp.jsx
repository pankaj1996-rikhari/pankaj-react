import React, { useState } from "react";

const SignUp = () => {
  const userData = {
    name: "",
    email: "",
    password: "",
  };

  const [formData, setformData] = useState(userData);

  const handleInput = (e) => {
    setformData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submitSignup = (e) => {
    e.preventDefault();

    // 1️⃣ Validation
    if (!formData.name || !formData.email || !formData.password) {
      alert("❌ All fields are required!");
      return;
    }

    // 2️⃣ LocalStorage se existing users nikaalo
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // 3️⃣ Duplicate email check
    const isUserExist = existingUsers.find(
      (user) => user.email === formData.email
    );
    if (isUserExist) {
      alert("❌ Email already registered!");
      return;
    }

    // 4️⃣ New user add karo
    existingUsers.push(formData);
    localStorage.setItem("users", JSON.stringify(existingUsers));

    alert("✅ Signup Successful! You can login now.");
    console.log("Saved Users:", existingUsers);

    // 5️⃣ Form clear
    setformData(userData);
  };

  return (
    <>
      <section id="contact" className="contact section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Sign Up</h2>
        </div>
        <div className="container" data-aos="fade-up" data-aos-delay={100}>
          <div className="row gy-4">
            <div className="col-lg-5 m-auto">
              <form onSubmit={submitSignup} className="php-email-form">
                <div className="row gy-4">
                  <div className="col-md-12">
                    <label className="pb-2">Your Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      onChange={handleInput}
                      value={formData.name}
                    />
                  </div>

                  <div className="col-md-12">
                    <label className="pb-2">Your Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      onChange={handleInput}
                      value={formData.email}
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="pb-2">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      onChange={handleInput}
                      value={formData.password}
                    />
                  </div>
                  <div className="col-md-12 text-center">
                    <button type="submit">Sign Up</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
