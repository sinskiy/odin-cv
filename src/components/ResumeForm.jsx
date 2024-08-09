import "../styles/ResumeForm.css";
import ResumeFormCategory from "./ResumeFormCategory";
import ResumeFormCategoryEntries from "./ResumeFormCategoryEntries";

export default function ResumeForm({ ...resume }) {
  const categories = Object.entries(resume).map(
    ([categoryTitle, categoryOrFormEntries], i) =>
      Array.isArray(categoryOrFormEntries) ? (
        <ResumeFormCategoryEntries
          key={i}
          title={categoryTitle}
          entries={categoryOrFormEntries}
        />
      ) : (
        <ResumeFormCategory
          key={i}
          title={categoryTitle}
          formEntries={categoryOrFormEntries}
        />
      ),
  );
  return <section className="resume-form">{categories}</section>;
}
