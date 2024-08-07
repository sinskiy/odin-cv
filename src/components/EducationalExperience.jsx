import FormSection from "./FormSection";
import FormInput from "./FormInput";

export default function EducationalExperience() {
  return (
    <FormSection title="educational experience">
      <FormInput
        id="school-name"
        label="name of school"
        placeholder="Hogwarts School of Witchcraft and Wizardry"
      />
      <FormInput id="study-title" label="title of study" placeholder="Ph.D" />
      <FormInput
        id="study-date"
        label="date of study"
        type="date"
        placeholder="Hogwarts School of Witchcraft and Wizardry"
      />
    </FormSection>
  );
}
