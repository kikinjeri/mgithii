// Hamburger toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  nav.classList.toggle("scrolled", window.scrollY > 50);
});

// IntersectionObserver for fade-in animation
const animatedElements = document.querySelectorAll('.animate');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });
animatedElements.forEach(el => observer.observe(el));

// Typing animation for hero text
const typingText = document.querySelector('.typing-text');
const fullText = typingText.textContent;
typingText.textContent = '';
let i = 0;
function type() {
  if(i < fullText.length) {
    typingText.textContent += fullText.charAt(i);
    i++;
    setTimeout(type, 80);
  }
}
type();

