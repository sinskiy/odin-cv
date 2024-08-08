import "../styles/ResumeFormCategory.css";
import ResumeFormEntry from "./ResumeFormEntry";

export default function ResumeFormCategory({ title, formEntries }) {
  return (
    <article className="resume-form-category">
      <details>
        <summary>{title}</summary>
        <div className="details-content">
          {Object.entries(formEntries).map(
            ([formEntryTitle, formEntryValue]) => (
              <ResumeFormEntry
                key={formEntryTitle}
                label={formEntryTitle}
                type={typeof formEntryValue === "string" ? "text" : "date"}
              />
            ),
          )}
        </div>
      </details>
    </article>
  );
}
