import EducationalExperience from "./EducationalExperience";
import GeneralInformation from "./GeneralInformation";
import MainFormControls from "./MainFormControls";
import PracticalExperience from "./PracticalExperience";

export default function MainForm() {
  return (
    <form>
      <GeneralInformation />
      <EducationalExperience />
      <PracticalExperience />
      <MainFormControls />
    </form>
  );
}
