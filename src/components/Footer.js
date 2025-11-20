import React from 'react';
import './Footer.css';

export default function Footer(){
  return (
  <footer className="site-footer animate-on-scroll" data-delay="240" data-once="true">
      <div className="container footer-inner">
        <div>© {new Date().getFullYear()} Sagar. All rights reserved.</div>
        <div className="footer-links">
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
        </div>
      </div>
    </footer>
  );
}
