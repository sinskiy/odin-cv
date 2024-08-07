import MainForm from "./MainForm";

function App() {
  return (
    <main>
      <MainForm CvState="writing" />
      <MainForm CvState="editing" />
    </main>
  );
}

export default App;
