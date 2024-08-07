import ResumeForm from "./ResumeForm";
import Resume from "./Resume";
import "../styles/App.css";

export default function App() {
  return (
    <main>
      <ResumeForm />
      <Resume
        title="Dima Sinskiy"
        additional={[
          "sinskiy@proton.me",
          "+7 (999) 777-66-02",
          "Tambov, Russia",
          "@sinskiy",
        ]}
        work={[
          {
            title: "web developer",
            company: "Spherical",
            description: "Hello world. I did a lot, swear by my life.",
            start: new Date("January 5, 2024"),
            end: "present",
          },
          {
            title: "web engineer",
            company: "Square",
            description: "Hello world. I did a lot, swear by my life.",
            start: new Date("September 1, 2023"),
            end: new Date("September 1, 2024"),
          },
        ]}
        education={[
          {
            name: "Harvard",
            title: "B.S., Computer Science",
            start: new Date("September 5, 2022"),
            end: new Date("January 21, 2025"),
          },
        ]}
      />
    </main>
  );
}
