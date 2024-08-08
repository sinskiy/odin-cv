import ResumeForm from "./ResumeForm";
import Resume from "./Resume";
import "../styles/App.css";
import { useState } from "react";

const baseResume = {
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
      <ResumeForm {...resume} />
      <Resume
        {...resume}
        // title="Dima Sinskiy"
        // additional={{
        //   email: "sinskiy@proton.me",
        //   phone: "+7 (999) 777-66-02",
        //   location: "Tambov, Russia",
        //   github: "@sinskiy",
        // }}
        // work={[
        //   {
        //     title: "web developer",
        //     company: "Spherical",
        //     description: "Hello world. I did a lot, swear by my life.",
        //     start: new Date("January 5, 2024"),
        //     end: "present",
        //   },
        //   {
        //     title: "web engineer",
        //     company: "Square",
        //     description: "Hello world. I did a lot, swear by my life.",
        //     start: new Date("September 1, 2023"),
        //     end: new Date("September 1, 2024"),
        //   },
        // ]}
        // education={[
        //   {
        //     name: "Harvard",
        //     title: "B.S., Computer Science",
        //     start: new Date("September 5, 2022"),
        //     end: new Date("January 21, 2025"),
        //   },
        // ]}
      />
    </main>
  );
}
