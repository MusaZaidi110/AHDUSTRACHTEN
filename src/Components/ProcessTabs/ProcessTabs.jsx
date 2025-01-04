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
                            <h2>1. Streamlined Order Confirmation Process</h2>
                            <p>Once your order is placed through our website or directly with our team, our dedicated customer service professionals ensure every detail is meticulously recorded. Whether you require a standard product or a customized solution tailored to your business needs, we collaborate closely with you to capture all specifications. From size and style to unique customizations, your requirements are our top priority. Every order represents a valuable partnership, and we are committed to delivering beyond expectations with precision and reliability.</p>
                        </div>
                        <div className="TabImage TextBox">
                            <img src={Image1} alt="Image 1" loading="lazy" />
                        </div>
                    </div>
                )}
                {value === 1 && (
                    <div className="TabContent">
                        <div className="TextBox">
                            <h2>2. Procurement of Premium Raw Materials</h2>
                            <p>The foundation of our excellence lies in the quality of materials we use. We source 100% authentic, premium-grade leather, including buffalo and goat skin, from trusted suppliers. This ensures exceptional durability, strength, and performance for all our leather products. Each batch of leather undergoes rigorous inspection to meet our strict standards for texture, strength, and appearance, guaranteeing consistency and reliability in every order.
                                <br />
                                Our commitment to ethical sourcing and sustainability means we work exclusively with suppliers who align with responsible practices. This allows us to provide businesses with products that not only reflect superior craftsmanship but also adhere to global standards for sustainable and ethical production.</p>
                        </div>
                        <div className="TabImage TextBox">
                            <img src={Image2} alt="Image 1" loading="lazy" />
                        </div>
                    </div>
                )}
                {value === 2 && (
                    <div className="TabContent">
                        <div className="TextBox">
                            <h2>3. Manufacturing Process</h2>
                            <p>Our manufacturing process is where expertise meets precision. Our highly skilled artisans, with decades of experience, craft each product with meticulous attention to detail. By combining traditional craftsmanship techniques with state-of-the-art tools, we ensure that every item meets the highest standards of quality and durability.
                                <br />
                                With an emphasis on consistency and scalability, we cater to bulk production without compromising on quality. From precise stitching to intricate designs, every step of the process is carefully monitored to align with your business needs and specifications. Our manufacturing system ensures that each product is not only unique but also reliable and timeless, making it the perfect solution for your business’s premium leather requirements.</p>
                        </div>
                        <div className="TabImage TextBox">
                            <img src={Image3} alt="Image 1" loading="lazy" />
                        </div>
                    </div>
                )}
                {value === 3 && (
                    <div className="TabContent">
                        <div className="TextBox">
                            <h2>4. Quality Inspection</h2>
                            <p>Quality control is the foundation of our commitment to delivering premium products. After manufacturing, our dedicated inspection team conducts a rigorous multi-point quality check on every product. This includes verifying stitching precision, design accuracy, material durability, and overall finish to ensure that each item aligns with your business’s expectations.
                                <br />
                                Our strict quality assurance protocols are designed to maintain consistency across large-scale orders while meeting industry standards and your unique specifications. We understand that your reputation depends on the quality of our products, so we make it our responsibility to deliver excellence every time. Trust our inspection process to uphold the reliability and value your business needs.</p>
                        </div>
                        <div className="TabImage TextBox">
                            <img src={Image4} alt="Image 1" loading="lazy" />
                        </div>
                    </div>
                )}
                {value === 4 && (
                    <div className="TabContent">
                        <div className="TextBox">
                            <h2>5. Packaging and Branding</h2>
                            <p>Packaging is not just about protection; it’s about reinforcing your business’s reputation. Each product is securely packed using durable, premium materials to ensure safe transit, especially for bulk shipments. We understand the importance of maintaining product quality during delivery, whether the order is local or international.
                                <br />
                                We also offer customized packaging options that incorporate your brand name or logo, giving you the opportunity to strengthen your brand identity. From eco-friendly wraps to branded cartons, we tailor our packaging to meet your specific requirements while maintaining a professional and polished presentation. Rest assured, our packaging is designed to uphold both the quality of the product and the image of your business.</p>
                        </div>
                        <div className="TabImage TextBox">
                            <img src={Image5} alt="Image 5" loading="lazy" />
                        </div>
                    </div>
                )}
                {value === 5 && (
                    <div className="TabContent">
                        <div className="TextBox">
                            <h2>6. Delivery and Logistics</h2>
                            <p>The final step in our process is ensuring the safe and timely delivery of your order. We partner with trusted logistics providers specializing in bulk shipments, ensuring secure and efficient delivery to your specified location, whether in Pakistan, Germany, the UK, or anywhere else in the world.
<br />
We offer tailored shipping options, including sea and air freight, to meet your cost and timeline requirements. Our logistics team ensures transparency with real-time tracking and clear communication at every stage of the delivery process.
<br />
Our commitment doesn’t end with delivery. We maintain open communication to ensure your complete satisfaction and gather feedback to enhance our services. As your business partner, we strive to provide seamless logistics that support your operations and strengthen our partnership.</p>
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
