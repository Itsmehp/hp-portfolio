import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Skills from "./Components/skills/Skills";
import Services from "./Components/services/Services";
import Qualification from "./Components/qualification/Qualification";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
      </main>
    </>
  );
}

export default App;
