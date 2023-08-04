import './Contact.css';
import logo from '../logo.png';
import HomePage from './HomePage';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import React, {useRef,useState} from 'react';

function Contact() {

  const [result, showResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3ws6ihh', 'template_o1bpofp', e.target, 'wg0S9FThfAgie5y6c')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
    showResult(true);
  };

  setTimeout(()=>{
    showResult(false);
  }, 5000);

  return (
    <div className="Contact">
      <div className="navBar">
        <div className="leftNavBar">
          <Link to={`/`}>
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="rightNavBar">
          <Link to="/about">
            <p>ABOUT</p>
          </Link>
          <Link to="/contact">
            <p>CONTACT</p>
          </Link>
        </div>
      </div>
      <div className="underLine"></div>

      <div className="contact">
        <h2>Contact</h2>
        <div className="contactPage">
          <form action=""  onSubmit={sendEmail}>
            <div className="form">
              <input type="text" placeholder="Name" name="fullName" required />
              <input type="text" placeholder="Email" name="email" required />
              <textarea type="text" placeholder="Message" name="message" required />
              <button>Submit</button>
              <div className="row">
                {result ? <p>Your message was sent successfully.</p> : null}
              </div>
            </div>
          </form>
          <div className="gif">
            <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmUyOThkODk3OWYyN2VkZGEyY2NiMmUxM2M2OTVjODhmMzA3MDY0MCZjdD1n/J1YFTAeTT3UAxnl6Bx/giphy.gif" />
          </div>
        </div>
      </div>

      <div className="underLine"></div>
      <p>Copyright © 2023 - All Rights Reserved</p>
    </div>
  );
}

export default Contact;
