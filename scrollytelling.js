document.addEventListener('DOMContentLoaded', () => {
    // Add visible class to header elements immediately
    document.querySelector('.article-header').classList.add('header-visible');
    
    // Setup Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.2 });
    
    // Observe all elements that should animate on scroll
    const elementsToAnimate = document.querySelectorAll('.content-block, .pull-quote, .gallery-item, .data-viz, .side-by-side, .fade-in, .slide-in-left, .slide-in-right, .scale-in');
    elementsToAnimate.forEach(element => {
      observer.observe(element);
    });
    
    // Progress bar implementation
    const progressBar = document.querySelector('.progress-bar');
    window.addEventListener('scroll', () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      progressBar.style.width = scrolled + '%';
    });
  });