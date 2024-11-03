// ProcessFlow.jsx
import React from "react";
import "./Process.css";
import LeatherIcon from "../../assets/Product/Product-Leather-1.webp"; // Assuming you have these icons or images.
import ChemicalIcon from "../../assets/Making/Making-Part-5.webp";
import EmbroideryIcon from "../../assets/Machine/Machine-1.webp";
import StitchingIcon from "../../assets/Machine/Machine-3.webp";
import QualityCheckIcon from "../../assets/Product/Product-Leather-2.webp";
import ExportIcon from "../../assets/Delivery/Delivery-Transport-2.webp";
import plane from "../../assets/aeroplane.avif";

const steps = [
  {
    id: 1,
    title: "Leathers Acquire",
    icon: LeatherIcon,
  },
  {
    id: 2,
    title: "Chemical Cleaning",
    icon: ChemicalIcon,
  },
  {
    id: 3,
    title: "Embroidery",
    icon: EmbroideryIcon,
  },
  {
    id: 4,
    title: "Stitching",
    icon: StitchingIcon,
  },
  {
    id: 5,
    title: "Quality Check",
    icon: QualityCheckIcon,
  },
  {
    id: 6,
    title: "Export",
    icon: ExportIcon,
  },
  {
    id: 7,
    title: "Towards Customer",
    icon: plane,
  },
];

const ProcessFlow = () => {
  return (
    <section className="process">
      <div className="title">Our Process</div>
      <div className="mainTitle">Luxury Leather, Delivered</div>
      <div className="borderLine">
        <div className="upline"></div>
        <div className="downline"></div>
      </div>

      <div className="process-flow">
        {steps.map((step, index) => (
          <div key={step.id} className="process-step">
            <img src={step.icon} alt={step.title} className="process-icon" />
            <h3>{`${step.id}. ${step.title}`}</h3>
            {index < steps.length - 1 && <div className="dashed-line"></div>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessFlow;
