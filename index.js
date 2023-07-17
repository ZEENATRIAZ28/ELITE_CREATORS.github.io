// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Form submission handling
  document.querySelector('#contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Perform form validation and submission here
    // You can use JavaScript frameworks or libraries for form validation, or handle it manually
    // For this example, we'll just log a success message to the console
  
    console.log('Form submitted successfully!');
  });
  