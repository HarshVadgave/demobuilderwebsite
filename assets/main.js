/* ============================================================
   Demo Builders — Shared JS
   - Injects site chrome (navbar, mobile menu, footer, FABs)
   - Wires all shared behaviors: reveal, counters, faq, gallery
     lightbox, gallery filters, testimonial carousel, contact
     form stub, video modal, button ripple, scroll-to-top,
     preloader, active-nav marking based on <body data-page>.
   ============================================================ */
(function(){
  'use strict';

  const PHONE      = "+917841811323";
  const PHONE_TEXT = "+91 78418 11323";
  const EMAIL      = "hello@demobuilders.example";
  const WA_URL     = "https://wa.me/917841811323?text=Hi%20Demo%20Builders%2C%20I%27d%20like%20to%20know%20more%20about%20your%20projects.";

  /* -------- SITE CHROME MARKUP -------- */
  const navHTML = `
  <header id="navbar">
    <div class="container nav-inner">
      <a href="index.html" class="logo">
        <span class="mark">
          <svg viewBox="0 0 24 24" fill="none" stroke="#071527" stroke-width="2"><path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6M9 11h.01M15 11h.01M9 15h.01M15 15h.01"/></svg>
        </span>
        Demo Builders
      </a>
      <nav class="nav-links" aria-label="Primary">
        <a href="index.html" data-nav="home">Home</a>
        <a href="about.html" data-nav="about">About</a>
        <a href="services.html" data-nav="services">Services</a>
        <a href="projects.html" data-nav="projects">Projects</a>
        <a href="gallery.html" data-nav="gallery">Gallery</a>
        <a href="testimonials.html" data-nav="testimonials">Reviews</a>
        <a href="contact.html" data-nav="contact">Contact</a>
      </nav>
      <div class="nav-cta">
        <a href="tel:${PHONE}" class="nav-call">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E8C766" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          ${PHONE_TEXT}
        </a>
        <a href="contact.html" class="btn btn-gold btn-sm">Get a Quote</a>
        <button class="burger" id="burgerBtn" aria-label="Open menu"><span></span><span></span><span></span></button>
      </div>
    </div>
  </header>
  <div class="mobile-menu" id="mobileMenu" aria-hidden="true">
    <button class="close-x" id="closeMenu" aria-label="Close menu">✕</button>
    <a href="index.html">Home</a>
    <a href="about.html">About</a>
    <a href="services.html">Services</a>
    <a href="projects.html">Projects</a>
    <a href="gallery.html">Gallery</a>
    <a href="testimonials.html">Reviews</a>
    <a href="contact.html">Contact</a>
    <a href="contact.html" class="btn btn-gold" style="margin-top:10px;">Get a Quote</a>
  </div>`;

  const footerHTML = `
  <footer>
    <div class="container footer-grid">
      <div class="footer-brand">
        <a href="index.html" class="logo">
          <span class="mark"><svg viewBox="0 0 24 24" fill="none" stroke="#071527" stroke-width="2"><path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6M9 11h.01M15 11h.01M9 15h.01M15 15h.01"/></svg></span>
          Demo Builders
        </a>
        <p>Premium residential, commercial &amp; infrastructure development. Building trust and creating landmarks since 2005.</p>
        <div class="foot-social">
          <a href="#" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
          <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg></a>
          <a href="#" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></a>
          <a href="#" aria-label="YouTube"><svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.92 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48"/></svg></a>
        </div>
      </div>
      <div>
        <h4>Quick Links</h4>
        <ul>
          <li><a href="about.html">About Us</a></li>
          <li><a href="projects.html">Projects</a></li>
          <li><a href="gallery.html">Gallery</a></li>
          <li><a href="testimonials.html">Reviews</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>
      <div>
        <h4>Services</h4>
        <ul>
          <li><a href="services.html">Residential Construction</a></li>
          <li><a href="services.html">Commercial Construction</a></li>
          <li><a href="services.html">Interior Design</a></li>
          <li><a href="services.html">Renovation</a></li>
          <li><a href="services.html">Project Management</a></li>
        </ul>
      </div>
      <div>
        <h4>Newsletter</h4>
        <ul class="foot-contact">
          <li><svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg><span>Barafpada, Virar East, Vasai-Virar 401305</span></li>
          <li><svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg><span>${PHONE_TEXT}</span></li>
          <li><svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M22 6l-10 7L2 6"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg><span>${EMAIL}</span></li>
        </ul>
        <form class="newsletter" id="newsletterForm" aria-label="Subscribe to newsletter">
          <input type="email" required placeholder="Your email">
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
    <div class="container foot-bottom">
      <span>© <span id="year"></span> Demo Builders. All rights reserved.</span>
      <span><a href="privacy.html">Privacy Policy</a> &nbsp;·&nbsp; <a href="terms.html">Terms of Service</a></span>
    </div>
  </footer>`;

  const fabsHTML = `
  <div class="float-btns">
    <button class="fab fab-top" id="fabTop" aria-label="Back to top">
      <svg viewBox="0 0 24 24" fill="none" stroke-width="2.4"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
    </button>
    <a class="fab fab-call" href="tel:${PHONE}" aria-label="Call us">
      <svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
    </a>
    <a class="fab fab-whatsapp" href="${WA_URL}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
      <span class="fab-pulse"></span>
      <svg viewBox="0 0 24 24"><path d="M17.6 6.3A8.86 8.86 0 0 0 12.04 4C7.6 4 4 7.6 4 12.04c0 1.55.43 3 1.18 4.24L4 21l4.86-1.13a8.83 8.83 0 0 0 3.18.6h.01c4.43 0 8.04-3.6 8.04-8.04 0-2.15-.84-4.17-2.49-5.85zm-5.56 12.4h-.01a7.4 7.4 0 0 1-3.77-1.03l-.27-.16-2.8.65.65-2.73-.18-.28a7.36 7.36 0 0 1-1.13-3.95c0-4.07 3.32-7.39 7.4-7.39 1.97 0 3.83.77 5.22 2.17a7.32 7.32 0 0 1 2.17 5.23c0 4.08-3.32 7.4-7.28 7.4zm4.05-5.54c-.22-.11-1.3-.64-1.5-.71-.2-.07-.35-.11-.5.11-.15.22-.57.71-.7.86-.13.14-.26.16-.48.05-.22-.11-1.27-.47-2.41-1.49-.89-.79-1.49-1.77-1.66-2.07-.18-.3-.02-.46.13-.61.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.2.05-.36-.03-.51-.08-.15-.61-1.47-.84-2.01-.22-.53-.45-.46-.62-.46-.16-.01-.34-.01-.53-.01-.18 0-.48.07-.74.34-.26.27-1 1-1 2.4 0 1.41 1.02 2.78 1.16 2.97.14.19 1.96 3 4.76 4.08 2.8 1.09 2.8.73 3.31.68.5-.05 1.61-.65 1.84-1.29.23-.63.23-1.17.16-1.29-.07-.12-.25-.19-.48-.3z"/></svg>
    </a>
  </div>`;

  const preloaderHTML = `<div id="preloader"><div class="loader-ring"></div></div>`;

  /* -------- INJECT CHROME -------- */
  function inject(){
    const navSlot   = document.querySelector('[data-include="nav"]');
    const footSlot  = document.querySelector('[data-include="footer"]');
    const fabSlot   = document.querySelector('[data-include="fabs"]');
    const preSlot   = document.querySelector('[data-include="preloader"]');
    if (navSlot)  navSlot.outerHTML  = navHTML;
    if (footSlot) footSlot.outerHTML = footerHTML;
    if (fabSlot)  fabSlot.outerHTML  = fabsHTML;
    if (preSlot)  preSlot.outerHTML  = preloaderHTML;
  }

  /* -------- BEHAVIORS -------- */
  function initBehaviors(){
    const page = document.body.dataset.page;

    // NAV highlighting
    document.querySelectorAll('.nav-links a[data-nav]').forEach(a => {
      if (a.dataset.nav === page) a.classList.add('active');
    });

    // Navbar scroll
    const nav = document.getElementById('navbar');
    const onScroll = () => {
      if (nav) nav.classList.toggle('scrolled', window.scrollY > 40);
      const top = document.getElementById('fabTop');
      if (top) top.classList.toggle('show', window.scrollY > 500);
    };
    window.addEventListener('scroll', onScroll, {passive:true});
    onScroll();

    // Mobile menu
    const burger = document.getElementById('burgerBtn');
    const mm = document.getElementById('mobileMenu');
    const closeM = document.getElementById('closeMenu');
    if (burger && mm){
      burger.addEventListener('click', () => mm.classList.add('open'));
      closeM.addEventListener('click', () => mm.classList.remove('open'));
      mm.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mm.classList.remove('open')));
    }

    // Back to top
    const top = document.getElementById('fabTop');
    if (top) top.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));

    // Reveal on scroll
    const revealEls = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window){
      const obs = new IntersectionObserver((entries) => {
        entries.forEach(e => { if (e.isIntersecting){ e.target.classList.add('in'); obs.unobserve(e.target); } });
      }, {threshold:0.12});
      revealEls.forEach(el => obs.observe(el));
    } else revealEls.forEach(el => el.classList.add('in'));

    // Counters
    const counters = document.querySelectorAll('[data-count]');
    if ('IntersectionObserver' in window && counters.length){
      const co = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const target = parseFloat(el.dataset.count);
          const suffix = el.dataset.suffix || '';
          const duration = 1600, start = performance.now();
          (function tick(now){
            const p = Math.min((now - start)/duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            el.textContent = Math.floor(eased * target) + (p >= 1 ? suffix : '');
            if (p < 1) requestAnimationFrame(tick);
          })(start);
          co.unobserve(el);
        });
      }, {threshold:0.4});
      counters.forEach(el => co.observe(el));
    }

    // FAQ accordion (delegated)
    document.querySelectorAll('.faq-item').forEach(item => {
      const q = item.querySelector('.faq-q'), a = item.querySelector('.faq-a');
      if (!q || !a) return;
      if (item.classList.contains('open')) a.style.maxHeight = a.scrollHeight + 'px';
      q.addEventListener('click', () => {
        const open = item.classList.contains('open');
        item.parentElement.querySelectorAll('.faq-item').forEach(i => {
          i.classList.remove('open');
          const aa = i.querySelector('.faq-a'); if (aa) aa.style.maxHeight = 0;
        });
        if (!open){ item.classList.add('open'); a.style.maxHeight = a.scrollHeight + 'px'; }
      });
    });

    // Testimonial carousel
    const tSlides = document.getElementById('tSlides');
    if (tSlides){
      let idx = 0, n = tSlides.children.length;
      const upd = () => tSlides.style.transform = `translateX(-${idx*100}%)`;
      const p = document.getElementById('tPrev'), nx = document.getElementById('tNext');
      p && p.addEventListener('click', () => { idx = (idx - 1 + n) % n; upd(); });
      nx && nx.addEventListener('click', () => { idx = (idx + 1) % n; upd(); });
      let auto = setInterval(() => { idx = (idx + 1) % n; upd(); }, 6500);
      const c = document.querySelector('.t-carousel');
      c && c.addEventListener('mouseenter', () => clearInterval(auto));
    }

    // Gallery filter + lightbox
    const gGrid = document.getElementById('galleryGrid');
    if (gGrid){
      const btns = document.querySelectorAll('.gfilter');
      const items = gGrid.querySelectorAll('.gallery-item');
      btns.forEach(b => b.addEventListener('click', () => {
        btns.forEach(x => x.classList.remove('active')); b.classList.add('active');
        const f = b.dataset.filter;
        items.forEach(i => i.style.display = (f === 'all' || i.dataset.cat === f) ? '' : 'none');
      }));

      const lb = document.getElementById('lightbox');
      if (lb){
        const lbImg = document.getElementById('lbImg');
        const imgs = Array.from(gGrid.querySelectorAll('.gallery-item img'));
        let i = 0;
        const open = k => { i = k; lbImg.src = imgs[i].src; lbImg.alt = imgs[i].alt; lb.classList.add('open'); };
        imgs.forEach((img, k) => img.parentElement.addEventListener('click', () => open(k)));
        document.getElementById('lbClose').addEventListener('click', () => lb.classList.remove('open'));
        document.getElementById('lbNext').addEventListener('click', () => open((i+1)%imgs.length));
        document.getElementById('lbPrev').addEventListener('click', () => open((i-1+imgs.length)%imgs.length));
        lb.addEventListener('click', e => { if (e.target === lb) lb.classList.remove('open'); });
        document.addEventListener('keydown', e => {
          if (!lb.classList.contains('open')) return;
          if (e.key === 'Escape') lb.classList.remove('open');
          if (e.key === 'ArrowRight') open((i+1)%imgs.length);
          if (e.key === 'ArrowLeft')  open((i-1+imgs.length)%imgs.length);
        });
      }
    }

    // Video modal (Youtube embed)
    document.querySelectorAll('[data-video]').forEach(el => {
      el.addEventListener('click', () => openVideo(el.dataset.video));
    });
    const vm = document.getElementById('videoModal');
    if (vm){
      vm.addEventListener('click', e => { if (e.target === vm) closeVideo(); });
      const c = vm.querySelector('.vm-close'); c && c.addEventListener('click', closeVideo);
      document.addEventListener('keydown', e => { if (e.key === 'Escape' && vm.classList.contains('open')) closeVideo(); });
    }
    function openVideo(id){
      if (!vm) return;
      vm.querySelector('iframe').src = `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;
      vm.classList.add('open');
    }
    function closeVideo(){
      if (!vm) return;
      vm.querySelector('iframe').src = '';
      vm.classList.remove('open');
    }

    // Contact form stub
    const cf = document.getElementById('contactForm');
    if (cf) cf.addEventListener('submit', e => {
      e.preventDefault();
      const s = document.getElementById('formSuccess');
      if (s) s.classList.add('show');
      setTimeout(() => s && s.classList.remove('show'), 5000);
    });

    // EMAILJS contact form
const form = document.getElementById("contactForm");
const success = document.getElementById("formSuccess");

if (form) {
    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const button = form.querySelector("button[type='submit']");
        button.disabled = true;
        button.textContent = "Sending...";

        try {
            await emailjs.send(
                "service_wbe6x7j",
                "template_qlc1lmb",
                {
                    name: form.name.value,
                    phone: form.phone.value,
                    email: form.email.value,
                    project_type: form.project_type.value,
                    budget: form.budget.value,
                    message: form.message.value
                }
            );

            if (success) {
                success.style.display = "block";
            }

            form.reset();

        } catch (err) {
            alert("Failed to send enquiry.");
            console.error(err);

        } finally {
            button.disabled = false;
            button.textContent = "Send Enquiry";
        }
    });
}

    // Newsletter stub
    const nf = document.getElementById('newsletterForm');
    if (nf) nf.addEventListener('submit', e => {
      e.preventDefault();
      const btn = nf.querySelector('button');
      const old = btn.textContent; btn.textContent = 'Subscribed ✓';
      nf.reset();
      setTimeout(() => btn.textContent = old, 3200);
    });

    // Enquiry form (sidebar) stub
    const ef = document.getElementById('enquiryForm');
    if (ef) ef.addEventListener('submit', e => {
      e.preventDefault();
      alert('Thank you! Our team will contact you within one business day.');
    });
//Enquiry form emailjs
const enquiryForm = document.getElementById("enquiryForm");

if (enquiryForm) {

    enquiryForm.addEventListener("submit", async (e) => {

        e.preventDefault();

        const button = enquiryForm.querySelector("button");

        button.disabled = true;
        button.textContent = "Sending...";

        try {

            await emailjs.send(
                "service_wbe6x7j",
                "template_maao5jd",
                {
                    name: enquiryForm.name.value,
                    phone: enquiryForm.phone.value,
                    email: enquiryForm.email.value,
                    project_type: "Project Details Enquiry",
                    budget: "N/A",
                    message: enquiryForm.message.value
                }
            );

            alert("Enquiry sent successfully!");

            enquiryForm.reset();

        } catch (err) {

            console.error(err);
            alert("Failed to send enquiry.");

        } finally {

            button.disabled = false;
            button.textContent = "Send Enquiry";

        }

    });

}

    // Button ripple
    document.addEventListener('click', e => {
      const b = e.target.closest('.btn'); if (!b) return;
      const r = b.getBoundingClientRect();
      const s = document.createElement('span');
      s.className = 'ripple';
      const size = Math.max(r.width, r.height);
      s.style.width = s.style.height = size + 'px';
      s.style.left = (e.clientX - r.left - size/2) + 'px';
      s.style.top  = (e.clientY - r.top  - size/2) + 'px';
      b.appendChild(s);
      setTimeout(() => s.remove(), 620);
    });

    // Progress bar fill
    document.querySelectorAll('.status-bar .fill[data-fill]').forEach(el => {
      setTimeout(() => el.style.width = el.dataset.fill + '%', 400);
    });

    // Footer year
    const y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();

    // Preloader hide
    const pre = document.getElementById('preloader');
    if (pre) setTimeout(() => pre.classList.add('done'), 350);
  }

  /* -------- BOOT -------- */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => { inject(); initBehaviors(); });
  } else { inject(); initBehaviors(); }
})();
