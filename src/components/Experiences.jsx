import { useState } from "react";
import FormSection from "./FormSection";

export default function Experiences({ title, legendText, children }) {
  const [length, setLength] = useState(1);
  return (
    <>
      {Array(length)
        .fill(1)
        .map((section, i) => (
          <FormSection
            key={i}
            title={title}
            legendText={legendText}
            action="delete"
          >
            {children}
          </FormSection>
        ))}
      <button type="button" onClick={() => setLength(length + 1)}>
        add new {title}
      </button>
    </>
  );
}
