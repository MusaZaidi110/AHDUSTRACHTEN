import React, { useState } from "react";
import "./ContactPage.css"; // Optional: Import CSS for styling
import VillaIcon from "@mui/icons-material/Villa";
import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";
import MarkunreadIcon from "@mui/icons-material/Markunread";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    product: "",
    material: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    product: "",
    material: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Simplified form validation (just check for non-empty fields)
  const validateForm = () => {
    let formErrors = {};

    // Check for empty fields
    for (let field in formData) {
      if (!formData[field]) {
        formErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required.`;
      }
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // If form is valid, log the form data (you can also send it to a backend)
      console.log("Form Data:", formData);

      // Optionally, reset the form after submission
      setFormData({
        fullName: "",
        email: "",
        product: "",
        material: "",
        message: "",
      });
      alert("Your message has been sent successfully!");
    }
  };

  return (
    <div className="contactPage">
      <main className="cd__main">
        <section>
          <div className="section-header">
            <div className="container">
              <h2>Contact Us</h2>
              <p>
                We warmly welcome you to connect with us! Your feedback is
                valued, and our team is here to assist with any questions,
                orders, or custom requests, from material choices to unique
                designs. Don't hesitate to reach out — we're just a message
                away, ready to make your vision a reality!
              </p>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="contact-info">
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i>
                      <VillaIcon />
                    </i>
                  </div>
                  <div className="contact-info-content">
                    <h4>Address</h4>
                    <p>
                      Islamabad/Rawalpindi,
                      <br /> Pakistan
                    </p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i>
                      <MarkunreadIcon />
                    </i>
                  </div>
                  <div className="contact-info-content">
                    <h4>Email</h4>
                    <p>ntamerrwael@mfano.ga</p>
                  </div>
                </div>
              </div>

              <div className="contact-form">
                <form id="contact-form" onSubmit={handleSubmit}>
                  <h2>Send Message</h2>

                  <div className="input-box">
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                    <span>Full Name</span>
                    {errors.fullName && <p className="error">{errors.fullName}</p>}
                  </div>

                  <div className="input-box">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <span>Email</span>
                    {errors.email && <p className="error">{errors.email}</p>}
                  </div>

                  <div className="input-box">
                    <input
                      type="text"
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      required
                    />
                    <span>What Product You Want?</span>
                    {errors.product && <p className="error">{errors.product}</p>}
                  </div>

                  <div className="input-box">
                    <input
                      type="text"
                      name="material"
                      value={formData.material}
                      onChange={handleChange}
                      required
                    />
                    <span>Material You Intrested to be Used?</span>
                    {errors.material && <p className="error">{errors.material}</p>}
                  </div>

                  <div className="input-box">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                    <span>Type your Message...</span>
                    {errors.message && <p className="error">{errors.message}</p>}
                  </div>

                  <div className="input-box">
                    <input type="submit" value="Send" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;
