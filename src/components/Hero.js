import React from 'react';
import { Link } from 'react-scroll';
import './Hero.css';
import pone from '../profilephoto/pone.jpg';

export default function Hero(){
  return (
  <header id="home" className="hero animate-on-scroll" data-delay="50">
      <div className="hero-inner">
        <div className="hero-text">
          <h1>Hi, I'm Sagar</h1>
          <p className="subtitle">Enthusiastic fresher skilled in Java and MERN stack, eager to join a dynamic team to enhance skills, contribute to projects, and grow as a versatile developer.</p>
          <div className="hero-ctas">
            <Link to="projects" smooth={true} duration={600} className="btn">View Projects</Link>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </div>
        </div>
        <div className="hero-visual">
          <img src={pone} alt="Sagar Roy" className="avatar show-on-desktop" />
        </div>
      </div>
      <div className="hero-bg"></div>
    </header>
  );
}
