export default function FormSection({ title, legendText, children }) {
  return (
    <section>
      <h2>{title}</h2>
      <fieldset>
        {legendText && <legend>{legendText}</legend>}
        {children}
      </fieldset>
    </section>
  );
}
