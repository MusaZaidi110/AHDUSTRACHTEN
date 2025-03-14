import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import { ToastContainer, toast } from "react-toastify";

import "./ContactPage.css"; // Optional: Import CSS for styling
import VillaIcon from "@mui/icons-material/Villa";
import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import FactoryIcon from "@mui/icons-material/Factory";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PublicIcon from "@mui/icons-material/Public";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Contact = () => {
  const { t } = useTranslation();

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
      <div className="retailer">
        <h2>{t("retailerTitle")}</h2>

        <div className="retailer-contact">
          <div className="contact-info-item">
            <div className="contact-info-icon">
              <i>
                <LocationOnIcon />
              </i>
            </div>
            <div className="contact-info-content">
              <h4>{t("retailerLocation")}</h4>
              <p>
                Johannes Krist Lederwaren
                <br /> Frosch 20
                <br /> 74653 Deutschland
              </p>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="contact-info-icon">
              <i>
                <PublicIcon />
              </i>
            </div>
            <div className="contact-info-content">
              <h4>{t("retailerWebsite")}</h4>
              <Link
                to={"https://kristundkoenig.de/"}
                target="blank"
                title="Click To View Website"
              >
                Krist und König
              </Link>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="contact-info-icon">
              <i>
                <ConnectWithoutContactIcon />
              </i>
            </div>
            <div className="contact-info-content">
              <h4>{t("retailerContact")}</h4>
              <Link
                to={
                  "https://kristundkoenig.de/index.php?route=information/information&information_id=14"
                }
                target="blank"
                title="Contact Retailer"
              >
                Kontakt Krist und König
              </Link>
            </div>
          </div>
        </div>
      </div>

      <main className="cd__main">
        <section className="manifacture">
          <div className="section-header">
            <div className="container">
              <h2>{t("contactTitle")}</h2>
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
                    <h4>{t("contactInfoHeader1")}</h4>
                    <p>
                      Office-01, Acantilado Commercial 49,
                      <br /> Phase 7 Bahria Town
                      <br /> Islamabad, Pakistan
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
                    <h4>{t("contatcInfoHeader2")}</h4>
                    <p>
                      Leather Village, <br />
                      Head Marala Rd ,<br />
                      Malkay Kalan, Sialkot, Punjab
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
                    <h4>{t("contactEmailHeader")}</h4>
                    <p>usman@ahdustrachtenexport.com</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i>
                      <PhoneCallbackIcon />
                    </i>
                  </div>
                  <div className="contact-info-content">
                    <h4>{t("contactNumberHeader")}</h4>
                    <p>+92 339 4022 534</p>
                  </div>
                </div>
              </div>

              <div className="contact-form">
                <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
                  <h2>{t("contactFormHeader")}</h2>

                  <div className="input-box">
                    <input
                      type="text"
                      {...register("fullName", { required: true })}
                      required
                    />
                    <span>{t("contactFullName")}</span>
                  </div>

                  <div className="input-box">
                    <input
                      type="email"
                      {...register("email", { required: true })}
                      required
                    />
                    <span>{t("contactEmailHeader")}</span>
                  </div>

                  <div className="input-box">
                    <input
                      type="text"
                      {...register("product", { required: true })}
                      required
                    />
                    <span>{t("contactFormProductWant")}</span>
                  </div>

                  <div className="input-box">
                    <input
                      type="text"
                      {...register("material", { required: true })}
                      required
                    />
                    <span>{t("contactFormMaterial")}</span>
                  </div>

                  <div className="input-box">
                    <textarea
                      {...register("message", { required: true })}
                      required
                    ></textarea>
                    <span>{t("contactFormMessage")}</span>
                  </div>

                  <div className="input-box">
                    <input type="submit" value={t("contactFormButton")} />
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
