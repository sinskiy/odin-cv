import "../styles/Resume.css";
import MonthYear from "./MonthYear";

export default function Resume({
  generalInformation: { title, ...additional },
  work,
  education,
}) {
  // TODO: break into multiple components
  return (
    <section className="a4 resume">
      <h1>{title}</h1>
      <ul aria-description="additional info" className="additional">
        {/* TODO: move to object and add svg */}
        {Object.entries(additional).map(([name, value]) => (
          <li key={name}>{value}</li>
        ))}
      </ul>
      <section aria-labelledby="work" className="work-section">
        <h2 id="work">work</h2>
        <ul className="work-list">
          {work.map((job, i) => (
            <li key={i}>
              <h3>
                <span className="company">{job.company}</span> - {job.title}
              </h3>
              <p>
                <MonthYear time={job.start} /> - <MonthYear time={job.end} />
              </p>
              <p>{job.description}</p>
            </li>
          ))}
        </ul>
      </section>
      <section aria-labelledby="education" className="education-section">
        <h2 id="education">education</h2>
        <ul className="work-list">
          {education.map((educationEntry, i) => (
            <li key={i}>
              <h3>
                <span className="institution">
                  {educationEntry.institution}
                </span>{" "}
                - {educationEntry.title}
              </h3>
              <p>
                <MonthYear time={educationEntry.start} /> -{" "}
                <MonthYear time={educationEntry.end} />
              </p>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}
