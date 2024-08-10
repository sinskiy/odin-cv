import ResumeForm from "./ResumeForm";
import Resume from "./Resume";
import "../styles/App.css";
import { useState } from "react";

export const baseResume = {
  generalInformation: {
    title: "John Galt",
    email: "main@johngalt.website",
    phone: "+7 (800) 555-35-35",
    location: "Columbus, Ohio, USA",
    github: "@johngalt",
  },
  work: [
    {
      title: "Inventor",
      company: "Twentieth Century Motor Company",
      description:
        "Designed a revolutionary new motor powered by ambient static electricity.",
      start: new Date("1 March, 1921"),
      end: new Date("1 March, 1928"),
    },
  ],
  education: [
    {
      institution: "Patrick Henry University",
      title: "Bachelor of Physics",
      start: new Date("1 September, 1915"),
      end: new Date("1 May, 1921"),
    },
    {
      institution: "Patrick Henry University",
      title: "Bachelor of Philosophy",
      start: new Date("1 September, 1915"),
      end: new Date("1 May, 1921"),
    },
  ],
};

export default function App() {
  const [resume, setResume] = useState(baseResume);
  return (
    <main>
      <ResumeForm setResume={setResume} {...resume} />
      <Resume {...resume} />
    </main>
  );
}
