import Narbar from "./components/NavBar/narbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import Project from "./components/Projects/project";
import Works from "./components/Works/works";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
      <Narbar/>
      <Intro/>
      <Skills/>
      <Project/>
      <Works/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
