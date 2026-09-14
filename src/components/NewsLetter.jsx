import React, { useState } from "react";

const NewsLetter = () => {

 const [email, setEmail] = useState('');

 const [status, setStatus] = useState('');
 
 const formSubmit = (e) =>{
    e.preventDefault();
    if(!email){
        alert("❌ Please enter your email");
        return;
    }
    setEmail("");
    console.log("Subscribed:", email);
    setStatus("✅ Thanku for Subscription successful!");
 }
 
  return (
    <>
      <div className="footer-newsletter">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-6">
              <h4>Join Our Newsletter</h4>
              <p>
                Subscribe to our newsletter and receive the latest news about
                our products and services!
              </p>
              <p>{status}</p>
              <form onSubmit={formSubmit}
                className="php-email-form"
              >
                <div className="newsletter-form">
                  <input type="email" name="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Enter Email Address" required/>
                  <input
                    type="submit"
                    name="name"
                    value="Subscribe"
                  />
                </div>
                <div className="error-message" />
                <div className="sent-message">
                  Your subscription request has been sent. Thank you!
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default NewsLetter;
