import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Preloading from "./components/Preloading";

function App() {

  const [preload, setpreload] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setpreload(false);
    }, 13000);
  }, []);

  return (
    <div>
      {preload ? <Preloading /> :
        <div>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
        <Footer />
      </div>}
    </div>
  );
}

export default App;
