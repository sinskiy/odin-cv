export default function FormInput({
  id,
  label = id,
  required = false,
  type = "text",
  placeholder,
  ...inputAttributes
}) {
  return (
    <div className="form-input">
      <label htmlFor={id}>
        {label}
        {required && (
          <span>
            <strong aria-label="required">*</strong>
          </span>
        )}
      </label>
      <input
        type={type}
        name={id}
        id={id}
        placeholder={placeholder}
        required={required}
        {...inputAttributes}
      />
    </div>
  );
}
