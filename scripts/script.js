// ---------- NAVBAR ----------
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
}, {passive:true});

// ---------- MOBILE MENU ----------
const burgerBtn = document.getElementById('burgerBtn');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenu = document.getElementById('closeMenu');
burgerBtn.addEventListener('click', () => mobileMenu.classList.add('open'));
closeMenu.addEventListener('click', () => mobileMenu.classList.remove('open'));
mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileMenu.classList.remove('open')));

// ---------- SCROLL REVEAL ----------
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      revealObserver.unobserve(entry.target);
    }
  });
}, {threshold:0.15});
revealEls.forEach(el => revealObserver.observe(el));

// ---------- COUNTER ANIMATION ----------
const counters = document.querySelectorAll('[data-count]');
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = parseInt(el.dataset.count, 10);
      const suffix = el.dataset.suffix || '';
      const duration = 1600;
      const start = performance.now();
      function tick(now){
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(eased * target) + (progress >= 1 ? suffix : '');
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
      counterObserver.unobserve(el);
    }
  });
}, {threshold:0.4});
counters.forEach(el => counterObserver.observe(el));

// ---------- GALLERY FILTER ----------
const filterBtns = document.querySelectorAll('.gfilter');
const galleryItems = document.querySelectorAll('.gallery-item');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    galleryItems.forEach(item => {
      item.style.display = (filter === 'all' || item.dataset.cat === filter) ? '' : 'none';
    });
  });
});

// ---------- LIGHTBOX ----------
const lightbox = document.getElementById('lightbox');
const lbImg = document.getElementById('lbImg');
const galleryImgs = Array.from(document.querySelectorAll('.gallery-item img'));
let lbIndex = 0;
function openLightbox(i){
  lbIndex = i;
  lbImg.src = galleryImgs[i].src;
  lbImg.alt = galleryImgs[i].alt;
  lightbox.classList.add('open');
}
galleryImgs.forEach((img, i) => img.parentElement.addEventListener('click', () => openLightbox(i)));
document.getElementById('lbClose').addEventListener('click', () => lightbox.classList.remove('open'));
document.getElementById('lbNext').addEventListener('click', () => openLightbox((lbIndex + 1) % galleryImgs.length));
document.getElementById('lbPrev').addEventListener('click', () => openLightbox((lbIndex - 1 + galleryImgs.length) % galleryImgs.length));
lightbox.addEventListener('click', (e) => { if (e.target === lightbox) lightbox.classList.remove('open'); });
document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('open')) return;
  if (e.key === 'Escape') lightbox.classList.remove('open');
  if (e.key === 'ArrowRight') openLightbox((lbIndex + 1) % galleryImgs.length);
  if (e.key === 'ArrowLeft') openLightbox((lbIndex - 1 + galleryImgs.length) % galleryImgs.length);
});

// ---------- TESTIMONIAL CAROUSEL ----------
const tSlides = document.getElementById('tSlides');
const slideCount = tSlides.children.length;
let tIndex = 0;
function updateCarousel(){ tSlides.style.transform = `translateX(-${tIndex * 100}%)`; }
document.getElementById('tNext').addEventListener('click', () => { tIndex = (tIndex + 1) % slideCount; updateCarousel(); });
document.getElementById('tPrev').addEventListener('click', () => { tIndex = (tIndex - 1 + slideCount) % slideCount; updateCarousel(); });
let tAuto = setInterval(() => { tIndex = (tIndex + 1) % slideCount; updateCarousel(); }, 6000);
document.querySelector('.t-carousel').addEventListener('mouseenter', () => clearInterval(tAuto));

// ---------- FAQ ACCORDION ----------
document.querySelectorAll('.faq-item').forEach(item => {
  const q = item.querySelector('.faq-q');
  const a = item.querySelector('.faq-a');
  if (item.classList.contains('open')) a.style.maxHeight = a.scrollHeight + 'px';
  q.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => { i.classList.remove('open'); i.querySelector('.faq-a').style.maxHeight = 0; });
    if (!isOpen){ item.classList.add('open'); a.style.maxHeight = a.scrollHeight + 'px'; }
  });
});

// ---------- CONTACT FORM ----------
document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  document.getElementById('formSuccess').classList.add('show');
  // this.reset();
});



// ---------- FOOTER YEAR ----------
document.getElementById('year').textContent = new Date().getFullYear();
