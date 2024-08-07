import GeneralInformation from "./GeneralInformation";

export default function ResumeForm() {
  return (
    <section
      className="resume-form"
      style={{ backgroundColor: "aquamarine", flexGrow: 1 }}
    >
      <GeneralInformation />
    </section>
  );
}
