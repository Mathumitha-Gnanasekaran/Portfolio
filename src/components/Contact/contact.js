import React, { useRef } from "react";
import "./contact.css";
import HTML from "../../assets/html.png";
import CSS from "../../assets/css.png";
import JacaScript from "../../assets/java-script.png";
import react from "../../assets/react.png";
import python from "../../assets/python.png";
import swift from "../../assets/swift.png";
import Wordpress from "../../assets/wordpress.png";
import Mongodb from "../../assets/mongodb.png";
import Express from "../../assets/express.png";
import Nodejs from "../../assets/nodejs.png";
import SQL from "../../assets/sql.png";
import Facebook from "../../assets/facebook-icon.png";
import Instagram from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";
import Github from "../../assets/github.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_82bglpx",
        "template_qo959va",
        form.current,
        "2NNFlmZ7ZvUCae1dI"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email Sent!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contactPage">
      <div id="languages">
        <h2 className="languagePageTitle">Languages</h2>
        <p className="languageDesc">
          Proficient in MongoDB, ExpressJS, ReactJS, NodeJs, Python, and Swift, my coding repertoire is a blend of powerful technologies. Each language contributes a unique dimension to my problem-solving approach, showcasing adaptability and a fervor for tackling diverse coding challenges.
        </p>
        <div className="languageImgs">
          <img src={HTML} alt="HTML" className="languageImg" />
          <img src={CSS} alt="CSS" className="languageImg" />
          <img src={JacaScript} alt="JavaScript" className="languageImg" />
          <img src={react} alt="React" className="languageImg" />
          <img src={Mongodb} alt="Mongodb" className="languageImger" />
          <img src={SQL} alt="SQL" className="languageImg" />
          <img src={Nodejs} alt="Nodejs" className="languageImg" />
          <img src={Express} alt="Express" className="languageImg" />
          <img src={python} alt="Python" className="languageImg" />
          <img src={Wordpress} alt="Wordpress" className="languageImg" />
          <img src={swift} alt="Swift" className="languageImg" />
        </div>
      </div>

      <div id="contact">
        <h2 className="contactPageTitle">Contact Me</h2>
        <span className="contactDesc">
          Please fill out the form below to discuss any work opportunities.
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="your_name"
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="your_email"
          />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" value="Send" className="submitBtn">
            Submit
          </button>
          <div className="links">
            <a
              href="https://instagram.com/__.mathu__?igshid=NzZlODBkYWE4Ng=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Instagram} alt="Instagram" className="link" />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=100092193437319&mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Facebook} alt="Facebook" className="link" />
            </a>

            <a
              href="https://www.linkedin.com/in/mathumitha-gnanasekaran-86155a21b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={LinkedIn} alt="LinkedIn" className="linker" />
            </a>

            <a
              href="https://github.com/Mathumitha-Gnanasekaran"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Github} alt="Github" className="linker" />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
