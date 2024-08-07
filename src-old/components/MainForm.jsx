import GeneralInformation from "./GeneralInformation";
import EducationalExperience from "./EducationalExperience";

import "../styles/MainForm.css";

export default function MainForm() {
  return (
    <form action="" method="get" onSubmit={(e) => e.preventDefault()}>
      <div id="cv">
        <GeneralInformation />
        <EducationalExperience />
        <PracticalExperience />
      </div>
      <MainFormControls />
    </form>
  );
}
