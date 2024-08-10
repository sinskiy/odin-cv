import { Trash2 } from "lucide-react";
import "../styles/ResumeFormCategory.css";
import ResumeFormEntry from "./ResumeFormEntry";

export default function ResumeFormCategory({
  handleInputChange,
  title,
  index,
  handleDeleteCategory,
  formEntries,
}) {
  return (
    <article className="resume-form-category">
      <details>
        <summary>
          {title}
          {index !== undefined && (
            <button aria-label="delete category">
              <Trash2 onClick={() => handleDeleteCategory(title, index)} />
            </button>
          )}
        </summary>
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
