import React from "react";
import "../css/header-section.css";
import img0 from "../images/034.png";
function Header(){
    return (
        <div className="header-section" name="top-link">
            <div className="text-section">
                <div className="sub-div">
                    <div className="social">
                        <ul>
                        <a><li><i class="fab fa-github"></i></li></a>
                        <a><li><i class="fas fa-envelope"></i></li></a>
                        <a><li><i class="fab fa-linkedin"></i></li></a>
                        </ul>
                    </div>
                <div className="main-content">
                <p id="Hi-section" className="mobile-head">Hi there!👋 My name is</p>
                <h1 className="mobile-head"><span className="name-span">Ayan</span><br />Chakraborty</h1>
                <p className="mobile-head">I'm a web developer, flutter app developer and a competitive coder from India.</p>
                <div>
                <button className="button glow-button">Resume</button>
                <div className='icon-scroll'></div>
                </div>
                
                </div>
            </div>
            </div>
            
            
            <div className="image-section"><img src={img0} alt="avator"/></div>
        </div>
    );
}
export default Header;