import ResumeFormCategory from "./ResumeFormCategory";

export default function ResumeFormCategoryEntries({ title, entries }) {
  return (
    <>
      {entries.map((category, i) => (
        <ResumeFormCategory key={i} title={title} formEntries={category} />
      ))}
    </>
  );
}
