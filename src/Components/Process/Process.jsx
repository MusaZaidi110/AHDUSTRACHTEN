// ProcessFlow.jsx
import React from "react";
import "./Process.css";

import LeatherAquire from "../../assets/ProcessIcons/LeatherAquire.png";
import ChemicalCleaning from "../../assets/ProcessIcons/ChemicalCleaning.png";
import Emboidery from "../../assets/ProcessIcons/Emboidery.png";
import Stiching from "../../assets/ProcessIcons/Stiching.png";
import QualityCheck from "../../assets/ProcessIcons/QualityCheck.png";
import Export from "../../assets/ProcessIcons/Export.png";

const ProcessFlow = () => {
  return (
    <div className="process">
      <div className="title processTitle">Our Process</div>
      <div className="mainTitle processMaintitle">
        Luxury Leather, Delivered
      </div>
      <div className="blackContainer">
        <div className="process-flow">
          <div className="process-step">
            <img src={LeatherAquire} alt="LeatherAquire" />
            <h1>1. Leather Aquire</h1>
          </div>

          <div className="process-step">
            <img src={ChemicalCleaning} alt="ChemicalCleaning" />
            <h1>2. Chemical Cleaning</h1>
          </div>

          <div className="process-step">
            <img src={Emboidery} alt="Emboidery" />
            <h1>3. Embroidery</h1>
          </div>

          <div className="process-step">
            <img src={Stiching} alt="Stiching" />
            <h1>4. Stiching</h1>
          </div>

          <div className="process-step">
            <img src={QualityCheck} alt="QualityCheck" />
            <h1>5. Quality Check</h1>
          </div>

          <div className="process-step">
            <img src={Export} alt="Export" />
            <h1>6. Export </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessFlow;
