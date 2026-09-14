import axios from "axios";
import React, { useState } from "react";
import { BsGeoAlt, BsTelephone } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
const ContactForm = () => {

  const [formData, setformData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>{
    const {name, value} = e.target;
     setformData((prev) =>({
      ...prev, [name]: value,
    }))
  };

  const handleSubmit = async (e) =>{
    e.preventDefault();

    
    // 👇 Simple validation
  if (!formData.name || !formData.email || !formData.subject || !formData.message) {
    setStatus("❌ All fields are required!");
    return;
  }

  if (!/\S+@\S+\.\S+/.test(formData.email)) {
    setStatus("❌ Invalid email format!");
    return;
  }


    setLoading(true)
    setStatus("");



     try{
       const res = await axios.post('https://jsonplaceholder.typicode.com/users', formData);
       
       setformData({ name: "", email: "", subject: "", message: "" }); 
       setStatus("✅ Data Submitted Successfully!")
       console.log(res);

    } catch(error){
      setStatus("Something went wrong ❌")
    } finally{
      setLoading(false);
    }
    
  }

  return (
    <>
      <section id="contact" className="contact section">
        {/* Section Title */}
        <div
          className="container section-title aos-init aos-animate"
          data-aos="fade-up"
        >
          <h2>Contact</h2>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>
        {/* End Section Title */}
        <div
          className="container aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay={100}
        >
          <div className="row gy-4">
            <div className="col-lg-5">
              <div className="info-wrap">
                <div
                  className="info-item d-flex aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  <BsGeoAlt className="i flex-shrink-0" />
                  <div>
                    <h3>Address</h3>
                    <p>A108 Adam Street, New York, NY 535022</p>
                  </div>
                </div>
                {/* End Info Item */}
                <div
                  className="info-item d-flex aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-delay={300}
                >
                  <BsTelephone className="i flex-shrink-0" />
                  <div>
                    <h3>Call Us</h3>
                    <p>+1 5589 55488 55</p>
                  </div>
                </div>
                {/* End Info Item */}
                <div
                  className="info-item d-flex aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-delay={400}
                >
                  <TfiEmail className="i flex-shrink-0" />
                  <div>
                    <h3>Email Us</h3>
                    <p>info@example.com</p>
                  </div>
                </div>
                {/* End Info Item */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus"
                  frameBorder={0}
                  style={{ border: 0, width: "100%", height: 270 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
            <div className="col-lg-7">
              <form onSubmit={handleSubmit} className="php-email-form">
                <div className="row gy-4">
                  <div className="col-md-6">
                    <label htmlFor="name-field" className="pb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-control"
                      required=""
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email-field" className="pb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required=""
                    />
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="subject-field" className="pb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required=""
                    />
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="message-field" className="pb-2">
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={10}
                      required=""
                    />
                  </div>
                  <div className="col-md-12 text-center">
                    <button type="submit" disabled={loading}>{loading ? "Sending..." : "Send Message"}</button>
                  </div>
                  
                  <p className="text-center text-danger">{status}</p>
                </div>
              </form>
            </div>
            {/* End Contact Form */}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
