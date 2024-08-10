import "../styles/Resume.css";
import MonthYear from "./MonthYear";
import ResumeSection from "./ResumeSection";
import { Mail, Phone, MapPin, Github } from "lucide-react";

// TODO: move to bottom

export default function Resume({
  generalInformation: { title, ...additional },
  work,
  education,
}) {
  return (
    <section className="a4 resume">
      <header>
        <h1>{title}</h1>
        <ul aria-description="additional info" className="additional">
          {Object.entries(additional).map(
            ([name, value]) =>
              value && (
                <li key={name}>
                  {resumeIcons[name]}
                  {value}
                </li>
              ),
          )}
        </ul>
      </header>
      <ResumeSection title="work">
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
      </ResumeSection>
      <ResumeSection title="education">
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
      </ResumeSection>
    </section>
  );
}

const resumeIcons = {
  github: <Github />,
  email: <Mail />,
  phone: <Phone />,
  location: <MapPin />,
};
