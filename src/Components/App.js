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
      <About />
      <Contact />
      <Footer />
    </div>
    );
}
export default App;