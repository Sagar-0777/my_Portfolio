import React, {useState} from 'react';
import projectsData from '../data/projects';
import ProjectCard from './ProjectCard';
import './Projects.css';

const allTech = Array.from(new Set(projectsData.flatMap(p=> p.tech)));

export default function Projects(){
  const [filter, setFilter] = useState('All');
  const filtered = filter==='All' ? projectsData : projectsData.filter(p=> p.tech.includes(filter));

  return (
  <section id="projects" className="projects animate-on-scroll" data-delay="140">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-controls">
          <button className={`chip ${filter==='All'?'active':''}`} onClick={()=>setFilter('All')}>All</button>
          {allTech.map(t=> (
            <button key={t} className={`chip ${filter===t?'active':''}`} onClick={()=>setFilter(t)}>{t}</button>
          ))}
        </div>
        <div className="projects-grid">
          {filtered.map((p,i)=> <ProjectCard key={p.id} p={p} index={i} />)}
        </div>
      </div>
    </section>
  );
}
