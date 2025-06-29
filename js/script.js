// === Portfolio Data ===
const posters = [
  'images/poster/poster1.png',
  'images/poster/poster2.png',
  'images/poster/poster3.png',
  'images/poster/poster4.png',
  'images/poster/poster5.png'
];

const thumbnails = [
  'images/thumbnails/thumb1.png',
  'images/thumbnails/thumb2.png',
  'images/thumbnails/thumb3.png',
  'images/thumbnails/thumb4.png',
  'images/thumbnails/thumb5.png',
  'images/thumbnails/thumb6.png',
  'images/thumbnails/thumb7.png',
  'images/thumbnails/thumb8.jpg',
  'images/thumbnails/thumb9.jpg'
];

const brandings = [
  'images/branding/brand1.png',
  'images/branding/brand2.png',
  'images/branding/brand3.png',
  'images/branding/brand4.png',
  'images/branding/brand5.png'
];

// === Load Images ===
function loadImages(images, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = ''; // Clear existing content

  images.forEach((src) => {
    const item = document.createElement('div');
    item.className = 'portfolio-item';

    const img = document.createElement('img');
    img.src = src;
    img.alt = 'Design Preview';
    img.loading = 'lazy';
    img.onerror = () => console.error("Missing image:", src);

    item.appendChild(img);
    container.appendChild(item);
  });
}

// === Contact Form Submission ===
document.addEventListener('DOMContentLoaded', () => {
  loadImages(posters, 'posters-grid');
  loadImages(thumbnails, 'thumbnails-grid');
  loadImages(brandings, 'branding-grid');

  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();

      if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
      }

      // ✅ Send to WhatsApp
      const phoneNumber = '917980901278'; // Replace with your WhatsApp number
      const encodedMsg = encodeURIComponent(
        `New Contact Form Message:%0AName: ${name}%0AEmail: ${email}%0AMessage: ${message}`
      );
      window.open(`https://wa.me/${phoneNumber}?text=${encodedMsg}`, '_blank');

      alert(`Thank you, ${name}! Redirecting you to WhatsApp.`);
      form.reset();
    });
  }

  // === Mobile Menu Toggle ===
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }

  // === Hero Buttons Behavior ===
  document.querySelector('.btn-primary')?.addEventListener('click', () => {
    document.getElementById('posters')?.scrollIntoView({ behavior: 'smooth' });
  });

  document.querySelector('.btn-secondary')?.addEventListener('click', () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  });
});
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const message = this.message.value.trim();

  if (!name || !email || !message) {
    alert('Please fill in all fields.');
    return;
  }

  const phoneNumber = '917980901278'; // <- Your WhatsApp number
  const rawMessage = `New Contact Form Message:\nName: ${name}\nEmail: ${email}\nMessage: ${message}`;
  const encodedMessage = encodeURIComponent(rawMessage);

  window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  this.reset();
});

// === Smooth Scrolling ===
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// === Performance Optimization ===
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

// === Smooth Scrolling ===
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// === Performance Optimization ===
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

// === Smooth Scrolling ===
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
