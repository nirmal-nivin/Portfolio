import Home from "./components/Home";
import Navbar from "./components/Navbar";
import image from "./assets/port1.gif"
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <SocialLinks/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
     </div>
  );
}

export default App;
export {image}
