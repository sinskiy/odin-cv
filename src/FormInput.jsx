import { useContext, useState } from "react";
import { CvStateContext } from "./CvStateContext";

export default function FormInput({
  id,
  label = id,
  required = false,
  type = "text",
  placeholder,
  ...inputAttributes
}) {
  const CvState = useContext(CvStateContext);

  const [inputValue, setInputValue] = useState("");
  if (!inputValue) return;

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
      {CvState === "editing" ? (
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          type={type}
          name={id}
          id={id}
          placeholder={placeholder}
          required={required}
          {...inputAttributes}
        />
      ) : (
        <div>{inputValue}</div>
      )}
    </div>
  );
}
