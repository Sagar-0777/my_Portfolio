import React from 'react';
import './Projects.css';

export default function ProjectCard({p, index=0}){
  const delay = Math.min(300, index * 60);
  return (
    <article className="project-card animate-on-scroll" data-delay={delay}>
      <div className="project-thumb" aria-hidden />
      <div className="project-body">
        <h3>{p.title}</h3>
        <p>{p.description}</p>
        <div className="project-tech">
          {p.tech.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
        <div className="project-links">
          <a href={p.demo} target="_blank" rel="noreferrer">Live</a>
          <a href={p.repo} target="_blank" rel="noreferrer">Code</a>
        </div>
      </div>
    </article>
  );
}
