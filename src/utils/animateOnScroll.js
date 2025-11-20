export default function initAnimateOnScroll() {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return null;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const el = entry.target;
      if (entry.isIntersecting) {
        el.classList.add('in-view');
        // if element has data-once, stop observing after it comes into view
        if (el.dataset.once === 'true') observer.unobserve(el);
      } else {
        // keep elements animated if they asked for persistent animation only
        if (el.dataset.once !== 'true') el.classList.remove('in-view');
      }
    });
  }, { threshold: 0.12 });

  const els = Array.from(document.querySelectorAll('.animate-on-scroll'));
  els.forEach((el, i) => {
    // allow optional delay via data-delay attribute (ms)
    const delay = parseInt(el.dataset.delay || '0', 10);
    if (delay) el.style.transitionDelay = `${delay}ms`;
    observer.observe(el);
  });

  return () => observer.disconnect();
}
