import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';
import {Link} from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello!</span>
            <span className="introText">I'm
                <span className="introName"> Mathumitha Gnanasekaran.</span>
                <br/>
                Full Stack Developer
            </span>
            <p className="introParagra">As a dedicated Full Stack Developer in pursuit of a BSc. Information Technology <br/> Degree at SLIIT, I'm poised to leverage my strong academic foundation, critical <br/> thinking skills, and unwavering commitment to problem-solving. I aim to enhance <br/> your team's success by applying my technical expertise and innovation in the field.</p>
            <Link><button className="btn"><img src={btnImg} alt="Hire" className="btnImg" />Hire Me</button></Link>
        </div>
        <img src={bg} alt="Profile" className="bg"/>
    </section>
  )
}

export default Intro;
