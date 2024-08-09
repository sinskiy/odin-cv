import { baseResume } from "./App";
import ResumeFormCategory from "./ResumeFormCategory";

export default function ResumeFormCategoryEntries({
  setResume,
  title,
  entries,
}) {
  const baseEntry = baseResume[title];
  return (
    <div>
      {entries.map((category, i) => (
        <ResumeFormCategory key={i} title={title} formEntries={category} />
      ))}
      <button
        onClick={() =>
          setResume((resume) => {
            return {
              ...resume,
              [title]: [...resume[title], ...baseEntry],
            };
          })
        }
      >
        Add new
      </button>
    </div>
  );
}
