import "../styles/ResumeFormCategory.css";
import ResumeFormEntry from "./ResumeFormEntry";

export default function ResumeFormCategory({
  handleInputChange,
  title,
  index,
  formEntries,
}) {
  return (
    <article className="resume-form-category">
      <details>
        <summary>{title}</summary>
        <div className="details-content">
          {Object.entries(formEntries).map(
            ([formEntryTitle, formEntryValue]) => (
              <ResumeFormEntry
                key={formEntryTitle}
                categoryTitle={title}
                label={formEntryTitle}
                value={formEntryValue}
                index={index}
                handleInputChange={handleInputChange}
                type={
                  formEntryTitle.includes("start") ||
                  formEntryTitle.includes("end")
                    ? "date"
                    : "text"
                }
              />
            ),
          )}
        </div>
      </details>
    </article>
  );
}
