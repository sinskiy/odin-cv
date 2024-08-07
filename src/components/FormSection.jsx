import { useState, useContext } from "react";
import { CvStateContext } from "../CvStateContext";

export default function FormSection({ title, legendText, children }) {
  const CvState = useContext(CvStateContext);

  const [sectionDisplayed, setSectionDisplayed] = useState(true);
  const legendDisplayed = CvState === "editing" && legendText;
  return (
    <section style={{ marginBottom: sectionDisplayed ? "4rem" : 0 }}>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: legendDisplayed ? "0" : "1rem",
        }}
      >
        <h2>{sectionDisplayed && title}</h2>
        <input
          type="checkbox"
          checked={sectionDisplayed}
          onChange={(e) => setSectionDisplayed(e.target.checked)}
          name={title}
          id={title}
        />
      </header>
      <fieldset style={{ display: sectionDisplayed ? "block" : "none" }}>
        {legendDisplayed && (
          <legend style={{ marginBottom: "1rem" }}>{legendText}</legend>
        )}
        {children}
      </fieldset>
    </section>
  );
}
