import { useState } from "react";
import { CvStateContext, DEFAULT_CV_STATE } from "../CvStateContext";

import EducationalExperience from "./EducationalExperience";
import GeneralInformation from "./GeneralInformation";
import MainFormControls from "./MainFormControls";
import PracticalExperience from "./PracticalExperience";
import "../styles/MainForm.css";

export default function MainForm() {
  const [CvState, setCvState] = useState(DEFAULT_CV_STATE);
  return (
    <form
      action=""
      method="get"
      onSubmit={(e) => {
        e.preventDefault();
        setCvState(CvState === "editing" ? "viewing" : "editing");
      }}
      className={CvState}
    >
      <CvStateContext.Provider value={CvState}>
        <GeneralInformation />
        <EducationalExperience />
        <PracticalExperience />
        <MainFormControls />
      </CvStateContext.Provider>
    </form>
  );
}
