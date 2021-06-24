import React from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import About from "./About";
import Footer from "./Footer";
import Contact from "./Contact";
import "../css/main-div.css";
function App(){
    return (
    <div className="main-div">
      <NavBar />
      <Header />
      <hr class="separator separator--dots" />
      <About />
      <hr class="separator separator--dots" />
      <Contact />
      <hr class="separator separator--dots" />
      <Footer />
    </div>
    );
}
export default App;