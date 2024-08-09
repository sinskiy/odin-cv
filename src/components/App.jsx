import ResumeForm from "./ResumeForm";
import Resume from "./Resume";
import "../styles/App.css";
import { useState } from "react";

export const baseResume = {
  generalInformation: {
    title: "",
    email: "",
    phone: "",
    location: "",
    github: "",
  },
  work: [
    {
      title: "",
      company: "",
      description: "",
      start: new Date(0),
      end: "present",
    },
  ],
  education: [
    {
      institution: "",
      title: "",
      start: new Date(0),
      end: "present",
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
