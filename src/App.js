import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Skills from "./Components/skills/Skills";
import Services from "./Components/services/Services";
import Qualification from "./Components/qualification/Qualification";
import Testimonials from "./Components/testimonials/Testimonials";
import Contact from "./Components/contact/Contact";
import Footer from "./Components/footer/Footer";
import ScrollUp from "./Components/scrollup/ScrollUp";
import Work from "./Components/work/Work";
import PreLoader from "./Components/preloader/Preloader";

function App() {
  return (
    <>
      <PreLoader />
      <>
        <Header />
        <main className="main">
          <Home />
          <About />
          <Skills />
          <Services />
          <Qualification />
          <Work />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        <ScrollUp></ScrollUp>
      </>
    </>
  );
}

export default App;
