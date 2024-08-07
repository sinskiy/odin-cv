import { useState, useContext } from "react";
import { CvStateContext } from "../CvStateContext";

export default function FormSection({ title, legendText, children }) {
  const CvState = useContext(CvStateContext);

  const [displayed, setDisplayed] = useState(true);
  return (
    <section style={{ marginBottom: "4rem" }}>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: legendText ? "0" : "1rem",
        }}
      >
        <h2>{displayed && title}</h2>
        <input
          type="checkbox"
          checked={displayed}
          onChange={(e) => setDisplayed(e.target.checked)}
          name={title}
          id={title}
        />
      </header>
      {displayed && (
        <fieldset>
          {legendText && (
            <legend style={{ marginBottom: "1rem" }}>{legendText}</legend>
          )}
          {children}
        </fieldset>
      )}
    </section>
  );
}
