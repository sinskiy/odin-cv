import FormSection from "./FormSection";
import FormInput from "./FormInput";

export default function GeneralInformation() {
  return (
    <FormSection
      title="general information"
      legendText="required inputs have * at the end"
    >
      <FormInput id="name" required={true} placeholder="John Doe" />
      <FormInput
        id="email"
        type="email"
        placeholder="johndoe@sinskiy.website"
      />
      <FormInput id="phone" type="tel" placeholder="(123) 456-7890" />
    </FormSection>
  );
}
