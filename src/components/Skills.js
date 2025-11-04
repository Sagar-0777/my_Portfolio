import React from 'react';
import './Skills.css';
import { FaJava, FaJs, FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaGithub, FaNpm, FaUpload } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiPostman, SiC, SiJsonwebtokens, SiMysql } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';

const skills = [
  {
    category: "Programming Languages",
    items: [
      { name: "Java", icon: <FaJava /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "C", icon: <SiC /> }
    ]
  },
  {
    category: "Web Development",
    items: [
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "Bootstrap", icon: <FaBootstrap /> },
      { name: "React.js", icon: <FaReact /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb /> }
    ]
  },
  {
    category: "Backend & APIs",
    items: [
      { name: "REST API Development", icon: <TbApi /> },
      { name: "JWT Authentication", icon: <SiJsonwebtokens /> },
  { name: "Multer", icon: <FaUpload /> },
      { name: "Bcrypt", icon: <FaDatabase /> }
    ]
  },
  {
    category: "Database Management",
    items: [
      { name: "MySQL", icon: <SiMysql /> },
      { name: "MongoDB", icon: <SiMongodb /> }
    ]
  },
  {
    category: "Control & Tools",
    items: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "npm", icon: <FaNpm /> }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skills.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>
                <span className="bullet">●</span> {category.category}
              </h3>
              <div className="skills-list">
                {category.items.map((skill, idx) => (
                  <div key={idx} className="skill-item">
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
