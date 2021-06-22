import React from "react";
import "../css/header-section.css";
import img0 from "../images/034.png";
function Header(){
    return (
        <div className="header-section">
            <div className="text-section">
            <p id="Hi-section" className="mobile-head">Hi there!👋 My name is</p>
            <h1 className="mobile-head"><span className="name-span">Ayan</span><br />Chakraborty</h1>
            <p className="mobile-head">I'm a web developer, flutter app developer and a competitive coder from India.</p>
            <div>
                <button className="button glow-button">Resume</button>
            </div>
            </div>
            <div className="image-section"><img src={img0} alt="avator"/></div>
        </div>
    );
}
export default Header;

{/* <p id="Hi-section" className="mobile-head">Hi there!👋 My name is</p>
    <h1 className="mobile-head"><span className="name-span">Ayan</span><br />Chakraborty</h1>
    <p className="mobile-head">I'm a web developer, flutter app developer and a competitive coder from India.</p>
    <div className="button-a">
    <a  href="https://drive.google.com/file/d/1dqig5xo2fplu2-Qaepxg2jdySsdOY7FP/view?usp=sharing">
    <button className="button">
    <span className="button-text">Resume</span>
    <span className="button-icon">
    <i class="fas fa-file-download"></i>
    </span>
    </button>      
    </a>
    </div>
    </div> */}