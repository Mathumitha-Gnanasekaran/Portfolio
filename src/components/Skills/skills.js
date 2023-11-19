import React from 'react';
import './skills.css';
import Frontend from '../../assets/frontend.png';
import Backend from '../../assets/backend.png';
import Database from '../../assets/database.png';
import IOS from '../../assets/ios.png';
import BA from'../../assets/business-analyst.png';

const Skills = () => {
  return (
    <section id='skills'>
        <span className="skillTitle">What I do</span>
        <span className="skillDesc">I'm a tech enthusiast with a diverse skill set. I create engaging frontend experiences, and robust backend systems, manage databases, develop iOS apps, and analyze business needs to ensure technology aligns seamlessly with strategic goals. I also bring proficiency in RESTful API development and version control systems. My problem-solving and analytical thinking, coupled with strong communication, collaboration, project management, and organizational skills, contribute to delivering high-quality solutions. I pride myself on adaptability, a willingness to learn, attention to detail, and an innate creativity that drives a user-centric design approach. </span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={Frontend} alt="Frontend" className="skillBarImg"/>
                <div className="skillBarText">
                    <h2>Frontend Development</h2>
                    <p>I am proficient in a variety of front-end languages, including HTML, CSS, Tailwind CSS, and JavaScript, with specialized expertise in ReactJS.</p>
                </div>
            </div>

            <div className="skillBar">
                <img src={Backend} alt="Backend" className="skillBarImg"/>
                <div className="skillBarText">
                    <h2>Backend Development</h2>
                    <p>I specialize in back-end development using Node.js and Express.js, and Python leveraging their capabilities to create robust and efficient server-side solutions.</p>
                </div>
            </div>

            <div className="skillBar">
                <img src={Database} alt="Database" className="skillBarImg"/>
                <div className="skillBarText">
                    <h2>Data Exploration</h2>
                    <p>I have experience working with both relational databases, such as SQL, and NoSQL databases, including MongoDB, ensuring versatile and effective data management.</p>
                </div>
            </div>

            <div className="skillBar">
                <img src={IOS} alt="IOS" className="skillBarImg"/>
                <div className="skillBarText">
                    <h2>IOS Development</h2>
                    <p>I am well-versed in iOS development, utilizing the Swift programming language to create seamless and innovative mobile applications.</p>
                </div>
            </div>

            <div className="skillBar">
                <img src={BA} alt="BA" className="skillBarImg"/>
                <div className="skillBarText">
                    <h2>Business Analyst</h2>
                    <p>I specialize in business analysis with a focus on Product Management and expertise in Agile Methodologies, and proficiency in both Scrum and Waterfall Methodologies.</p>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Skills;
