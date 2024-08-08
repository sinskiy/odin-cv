export default function ResumeFormEntry({ label, type, ...inputAttributes }) {
  return (
    <div className="resume-form-entry">
      <label htmlFor={label}>{label}</label>
      <input type={type} id={label} name={label} {...inputAttributes} />
    </div>
  );
}
