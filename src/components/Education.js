import React from 'react';
import './Education.css';

// Education entries
const schools = [
  {
    inst: 'Presidency University',
    degree: 'Bachelor in Computer Application',
    cgpa: '8.0',
    period: '2023 - 2026',
    year: 2026
  }
];

// Certificates — add as many objects here as needed. Each should include a viewable URL.
const certificates = [
  { title: 'Java Certification', issuer: 'Apna Collage', year: 2024, url: 'https://drive.google.com/file/d/1K-XvwSU7Z-RV_JLjGnDo3mWa3bQby2F1/view?usp=drive_link' },
  { title: 'Web Design & Development', issuer: 'Skill India', year: 2023, url: 'https://drive.google.com/file/d/1LEwv6jJPWXNMGOeYtMqNq_-Bmt9WbcsS/view?usp=drive_link' },
  { title: 'Python Certification', issuer: 'Guvi', year: 2024, url: 'https://drive.google.com/file/d/1pn1L6vOqirxJXPpzAAjaR3c3-9e2WvSv/view?usp=drive_link' },
  { title: 'Deep Learning', issuer: 'simplilearn', year: 2025, url: 'https://drive.google.com/file/d/1TIefgB68u723ffbKFr80HAOnO5Y14QPj/view?usp=drive_link' }
];

export default function Education(){
  return (
    <section id="education" className="education">
      <div className="container">
        <h2>Education & Certifications</h2>

        <div className="edu-grid">
          {schools.map((s,i)=> (
            <div className="edu-card" key={i}>
              <h3>{s.degree}</h3>
              <div className="muted">{s.inst} • Passout {s.year} • CGPA: {s.cgpa}</div>
            </div>
          ))}
        </div>

        <h3 style={{marginTop:24}}>Certificates</h3>
        <div className="cert-grid">
          {certificates.map((c, idx)=> (
            <div className="cert-card" key={idx}>
              <div className="cert-content">
                <h4>{c.title}</h4>
                <div className="muted">{c.issuer} • {c.year}</div>
              </div>
              {c.url ? (
                <a className="btn btn-outline cert-link" href={c.url} target="_blank" rel="noopener noreferrer">View</a>
              ) : (
                <span className="muted small">No link</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
