import "../styles/ResumeFormEntry.css";

export default function ResumeFormEntry({
  categoryTitle,
  label,
  value,
  index,
  handleInputChange,
  type,
  ...inputAttributes
}) {
  return (
    <div className="form-entry">
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        id={label}
        name={label}
        value={value}
        onChange={(e) => handleInputChange(e, categoryTitle, index, label)}
        {...inputAttributes}
      />
    </div>
  );
}
