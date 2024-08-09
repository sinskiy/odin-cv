import "../styles/ResumeForm.css";
import ResumeFormCategory from "./ResumeFormCategory";
import ResumeFormCategoryEntries from "./ResumeFormCategoryEntries";

export default function ResumeForm({ setResume, ...resume }) {
  function handleInputChange(e, title, index, formEntryTitle) {
    const newValue = e.target.value;
    if (index === undefined) {
      resume[title][formEntryTitle] = newValue;
    } else {
      resume[title][index][formEntryTitle] = newValue;
    }
    setResume({ ...resume });
  }
  const categories = Object.entries(resume).map(
    ([categoryTitle, categoryOrFormEntries], i) =>
      Array.isArray(categoryOrFormEntries) ? (
        <ResumeFormCategoryEntries
          key={i}
          resume={resume}
          setResume={setResume}
          handleInputChange={handleInputChange}
          title={categoryTitle}
          entries={categoryOrFormEntries}
        />
      ) : (
        <ResumeFormCategory
          key={i}
          title={categoryTitle}
          formEntries={categoryOrFormEntries}
          handleInputChange={handleInputChange}
        />
      ),
  );
  return <section className="resume-form">{categories}</section>;
}
