document.addEventListener('DOMContentLoaded', function() {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu');
  const navMenu = document.querySelector('nav ul');
  
  mobileMenuBtn.addEventListener('click', function() {
    navMenu.classList.toggle('show');
  });
  
  // Close mobile menu when clicking a link
  document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function() {
      navMenu.classList.remove('show');
    });
  });
  
  // Portfolio Filter
  const filterButtons = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      this.classList.add('active');
      
      const filterValue = this.getAttribute('data-filter');
      
      portfolioItems.forEach(item => {
        if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
  
  // Form Validation
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      
      // Simple validation
      if (name === '' || email === '' || message === '') {
        alert('Please fill in all required fields');
        return;
      }
      
      if (!validateEmail(email)) {
        alert('Please enter a valid email address');
        return;
      }
      
      // If validation passes
      alert('Thank you for your message! I will get back to you soon.');
      this.reset();
    });
  }
  
  // Email validation helper function
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
  
  // Animation on scroll
  const animateOnScroll = function() {
    const elements = document.querySelectorAll('.feature-box, .portfolio-item, .service-card, .timeline-item');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;
      
      if (elementPosition < screenPosition) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  };
  
  // Set initial state for animated elements
  document.querySelectorAll('.feature-box, .portfolio-item, .service-card, .timeline-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
  });
  
  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Run once on load
});