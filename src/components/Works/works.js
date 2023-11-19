import React from 'react';
import './works.css';
import MERN from '../../assets/mern-certificate.jpg';
import JS from '../../assets/js-certificate.jpg';
import Python from'../../assets/python-certificate.jpg';
import Swift from '../../assets/swift-certificate.jpg';
import react from '../../assets/react-certificate.jpg';
import BA from '../../assets/ba-certificate.jpg';

const Works = () => {
  return (
    <section id='works'>
      <h2 className="worksTitle">Certificates</h2>
      <span className="worksDesc">I have a passion for learning, and my curiosity and adept searching skills have led me to complete several courses, earning certificates along the way. The following is a snapshot of the certifications I've acquired, and I remain committed to continuous learning by exploring and studying more. </span>
      <div className="worksImgs">
        <img src={JS} alt="JS" className="worksImg"/>
        <img src={Python} alt="JS" className="worksImg"/>
        <img src={Swift} alt="JS" className="worksImg"/>
        <img src={react} alt="React" className="worksImg"/>
        <img src={MERN} alt="MERN" className="worksImg"/>
        <img src={BA} alt="BA" className="worksImg"/>
      </div>

      {/* <button className="workBtn">See More</button> */}
    </section>
  );
}

export default Works;
