import FormSection from "./FormSection";
import FormInput from "./FormInput";

export default function PracticalExperience() {
  return (
    <FormSection title="practical experience">
      <FormInput id="company-name" label="company name" placeholder="Google" />
      <FormInput id="position-title" label="position title" placeholder="CEO" />
      <FormInput id="responsibilities" label="main responsibilities" />
      <FormInput id="start-date" type="date" label="worked from" />
      <FormInput id="end-date" type="date" label="worked until" />
    </FormSection>
  );
}
