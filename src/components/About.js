import React from 'react';
import './About.css';
import ptwo from '../profilephoto/ptwo.jpg';

export default function About(){
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-grid">
          <img src={ptwo} alt="Sagar Roy portrait" className="about-photo" />
          <div className="about-content">
            <h2>About Me</h2>
            <p>Forward-thinking fresher specializing in Java and MERN stack, ready to contribute to innovative projects and develop strong technical expertise.</p>
            <ul className="highlights">
              <li>Bachelor's degree in Computer Application</li>
              <li>React, Express, Node.js, MongoDB, Java, C ,JavaScript</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
