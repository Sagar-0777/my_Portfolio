import React from 'react';
import { Link } from 'react-scroll';
import './Hero.css';
import pone from '../profilephoto/pone.jpg';

export default function Hero() {
  return (
    <header id="home" className="hero animate-on-scroll" data-delay="50">
      <div className="hero-inner">
        <div className="hero-text">
          <h1>Hi, I'm Sagar</h1>
          <p className="subtitle">Enthusiastic fresher skilled in Java and MERN stack, eager to join a dynamic team to enhance skills, contribute to projects, and grow as a versatile developer.</p>
          <div className="hero-ctas">
            <Link to="projects" smooth={true} duration={600} className="btn">View Projects</Link>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
            <a href="/resume/up_resume.pdf" download="Sagar_Roy_Resume.pdf" className="btn btn-resume">
              <svg className="download-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              <span>Download Resume</span>
            </a>
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
