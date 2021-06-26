import React from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import About from "./About";
import Footer from "./Footer";
import Contact from "./Contact";
import Education from "./Education";
import Project from "./Project";
import Skill from "./Skill";
import "../css/main-div.css";
import 'bootstrap/dist/css/bootstrap.min.css';
function App(){
    return (
    <div className="main-div container">
      <NavBar />
      <Header />
      <hr class="separator separator--dots" />
      <About />
      <hr class="separator separator--dots" />
      <Skill />
      <hr class="separator separator--dots" />
      <Project />
      <hr class="separator separator--dots" />
      <Education />
      <hr class="separator separator--dots" />
      <Contact />
      <hr class="separator separator--dots" />
      <Footer />
    </div>
    );
}
export default App;