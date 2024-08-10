export default function ResumeSection({ title, children }) {
  return (
    <section className={`${title}-section`} aria-labelledby={title}>
      {children.props.children.length > 0 && (
        <h2 id={title} style={{ textTransform: "capitalize" }}>
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}
