import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import "./ProcessTabs.css";

import IconImg1 from "../../assets/ProcessIcons/OrderBooking.png";
import IconImg2 from "../../assets/ProcessIcons/LeatherAquire.png";
import IconImg3 from "../../assets/ProcessIcons/Stiching.png";
import IconImg4 from "../../assets/ProcessIcons/QualityCheck.png";
import IconImg5 from "../../assets/ProcessIcons/Packaging.png";
import IconImg6 from "../../assets/ProcessIcons/Export.png";

import Image1 from "../../assets/Logo/logo white png.png";
import Image2 from "../../assets/Team/Making-Part-9.webp";
import Image3 from "../../assets/Team/Machine-3.webp";
import Image4 from "../../assets/Product/Product-1.webp";
import Image5 from "../../assets/Product/Product-4.webp";
import Image6 from "../../assets/Delivery/Delivery-Transport-1.webp";


const ProcessTabs = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="ProcessTabs">
            {/* Tabs */}
            <Tabs value={value} onChange={handleChange} aria-label="image tabs example">
                <Tab
                    icon={<img src={IconImg1} alt="Image 1" style={{ width: 40, height: 40 }} />}
                    label="Order Confirmation"
                />
                <Tab
                    icon={<img src={IconImg2} alt="Image 2" style={{ width: 40, height: 40 }} />}
                    label="Raw Material Collection"
                />
                <Tab
                    icon={<img src={IconImg3} alt="Image 3" style={{ width: 40, height: 40 }} />}
                    label="Manufacturing"
                />
                <Tab
                    icon={<img src={IconImg4} alt="Image 4" style={{ width: 40, height: 40 }} />}
                    label="Inspection"
                />
                <Tab
                    icon={<img src={IconImg5} alt="Image 5" style={{ width: 40, height: 40 }} />}
                    label="Packaging"
                />
                <Tab
                    icon={<img src={IconImg6} alt="Image 6" style={{ width: 40, height: 40 }} />}
                    label="Export"
                />
            </Tabs>

            {/* Content Under Tabs */}
            <div style={{ marginTop: "20px" }}>
                {value === 0 && (
                    <div className="TabContent">
                        <div className="TextBox">
                            <h2>1. Customer Gave Us Order</h2>
                            <p>It all begins with you! Once you place an order through our website or directly with us, our dedicated customer service team ensures that every detail of your order is accurately recorded. Whether it’s a standard product or a custom design tailored to your preferences, we work closely with you to capture your vision.

                                From size and style preferences to any specific customizations, we make sure your requirements are our top priority. Every order is a commitment, and we make it our mission to exceed your expectations.</p>
                        </div>
                        <div className="TabImage TextBox">
                            <img src={Image1} alt="Image 1" loading="lazy" />
                        </div>
                    </div>
                )}
                {value === 1 && (
                    <div className="TabContent">
                        <div className="TextBox">
                            <h2>2. Raw Material Like Leather is Collected</h2>
                            <p>The backbone of our quality is the materials we use. For our leather products, we source 100% authentic, premium-grade leather, including buffalo and goat skin, ensuring durability, comfort, and a luxurious finish.

                                Our team works tirelessly to procure raw materials from trusted suppliers who share our passion for quality. Every piece of leather is thoroughly inspected to meet our high standards for texture, strength, and appearance. We aim to work with ethically sourced materials, ensuring our processes align with sustainability and responsible practices.</p>
                        </div>
                        <div className="TabImage TextBox">
                            <img src={Image2} alt="Image 1" loading="lazy"/>
                        </div>
                    </div>
                )}
                {value === 2 && (
                    <div className="TabContent">
                        <div className="TextBox">
                            <h2>3. Manufacturing</h2>
                            <p>The manufacturing process is where the magic begins! Our skilled artisans, with years of experience and expertise, start crafting your product. Using traditional techniques combined with modern tools, each item is handmade to perfection.

                                Attention to detail is our hallmark. From precise stitching to intricate designs, our craftsmen treat each product as a piece of art. We take pride in the craftsmanship that goes into making each product unique and timeless.</p>
                        </div>
                        <div className="TabImage TextBox">
                            <img src={Image3} alt="Image 1" loading="lazy" />
                        </div>
                    </div>
                )}
                {value === 3 && (
                    <div className="TabContent">
                        <div className="TextBox">
                            <h2>4. Inspection</h2>
                            <p>Quality control is not just a step; it's a responsibility we uphold. Once the manufacturing process is complete, our inspection team meticulously examines every product. This includes checking for stitching quality, design accuracy, durability, and overall finish.

                                Our strict inspection process ensures that no product leaves our facility unless it meets our standards of excellence. We aim for perfection, so you receive nothing less than the best.</p>
                        </div>
                        <div className="TabImage TextBox">
                            <img src={Image4} alt="Image 1" loading="lazy" />
                        </div>
                    </div>
                )}
                {value === 4 && (
                    <div className="TabContent">
                        <div className="TextBox">
                            <h2>5. Packaging with Brand Name</h2>
                            <p>Packaging is where presentation meets protection. Each product is carefully packed to preserve its quality during transit. We use premium packaging materials, ensuring your product reaches you in pristine condition.

                                Our packaging proudly showcases our brand name, reflecting the value and pride we put into every order. From eco-friendly wraps to branded boxes, every detail is designed to enhance your unboxing experience.</p>
                        </div>
                        <div className="TabImage TextBox">
                            <img src={Image5} alt="Image 5" loading="lazy" />
                        </div>
                    </div>
                )}
                {value === 5 && (
                    <div className="TabContent">
                        <div className="TextBox">
                            <h2>6. Delivered</h2>
                            <p>The final step is delivering your order to your doorstep. Partnering with reliable logistics companies, we ensure timely and secure delivery. Whether you’re in Pakistan, Germany, the UK, or anywhere in the world, we guarantee a seamless and hassle-free shipping process.

                                Our journey doesn’t end here. We follow up with our customers to ensure satisfaction and welcome feedback to continually improve our services. Your happiness and trust mean everything to us.</p>
                        </div>
                        <div className="TabImage TextBox">
                            <img src={Image6} alt="Image 6" loading="lazy" />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProcessTabs;
