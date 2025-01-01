import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import { ToastContainer, toast } from 'react-toastify';

import "./ContactPage.css"; // Optional: Import CSS for styling
import VillaIcon from "@mui/icons-material/Villa";
import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import FactoryIcon from "@mui/icons-material/Factory";

const Contact = () => {
  const accessKey = "YOUR_ACCESS_KEY_HERE"; // Replace with your Web3Forms Access Key

  const { register, reset, handleSubmit } = useForm();

  const { submit: onSubmit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: "Ahdus Trachten",
      subject: "New Contact Message",
    },
    onSuccess: (msg, data) => {
      toast.success("Successfully Submitted!");
      reset(); // Reset the form after successful submission
    },
    onError: (msg, data) => {
      toast.error("Some Error Occured!");
    },
  });

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
                      <FactoryIcon />
                    </i>
                  </div>
                  <div className="contact-info-content">
                    <h4>Manufacturing Address</h4>
                    <p>Sialkot, Pakistan</p>
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
                    <p>Ahdustrachten@gmail.com</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i>
                      <PhoneCallbackIcon />
                    </i>
                  </div>
                  <div className="contact-info-content">
                    <h4>Number</h4>
                    <p>+123-4567-89-10</p>
                  </div>
                </div>
              </div>

              <div className="contact-form">
                <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
                  <h2>Send Message</h2>

                  <div className="input-box">
                    <input
                      type="text"
                      {...register("fullName", { required: true })}
                      required
                    />
                    <span>Full Name</span>
                  </div>

                  <div className="input-box">
                    <input
                      type="email"
                      {...register("email", { required: true })}
                      required
                    />
                    <span>Email</span>
                  </div>

                  <div className="input-box">
                    <input
                      type="text"
                      {...register("product", { required: true })}
                      required
                    />
                    <span>What Product You Want?</span>
                  </div>

                  <div className="input-box">
                    <input
                      type="text"
                      {...register("material", { required: true })}
                      required
                    />
                    <span>Material You Are Interested In?</span>
                  </div>

                  <div className="input-box">
                    <textarea
                      {...register("message", { required: true })}
                      required
                    ></textarea>
                    <span>Type your Message...</span>
                  </div>

                  <div className="input-box">
                    <input type="submit" value="Submit" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <ToastContainer />
    </div>
  );
};

export default Contact;
