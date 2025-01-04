import React, { useState } from "react";
import "./OurProcess.css";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import ApplePay from "../../assets/PaymentMethod/ApplePay.png";
import GPay from "../../assets/PaymentMethod/GPay.png";
import MasterCard from "../../assets/PaymentMethod/MasterCard.png";
import PayPal from "../../assets/PaymentMethod/PayPal.png";
import Stripe from "../../assets/PaymentMethod/Stripe.png";

const TabsWithContent = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const tabs = [
    {
      id: "tab1",
      label: "Sample",
      content: (
        <div>
          <h2>Experience the Quality Before Commitment</h2>
          <p>
            We understand that making the right decision requires confidence in the product's quality. That’s why we offer product samples to showcase our craftsmanship and the materials we use. Each sample is meticulously prepared to reflect the quality and standards we maintain across all our products.
            <br /> <strong> Why Samples? </strong> <br />
            Ensure the product aligns with your requirements before placing a bulk order.
            <br /> <strong> How it Works? </strong> <br />
            Simply contact us with your requirements, and we will deliver a sample tailored to your needs.
          </p>
        </div>
      ),
    },
    {
      id: "tab2",
      label: "Payment of Samples",
      content: (
        <div>
          <h2>Affordable and Transparent</h2>
          <p>
            We charge a minimal fee of 140EUR per sample to cover production and shipping costs. This amount ensures that we can maintain our quality while providing you with a hands-on experience.

            <br /> <strong> Payment Method: </strong> <br />
            We accept multiple payment options, including wire transfers, PayPal, and other secure payment methods.
            What’s Included in the Fee?
            Your sample charges cover the product, packaging, and standard shipping.
          </p>

          <div className="PaymentImages">
            <img src={ApplePay} alt="Apple Pay Icon" width={100} height={70} />
            <img src={GPay} alt="Google Pay Icon" width={100} height={70} />
            <img src={MasterCard} alt="MasterCard Pay Icon" width={100} height={60} />
            <img src={PayPal} alt="PayPal Pay Icon" width={100} height={60} />
            <img src={Stripe} alt="Stripe Pay Icon" width={100} height={60} />
          </div>
        </div>
      ),
    },
    {
      id: "tab3",
      label: "Sample Times",
      content: (
        <div>
          <h2>Quick Turnaround for Prompt Decisions</h2>
          <p>
            We know time is of the essence in business. That’s why we commit to delivering samples within one week from the date of order confirmation.

            <br /> <strong> Fast Processing: </strong> <br />
            Orders are prepared and dispatched promptly, ensuring you can review the sample without unnecessary delays.
            <br /> <strong> Customized Samples: </strong> <br />
            Customizations may slightly increase the delivery time, but we will communicate this clearly.
            <div className="calender">
              <CalendarMonthIcon />
              <strong>1 Week</strong>
            </div>
          </p>
        </div>
      ),
    },
    {
      id: "tab4",
      label: "Time with Quantity",
      content: (
        <div>
          <h2>Flexible Delivery Timelines Based on Order Size</h2>
          <ul>
            For bulk orders, we offer customized timelines to meet your specific business needs:
            <strong> <li>Upto 2000 Pieces Delivered in 1 month</li> </strong>
            <strong> <li>Upto 5000 Pieces Delivered in 3 months</li> </strong>
            <strong> <li>Upto 10,000 Pieces Delivered in 6 months</li> </strong>

            <p>Our dedicated team ensures timely production and shipping without compromising on quality. </p>
            <strong> <li>How We Ensure Timeliness:</li> </strong>
           <p> We use advanced production methods and maintain close communication with you throughout the process. </p>
          </ul>
        </div>
      ),
    },
    {
      id: "tab5",
      label: "Shipping by Air",
      content: (
        <div>
          <h2>Fast and Reliable Air Freight</h2>
          <ul>
            For urgent orders, we recommend shipping by air, offering the quickest delivery times.
            <p>
             <strong> Cost Breakdown: </strong>
              <li>3 EUR per Kg for orders up to 2000 pieces</li>
              <li>2.5 EUR per Kg for orders up to 5000 pieces</li>
            </p>
            <p>
              <strong>Advantages of Air Shipping: </strong> 
              <li>Faster delivery times</li>
              <li>Ideal for lightweight and urgent orders</li>
            </p>
          </ul>
        </div>
      ),
    },
    {
      id: "tab6",
      label: "Shipping by Sea",
      content: (
        <div>
          <h2>Cost-Effective and Efficient Sea Freight</h2>
          <ul>
          For larger orders, sea shipping offers the most economical option.
            <p>
             <strong> Cost Breakdown: </strong>
              <li>2 EUR per Kg for orders up to 2000 pieces</li>
              <li>1.5 EUR per Kg for orders up to 5000 pieces</li>
            </p>
            <p>
              <strong>Advantages of Air Shipping: </strong> 
              <li>Lower shipping costs</li>
              <li>Suitable for heavy or high-volume orders</li>
            </p>
          </ul>
        </div>
      ),
    },
  ];

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  return (
    <section className="OurProcessContainer">
      <div className="title">Process</div>
        <div className="mainTitle">Our Process Cycle</div>
        <div className="borderLine">
          <div className="upline"></div>
          <div className="downline"></div>
        </div>
      <div className="OurProcessWrapper">        
        <div className="OurProcessTabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              data-text={`#${tab.id}`}
              className={`pills ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="tabsText">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              id={tab.id}
              className="tab-content"
              style={{ display: activeTab === tab.id ? "block" : "none" }}
            >
              {tab.content}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TabsWithContent;
