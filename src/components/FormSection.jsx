import { useState, useContext } from "react";
import { CvStateContext } from "../CvStateContext";

export default function FormSection({ title, legendText, children }) {
  const CvState = useContext(CvStateContext);

  const [displayed, setDisplayed] = useState(true);
  return (
    <section>
      <header style={{ display: "flex", justifyContent: "space-between" }}>
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
          {legendText && <legend>{legendText}</legend>}
          {children}
        </fieldset>
      )}
    </section>
  );
}
