console.log("Portfolio site loaded.");

// Smooth scroll to anchor links (like #projects)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Scroll horizontal projects container left/right on button click
function scrollProjects(direction) {
  const container = document.getElementById('projectsContainer');
  const scrollAmount = 300; // pixels

  if (direction === 'left') {
    container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  } else {
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }
}

// Show/hide project scroll buttons based on scroll position
function updateProjectScrollButtons() {
  const container = document.getElementById('projectsContainer');
  const leftBtn = document.querySelector('.scroll-btn.left');
  const rightBtn = document.querySelector('.scroll-btn.right');

  if (!container || !leftBtn || !rightBtn) return;

  // If scrolled all the way left, hide left button
  leftBtn.style.display = container.scrollLeft > 10 ? 'block' : 'none';

  // If scrolled all the way right, hide right button
  rightBtn.style.display = (container.scrollLeft + container.clientWidth) < container.scrollWidth - 10 ? 'block' : 'none';
}

// Call update buttons on scroll and on page load
const projectsContainer = document.getElementById('projectsContainer');
if (projectsContainer) {
  projectsContainer.addEventListener('scroll', updateProjectScrollButtons);
  window.addEventListener('load', updateProjectScrollButtons);
}

// Simple fade-in on scroll for all sections
const fadeInElements = document.querySelectorAll('section, header');
function handleFadeIn() {
  const triggerBottom = window.innerHeight * 0.85;

  fadeInElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < triggerBottom) {
      el.classList.add('fade-in');
    }
  });
}
window.addEventListener('scroll', handleFadeIn);
window.addEventListener('load', handleFadeIn);

// Typing effect on the h2 subtitle in header
function typeEffect(element, speed = 100) {
  const text = element.textContent;
  element.textContent = '';
  let i = 0;
  const interval = setInterval(() => {
    element.textContent += text.charAt(i);
    i++;
    if (i >= text.length) clearInterval(interval);
  }, speed);
}

const subtitle = document.querySelector('header h2');
if (subtitle) {
  typeEffect(subtitle, 120);
}
// Modal image enlarging functionality
const modal = document.getElementById("imageModal");
const img = document.getElementById("profileImage");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close");

img.onclick = function() {
  modal.style.display = "block";
  modalImg.src = this.src;
  modalImg.alt = this.alt;
}

closeBtn.onclick = function() {
  modal.style.display = "none";
}

modal.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}
