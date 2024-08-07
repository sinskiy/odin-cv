import { useState } from "react";
import FormSection from "./FormSection";

export default function Experiences({ title, legendText, children }) {
  const [length, setLength] = useState(0);
  return (
    <>
      <section>
        {length > 0 && <h2>{title}</h2>}
        {Array(length)
          .fill(1)
          .map((section, i) => (
            <FormSection
              key={i}
              title={title}
              displayTitle={false}
              legendText={legendText}
              setLength={setLength}
              action="delete"
            >
              {children}
            </FormSection>
          ))}
      </section>
      <button type="button" onClick={() => setLength(length + 1)}>
        add new {title}
      </button>
    </>
  );
}
