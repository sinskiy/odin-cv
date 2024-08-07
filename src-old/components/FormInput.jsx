import { useContext, useState } from "react";
import { CvStateContext } from "../CvStateContext";
import "../styles/FormInput.css";
import EmailIcon from "../icons/EmailIcon";
import PhoneIcon from "../icons/PhoneIcon";

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
  if (!inputValue && CvState === "viewing") return;

  return (
    <div
      className="form-input"
      id={CvState === "viewing" ? id + crypto.randomUUID() : undefined}
    >
      {CvState !== "viewing" && (
        <label htmlFor={id}>
          {label}
          {CvState === "editing" && required && (
            <span>
              <strong aria-label="required">*</strong>
            </span>
          )}
        </label>
      )}
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
        <div className="text">
          {id === "email" && <EmailIcon />}
          {id === "phone" && <PhoneIcon />}
          <p>
            {type === "date"
              ? new Date(inputValue).toLocaleDateString()
              : inputValue}
            {id.includes("start") && (
              <>
                <br />-
              </>
            )}
          </p>
        </div>
      )}
    </div>
  );
}
