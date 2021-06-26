import React from "react";
import "../css/contact.css";
import 'bootstrap/dist/css/bootstrap.min.css';
function Contact(){
    return (
        <div className="contact-section" name="contact">
            <div className="colored">
                <h2>Contact Me</h2>
            </div>
            <div className="non-colored">
                <h2>Get in touch</h2>
                <form className="row g-3">
  <div className="col-md-6">
    <label for="inputEmail4" className="form-label">FULL NAME</label>
    <input type="email" className="form-control" id="inputEmail4" placeholder="Name"/>
  </div>
  <div className="col-md-6">
    <label for="inputPassword4" className="form-label">EMAIL ADDRESS</label>
    <input type="password" className="form-control" id="inputPassword4" placeholder="Email"/>
  </div>
  <div className="col-12">
    <label for="inputAddress" className="form-label">SUBJECT</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="Subject" />
  </div>
  {/* <div className="col-12">
    <label for="inputAddress2" className="form-label">Address 2</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
  </div> */}
  <div className="col-md-12">
    <label for="inputCity" className="form-label">City</label>
    <textarea rows="8" cols="100" className="form-control" placeholder="Message"/>
  </div>
  {/* <div className="col-md-4">
    <label for="inputState" className="form-label">State</label>
    <select id="inputState" className="form-select">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div> */}
  {/* <div className="col-md-2">
    <label for="inputZip" className="form-label">Zip</label>
    <input type="text" className="form-control" id="inputZip" />
  </div> */}
  {/* <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck" />
      <label className="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div> */}
  <div className="col-12">
    <button type="submit" className="button glow-button">Send Message <i class="fas fa-paper-plane"></i></button>
  </div>
</form>
            </div>
        </div>
    );
}
export default Contact;