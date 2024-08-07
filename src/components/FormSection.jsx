import { useState, useContext } from "react";
import { CvStateContext } from "../CvStateContext";

export default function FormSection({
  title,
  legendText,
  children,
  action = "toggle",
}) {
  const CvState = useContext(CvStateContext);

  const [sectionDisplayed, setSectionDisplayed] = useState("displayed");
  const legendDisplayed = CvState === "editing" && legendText;
  return (
    <>
      {sectionDisplayed && (
        <section className={title.replace(" ", "-")}>
          <header
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: legendDisplayed ? "0" : "1rem",
            }}
          >
            <h2>{sectionDisplayed && title}</h2>
            {action === "delete" && (
              <button onClick={() => setSectionDisplayed(false)}>delete</button>
            )}
          </header>
          <fieldset
            style={{
              display: sectionDisplayed ? "block" : "none",
            }}
          >
            {legendDisplayed && (
              <legend style={{ marginBottom: "1rem" }}>{legendText}</legend>
            )}
            {children}
          </fieldset>
        </section>
      )}
    </>
  );
}
