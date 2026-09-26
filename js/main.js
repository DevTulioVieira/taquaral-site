/* CONTATOS: altere aqui e atualize os links de fallback no HTML. */
const SITE_CONFIG = {
  whatsapp: '5533988168507',
  message: 'Olá! Vim pelo site e gostaria de conhecer mais sobre a Taquaral.',
  developerUrl: '' // URL completa da Ctrl Informática, quando fornecida.
};
const whatsappUrl = (message = SITE_CONFIG.message) => `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;
document.querySelectorAll('[data-whatsapp]').forEach(link => { link.href = whatsappUrl(); });
document.querySelectorAll('img').forEach(img => {
  const update = () => { img.classList.remove('loaded', 'failed'); img.classList.add(img.naturalWidth ? 'loaded' : 'failed'); };
  if (img.complete) update();
  img.addEventListener('load', update);
  img.addEventListener('error', update);
});
const header = document.querySelector('.site-header');
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
function setMenu(open, restoreFocus = false) {
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  nav.classList.toggle('open', open);
  document.body.classList.toggle('menu-open', open);
  if (restoreFocus) toggle.focus();
}
toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', event => {
  if (toggle.getAttribute('aria-expanded') !== 'true') return;
  if (event.key === 'Escape') setMenu(false, true);
  if (event.key === 'Tab') {
    const first = toggle, last = nav.querySelector('a:last-child');
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  }
});
window.matchMedia('(min-width: 1200px)').addEventListener('change', () => setMenu(false));
const updateHeader = () => header.classList.toggle('scrolled', window.scrollY > 24);
window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();

/* Ícones vetoriais funcionais, sem bibliotecas e sem logotipos de certificação. */
const iconPaths = {
  building: '<path d="M3 21h18M5 21V7l8-4v18m0-12h6v12M8 9v1m0 3v1m0 3v1m8-6v1m0 3v1"/>',
  people: '<circle cx="9" cy="7" r="3"/><path d="M3 21v-3a6 6 0 0 1 12 0v3H3m13-17a3 3 0 0 1 0 6m2 3a5 5 0 0 1 3 5v3h-3"/>',
  shield: '<path d="M12 3 3 7v5c0 5 9 9 9 9s9-4 9-9V7l-9-4Z"/><path d="m8 12 3 3 5-6"/>',
  growth: '<path d="M3 21h18M5 18v-5h3v5m3 0V9h3v9m3 0V4h3v14M4 8l6-5"/>',
  pin: '<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
  road: '<path d="m7 3-4 18m14-18 4 18M12 3v3m0 4v3m0 4v4"/>',
  leaf: '<path d="M20 3C8 2 2 8 5 15c4 8 16 2 15-12ZM3 21 15 9"/>',
  plan: '<path d="M4 3h16v18H4V3Zm0 7h8V3m0 7v6h8M8 21v-6H4m12-8h4"/>',
  instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/>'
};
const svg = paths => `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">${paths}</svg>`;
document.querySelectorAll('[data-icon]').forEach(el => { el.innerHTML = svg(iconPaths[el.dataset.icon] || ''); });
document.querySelectorAll('.wa-icon').forEach(el => { el.innerHTML = svg('<path d="M21 11.6a9 9 0 0 1-13.4 8L3 21l1.4-4.5A9 9 0 1 1 21 11.6Z"/><path d="M8 7c-2 4 5 11 9 7l-3-2-1 1c-2-1-3-2-3-3l1-1-2-2H8Z"/>'); });
const developer = document.querySelector('#developer-link');
if (/^https?:\/\//i.test(SITE_CONFIG.developerUrl)) {
  developer.href = SITE_CONFIG.developerUrl;
  developer.target = '_blank';
  developer.rel = 'noopener noreferrer';
}
/* Detalhes e galeria: dialog nativo fornece foco contido e Escape. */
let returnFocus;
function openDialog(dialog, trigger) {
  returnFocus = trigger || document.activeElement;
  dialog.showModal();
  document.body.style.overflow = 'hidden';
}
document.querySelectorAll('dialog').forEach(dialog => {
  dialog.querySelector('[data-close]').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    const rect = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
  });
  dialog.addEventListener('close', () => { document.body.style.overflow = ''; returnFocus?.focus(); });
});
const detailDialog = document.querySelector('#detail-dialog');
function openProject(key, trigger) {
  const card = document.querySelector(`.project-card [data-project="${key}"]`).closest('.project-card');
  const name = card.querySelector('h3').textContent;
  document.querySelector('#detail-title').textContent = name;
  document.querySelector('#detail-location').textContent = card.querySelector('.location').textContent;
  document.querySelector('#detail-description').textContent = card.querySelector('.project-content > p:not(.location)').textContent;
  document.querySelector('#detail-note').hidden = false;
  document.querySelector('#detail-note').textContent = 'Converse com nossa equipe para conhecer disponibilidade e mais informações sobre o projeto.';
  document.querySelector('#detail-contact').href = whatsappUrl(`${SITE_CONFIG.message} Tenho interesse no ${name}.`);
  openDialog(detailDialog, trigger);
}
document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => openProject(button.dataset.project, button)));
document.querySelector('#history-button').addEventListener('click', event => {
  document.querySelector('#detail-title').textContent = 'Construímos muito mais que imóveis.';
  document.querySelector('#detail-location').textContent = 'Taquaral Empreendimentos · São João Evangelista - MG';
  document.querySelector('#detail-description').textContent = document.querySelector('.about-copy > p:not(.eyebrow)').textContent;
  document.querySelector('#detail-note').textContent = 'Converse com nossa equipe para conhecer mais sobre nossa trajetória e nossos projetos.';
  document.querySelector('#detail-contact').href = whatsappUrl();
  openDialog(detailDialog, event.currentTarget);
});
const gallery = document.querySelector('#gallery-dialog');
const galleryImage = document.querySelector('#gallery-image');
const workImages = [...document.querySelectorAll('.work-item img')];
let workIndex = 0;
function showWork(index) {
  workIndex = (index + workImages.length) % workImages.length;
  const source = workImages[workIndex];
  galleryImage.classList.remove('loaded', 'failed');
  galleryImage.src = source.getAttribute('src');
  galleryImage.alt = source.alt;
  document.querySelector('#gallery-placeholder').textContent = `Obra ${String(workIndex + 1).padStart(2, '0')} — imagem em breve`;
  document.querySelector('#gallery-counter').textContent = `Foto ${workIndex + 1} de ${workImages.length}`;
}
function openGallery(index, trigger) { showWork(index); openDialog(gallery, trigger); }
document.querySelectorAll('[data-work]').forEach(button => button.addEventListener('click', () => openGallery(Number(button.dataset.work), button)));
document.querySelector('#all-works').addEventListener('click', event => openGallery(0, event.currentTarget));
document.querySelector('#gallery-prev').addEventListener('click', () => showWork(workIndex - 1));
document.querySelector('#gallery-next').addEventListener('click', () => showWork(workIndex + 1));
gallery.addEventListener('keydown', event => {
  if (event.key === 'ArrowLeft') { event.preventDefault(); showWork(workIndex - 1); }
  if (event.key === 'ArrowRight') { event.preventDefault(); showWork(workIndex + 1); }
});
/* Conteúdo permanece visível se JavaScript ou IntersectionObserver não estiver disponível. */
const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
if ('IntersectionObserver' in window && !motionQuery.matches) {
  document.documentElement.classList.add('motion-ready');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal,.reveal-left,.reveal-right,.reveal-up').forEach(el => observer.observe(el));
  motionQuery.addEventListener('change', event => { if (event.matches) { document.documentElement.classList.remove('motion-ready'); observer.disconnect(); } });
}


