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
  const id = `${categoryTitle}-${label}-${index}`;
  return (
    <div className="form-entry">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={label}
        value={value}
        onChange={(e) => handleInputChange(e, categoryTitle, index, label)}
        {...inputAttributes}
      />
    </div>
  );
}
