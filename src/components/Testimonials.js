import React from 'react';
import testimonials from '../data/testimonials';
import './Testimonials.css';

export default function Testimonials(){
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h2>Testimonials</h2>
        <div className="testimonials-grid">
          {testimonials.map(t=> (
            <blockquote className="testimonial" key={t.id}>
              <p>“{t.quote}”</p>
              <footer>- {t.name}, <span className="muted">{t.role}</span></footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
