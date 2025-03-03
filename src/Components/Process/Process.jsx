// ProcessFlow.jsx
import React from "react";
import "./Process.css";

import LeatherAquire from "../../assets/ProcessIcons/LeatherAquire.png";
import ChemicalCleaning from "../../assets/ProcessIcons/ChemicalCleaning.png";
import Emboidery from "../../assets/ProcessIcons/Emboidery.png";
import Stiching from "../../assets/ProcessIcons/Stiching.png";
import QualityCheck from "../../assets/ProcessIcons/QualityCheck.png";
import Export from "../../assets/ProcessIcons/Export.png";
import { useTranslation } from "react-i18next";

const ProcessFlow = () => {
  const { t } = useTranslation();

  return (
    <div className="process">
      <div className="title processTitle">{t("processTitle")}</div>
      <div className="mainTitle processMaintitle">{t("processMainTitle")}</div>
      <div className="blackContainer">
        <div className="process-flow">
          <div className="process-step">
            <img src={LeatherAquire} alt="LeatherAquire" />
            <h1>{t("processStepFirst")}</h1>
          </div>

          <div className="process-step">
            <img src={ChemicalCleaning} alt="ChemicalCleaning" />
            <h1>{t("processStepSecond")}</h1>
          </div>

          <div className="process-step">
            <img src={Emboidery} alt="Emboidery" />
            <h1>{t("processStepThird")}</h1>
          </div>

          <div className="process-step">
            <img src={Stiching} alt="Stiching" />
            <h1>{t("processStepFourth")}</h1>
          </div>

          <div className="process-step">
            <img src={QualityCheck} alt="QualityCheck" />
            <h1>{t("processStepFivth")}</h1>
          </div>

          <div className="process-step">
            <img src={Export} alt="Export" />
            <h1>{t("processStepSixth")}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessFlow;
