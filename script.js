// Replace these two dummy details before publishing the website.
const BUSINESS_CONTACT = {
  whatsapp: '919876543210',
  email: 'hello@lakshmiinteriors.in'
};

const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');

menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', isOpen);
  menuButton.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
});

document.querySelectorAll('.nav a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (entry.isIntersecting) {
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  }
}), { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

document.querySelector('#year').textContent = new Date().getFullYear();

document.querySelector('#contact-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const status = document.querySelector('.form-status');
  const form = new FormData(event.currentTarget);
  const enquiry = `Hello Lakshmi Interiors!%0A%0AName: ${encodeURIComponent(form.get('name'))}%0APhone: ${encodeURIComponent(form.get('phone'))}%0AProject details: ${encodeURIComponent(form.get('message'))}`;
  status.textContent = 'Opening WhatsApp with your enquiry…';
  window.open(`https://wa.me/${BUSINESS_CONTACT.whatsapp}?text=${enquiry}`, '_blank', 'noopener');
  event.currentTarget.reset();
});