import { useContext, useState } from "react";
import { CvStateContext } from "../CvStateContext";
import "../styles/FormInput.css";

export default function FormInput({
  id,
  label = id,
  required = false,
  type = "text",
  placeholder,
  ...inputAttributes
}) {
  const CvState = useContext(CvStateContext);

  const [inputValue, setInputValue] = useState("12@12.com");
  if (!inputValue && CvState === "viewing") return;

  return (
    <div className="form-input">
      <label htmlFor={id}>
        {label}
        {CvState === "editing" && required && (
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
