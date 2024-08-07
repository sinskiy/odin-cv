import "../styles/Resume.css";
import MonthYear from "./MonthYear";

export default function Resume({ title, additional, work, education }) {
  return (
    <section className="a4 resume">
      <h1>{title}</h1>
      <ul aria-description="additional info" className="additional">
        {/* TODO: move to object and add svg */}
        {additional.map((info) => (
          <li>{info}</li>
        ))}
      </ul>
      <section aria-labelledby="work" className="work-section">
        <h2 id="work">work</h2>
        <ul className="work-list">
          {work.map((job) => (
            <li>
              <h3>
                <span className="company">{job.company}</span> - {job.title}
              </h3>
              <p>
                <MonthYear time={job.start} /> - <MonthYear time={job.end} />
              </p>
              <ul className="responsibilities">
                {job.responsibilities.map((responsibility) => (
                  <li>{responsibility}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>
      <section aria-labelledby="education" className="education-section">
        <h2 id="education">education</h2>
        <ul className="work-list">
          {education.map((institution) => (
            <li>
              <h3>
                <span className="institution">{institution.name}</span> -{" "}
                {institution.title}
              </h3>
              <p>
                <MonthYear time={institution.start} /> -{" "}
                <MonthYear time={institution.end} />
              </p>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}
