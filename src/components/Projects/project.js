import React from "react";
import "./project.css";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <section id="projects">
      <span className="projectTitle">Projects</span>
      <div className="projectLinks">
        <div className="projectLink">
          <button
            onClick={() => {
              window.open("https://github.com/Mathumitha-Gnanasekaran/resume-builder.git", "_blank");
            }}
            className="projectButton">
            <span role="img" aria-label="Link"> 🔗 </span>{" "} Resume Builder
          </button>
          <p className="projectDesc">Designed and implemented a robust Resume Builder application utilizing MongoDB, Express, React, and Node (MERN stack). This platform empowers users to create and customize professional resumes efficiently. MongoDB serves as the database to store user information securely. Express and Node facilitate seamless server-side operations, while React ensures a dynamic and intuitive user interface on the client side. The Resume Builder project streamlines the resume creation process, providing a user-friendly experience with a modern, MERN-based technology stack. </p>
        </div>

        <div className="projectLink">
          <button
            onClick={() => {
              window.open("https://github.com/Mathumitha-Gnanasekaran/portfolio.git", "_blank");
            }}
            className="projectButton">
            <span role="img" aria-label="Link"> 🔗 </span>{" "} Portfolio
          </button>
          <p className="projectDesc">Designed and developed a sleek and responsive portfolio website to showcase my skills and projects. Leveraged HTML and CSS for the foundation, ensuring a visually appealing and user-friendly interface. Implemented interactivity and seamless navigation using React JS, enhancing the overall user experience. The website serves as a dynamic platform to highlight my expertise and achievements, creating an engaging digital presence for professional networking and showcasing my portfolio. </p>
        </div>

        <div className="projectLink">
        <button
            onClick={() => {
              window.open("https://github.com/Mathumitha-Gnanasekaran/weather-app.git", "_blank");
            }}
            className="projectButton">
            <span role="img" aria-label="Link"> 🔗 </span>{" "} Weather App
          </button>
          <p className="projectDesc">Developed a user-friendly weather application using HTML, CSS, and JavaScript. This project allows users to check current weather conditions and forecasts for different locations. The clean and intuitive interface, crafted with HTML and CSS, ensures a seamless user experience on various devices. JavaScript is employed to fetch and display real-time weather data, providing accurate and up-to-date information. This weather application enhances user accessibility to weather details in an engaging and visually appealing manner. </p>
        </div>
      </div>
    </section>
  );
};

export default Project;
