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
  function handleDeleteCategory(title, index) {
    resume[title] = resume[title]
      .slice(0, index)
      .concat(resume[title].slice(index + 1));
    setResume(resume);
  }
  function handleAddCategory() {
    const empty = { ...baseResume[title][0] };
    for (const baseFormEntry in empty) {
      empty[baseFormEntry] = "";
    }
    resume[title].push(empty);
    setResume(resume);
  }
  return (
    <div>
      {entries.map((category, i) => (
        <ResumeFormCategory
          key={i}
          handleInputChange={handleInputChange}
          title={title}
          index={i}
          handleDeleteCategory={handleDeleteCategory}
          formEntries={category}
        />
      ))}
      <button className="styled" onClick={handleAddCategory}>
        Add {title} section
      </button>
    </div>
  );
}
