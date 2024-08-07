import Experiences from "./Experiences";
import FormInput from "./FormInput";

export default function PracticalExperience() {
  return (
    <Experiences title="practical experience">
      <FormInput id="start-date" type="date" label="worked from" />
      <FormInput id="end-date" type="date" label="worked until" />
      <FormInput id="company-name" label="company name" placeholder="Google" />
      <FormInput id="position-title" label="position title" placeholder="CEO" />
      <FormInput id="responsibilities" label="main responsibilities" />
    </Experiences>
  );
}
