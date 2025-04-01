// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
  });
  
  // Simple form validation
  const form = document.querySelector('form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
  
    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const message = form.querySelector('textarea').value;
  
    if (name === '' || email === '' || message === '') {
        alert('Please fill out all fields.');
        return;
    }
  
    // Simulate form submission success
    alert('Message sent successfully!');
    form.reset();
  });
  
  // Smooth scroll for "Explore My Skills" button
  document.querySelector('.btn-about').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#skills').scrollIntoView({
        behavior: 'smooth'
    });
  });