import { baseResume } from "./App";
import ResumeFormCategory from "./ResumeFormCategory";

export default function ResumeFormCategoryEntries({
  resume,
  setResume,
  handleInputChange,
  title,
  entries,
}) {
  const baseEntry = baseResume[title];
  return (
    <div>
      {entries.map((category, i) => (
        <ResumeFormCategory
          key={i}
          handleInputChange={handleInputChange}
          title={title}
          formEntries={category}
          index={i}
        />
      ))}
      <button
        onClick={() =>
          setResume({ ...resume, [title]: [...resume[title], ...baseEntry] })
        }
      >
        Add new
      </button>
    </div>
  );
}
