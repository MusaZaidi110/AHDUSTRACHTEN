import React from "react";
import "./ContactPage.css"; // Optional: Import CSS for styling
import VillaIcon from "@mui/icons-material/Villa";
import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";
import MarkunreadIcon from "@mui/icons-material/Markunread";

const Contact = () => {
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
                      <br />
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
                <form action="" id="contact-form">
                  <h2>Send Message</h2>
                  <div className="input-box">
                    <input type="text" required />
                    <span>Full Name</span>
                  </div>

                  <div className="input-box">
                    <input type="email" required />
                    <span>Email</span>
                  </div>

                  <div className="input-box">
                    <input type="product" required />
                    <span>What Product You Want?</span>
                  </div>

                  <div className="input-box">
                    <input type="material" required />
                    <span>Material You Intrested to be Used?</span>
                  </div>

                  <div className="input-box">
                    <textarea required></textarea>
                    <span>Type your Message...</span>
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
