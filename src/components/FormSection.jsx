import { useState, useContext } from "react";
import { CvStateContext } from "../CvStateContext";

export default function FormSection({
  title,
  displayTitle = true,
  legendText,
  children,
  action = "toggle",
  setLength,
}) {
  const CvState = useContext(CvStateContext);

  const [sectionDisplayed, setSectionDisplayed] = useState("displayed");
  const legendDisplayed = CvState === "editing" && legendText;
  return (
    <>
      {sectionDisplayed && (
        <article className={title.replace(" ", "-")}>
          <header
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: legendDisplayed ? "0" : "1rem",
            }}
          >
            <h2 className={!displayTitle ? "hidden-title" : undefined}>
              {sectionDisplayed && displayTitle && title}
            </h2>
            {action === "delete" && (
              <button
                onClick={() => {
                  setSectionDisplayed(false);
                  setLength && setLength((length) => length - 1);
                }}
              >
                delete the next
              </button>
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
        </article>
      )}
    </>
  );
}
