document.addEventListener("DOMContentLoaded", function() {
const returnToTopButton = document.getElementById("return-to-top");

// Show the button when the user scrolls down
window.onscroll = function() {
if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
  returnToTopButton.style.display = "block"; // Show button
} else {
  returnToTopButton.style.display = "none"; // Hide button
}
};

// Scroll to top when the button is clicked
returnToTopButton.addEventListener("click", function() {
window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Add animation classes to elements
document.querySelectorAll('.section-space').forEach(section => {
  section.classList.add('fade-in');
});

document.querySelectorAll('.item-box').forEach((box, index) => {
  if (index % 2 === 0) {
    box.classList.add('slide-in-left');
  } else {
    box.classList.add('slide-in-right');
  }
});

// Observe elements
document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right').forEach(el => {
  observer.observe(el);
});
});

