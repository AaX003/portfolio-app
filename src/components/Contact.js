import "../css/Contact.css";
import { FaPhone, FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdMail } from "react-icons/md";

function Contact() {
  return (
    <div className="contact-container">
      <header className="header__hero__contact">
        <h1 className="title-header">
          Let's <span className="green-text">Connect</span>
        </h1>
        <p className="desc-header">
          I'm always interested in new opportunities 
          and exciting projects. Let's discuss how we can work together.
        </p>
      </header>

      <section className="contact-section">
         <h3 className="contact-title">My Info</h3>
        <small className="contact-msg">
            Whether it's a project or a discussion, I'm 
            always open for a collaboration. Let's discuss 
            possibilities!
        </small>
        <ul className="contact-info">
            <li className="email">
                 <span className="contact-svg"><MdMail /></span>
                 <span className="my-email-label">Email:</span>{" "}
                 <a href="mailto:aaxanah.hill@outlook.com">
                    aaxanah.hill@outlook.com
                 </a>
            </li>
            <li className="phone">
                 <span className="contact-svg"><FaPhone /></span>
                 <span className="my-tel-label">Tel: </span>
                 <a href="tel:4344806340">
                    +1 (434)-480-6340
                 </a>
            </li>
            <li className="github">
              <span className="contact-svg"><FaGithub /></span>
              <span className="my-github-label">Github: </span>
              <a href="https://github.com/AaX003" target="_blank" rel="noreferrer">
                AaX003
              </a>
            </li>
            <li className="linkedin">
              <span className="contact-svg"><FaLinkedin /></span>
              <span className="my-github-label">Linkedin: </span>
              <a href="https://www.linkedin.com/in/aaxanah-hill-79991431a/" target="_blank" rel="noreferrer">
                AaXanah Hill
              </a>
            </li>
        </ul>
      </section>

      <section className="contact-section">
       
        <form className="contact-form" action="#" method="post">
          <ul className="contact-list">

             <li className="name-label">
              <label htmlFor="name">Name:</label>
              <input id="name" name="name" type="text" placeholder="Your Name" required />
            </li>

            <li className="email-label">
              <label htmlFor="email">Email:</label>
              <input id="email" name="email" type="email" placeholder="you@example.com" required />
            </li>

            <li className="subject-label">
              <label htmlFor="subject">Topic:</label>
              <input id="subject" name="subject" type="text" placeholder="What's your topic?" required />
            </li>


            <li className="msg-label">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows={4} placeholder="Any details..." required />
            </li>

            <li className="email-label">
              <button type="submit">Send</button>
            </li>
          </ul>
        </form>
      </section>
      <footer className="footer">
          © 2025 AXDEV. All rights reserved.💚
      </footer>
    </div>
  );
}

export default Contact;
