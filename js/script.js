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

// === Load Images and Lightbox ===
function loadImages(images, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = '';

  images.forEach((src) => {
    const item = document.createElement('div');
    item.className = 'portfolio-item';

    const link = document.createElement('a');
    link.href = src;
    link.setAttribute('data-lg-size', '1406-1390');
    link.className = 'portfolio-link';

    const img = document.createElement('img');
    img.src = src;
    img.classList.add('fade-in'); // After img.src

    img.alt = 'Design Preview';
    img.loading = 'lazy';

    link.appendChild(img);
    item.appendChild(link);
    container.appendChild(item);
  });

   lightGallery(container, {
    selector: '.portfolio-link',
    zoom: true,
    fullScreen: true,
    download: false,
    speed: 200, // Faster transition
    hideBarsDelay: 1000,
    showZoomInOutIcons: false,
    easing: 'ease-in-out'
  });
}

// === DOM Ready ===
document.addEventListener('DOMContentLoaded', () => {
  loadImages(posters, 'posters-grid');
  loadImages(thumbnails, 'thumbnails-grid');
  loadImages(brandings, 'branding-grid');

  // Contact Form Submission
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

    const phoneNumber = '917980901278';
    const rawMessage = `New Contact Form Message:\nName: ${name}\nEmail: ${email}\nMessage: ${message}`;
    const encodedMessage = encodeURIComponent(rawMessage);

    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    alert(`Thank you, ${name}! Redirecting you to WhatsApp.`);
    form.reset();
  });
}


  // Mobile Menu Toggle
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }

  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Page Loaded
  window.addEventListener('load', () => {
    document.body.classList.add('loaded');
  });

  // === Chat Bubble ===
  const chatBubble = document.createElement('div');
  chatBubble.id = 'chat-bubble';
  chatBubble.innerHTML = '<a href="https://wa.me/917980901278" target="_blank" title="Chat on WhatsApp">💬</a>';
  document.body.appendChild(chatBubble);
});

// === Chat Bubble Styling ===
const chatStyles = document.createElement('style');
chatStyles.textContent = `
  #chat-bubble {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 60px;
    height: 60px;
    background-color: #25D366;
    color: white;
    font-size: 30px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    z-index: 9999;
    animation: popIn 0.4s ease;
  }

  #chat-bubble a {
    color: white;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  @keyframes popIn {
    0% {
      transform: scale(0);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;
document.head.appendChild(chatStyles);

// === Chat Bubble Animation ===
const chatBubble = document.getElementById('chat-bubble');
if (chatBubble) {
  chatBubble.addEventListener('click', () => {
    chatBubble.classList.add('animate');
    setTimeout(() => {
      chatBubble.classList.remove('animate');
    }, 400);
  });
}

document.getElementById('theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
});

if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
}

lightGallery(container, {
  selector: '.portfolio-link',
  zoom: true,
  fullScreen: true,
  download: false,
  speed: 300,             // ⚡ Speed of transition (ms)
  hideBarsDelay: 1500,    // Time after which nav hides
  showZoomInOutIcons: false,
  easing: 'ease-in-out',  // Smooth but fast transition
});
