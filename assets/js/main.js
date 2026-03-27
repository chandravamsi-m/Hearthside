/**
 * main.js — Simplified Hearthside Scripts
 * Core Logic: Navbar, Dark Mode, and Reveal Animations.
 */
'use strict';

// Hearthside Core Architecture (Static-First)

const DarkMode = {
  apply: (t) => {
    document.documentElement.classList.toggle('dark', t === 'dark');
    localStorage.setItem('hs-theme', t);
    document.querySelectorAll('[data-dark-toggle]').forEach(b => {
      b.innerHTML = t === 'dark' 
        ? `<i data-lucide="sun" class="w-5 h-5"></i>`
        : `<i data-lucide="moon" class="w-5 h-5"></i>`;
    });
    if (window.lucide) lucide.createIcons();
  },
  init: () => {
    const saved = localStorage.getItem('hs-theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    DarkMode.apply(saved);
    document.addEventListener('click', e => {
      if (e.target.closest('[data-dark-toggle]')) {
        DarkMode.apply(document.documentElement.classList.contains('dark') ? 'light' : 'dark');
      }
    });
  }
};

const Navbar = {
  init: () => {
    const n = document.querySelector('[data-navbar]'), h = document.querySelector('[data-nav-hamburger]'), 
          m = document.querySelector('[data-nav-mobile]'), c = document.querySelector('[data-nav-close]'),
          o = document.querySelector('[data-nav-overlay]');
    
    const toggle = (v) => {
      m?.classList.toggle('translate-x-full', !v);
      o?.classList.toggle('opacity-0', !v);
      o?.classList.toggle('pointer-events-none', !v);
      document.body.style.overflow = v ? 'hidden' : '';
    };
    [h, c, o].forEach(b => b?.addEventListener('click', () => toggle(b === h)));

    // Scroll Transition for Transparent Navbar
    const brand = document.querySelector('[data-nav-brand]');
    const logo = document.querySelector('[data-nav-logo]');
    const links = document.querySelectorAll('[data-nav-link]');
    const btnSecondary = document.querySelector('[data-nav-btn="secondary"]');
    const btnPrimary = document.querySelector('[data-nav-btn="primary"]');

    const updateNavbar = () => {
      const isScrolled = window.scrollY > 50;
      const isDynamic = n?.dataset.navDynamic === 'true';
      
      // Navbar Base
      n?.classList.toggle('bg-white', isScrolled); 
      n?.classList.toggle('dark:bg-ash', isScrolled);
      n?.classList.remove('backdrop-blur-md', 'backdrop-blur-sm', 'backdrop-blur'); 
      n?.classList.toggle('border-ink/8', isScrolled);
      n?.classList.toggle('dark:border-parchment/8', isScrolled);
      n?.classList.toggle('shadow-md', isScrolled);
      
      // Brand & Logo
      if (brand) {
        brand.classList.toggle('text-white', !isScrolled && !isDynamic);
        brand.classList.toggle('text-text-headline', isScrolled || (isDynamic && !isScrolled));
      }

      links.forEach(link => {
        link.classList.toggle('text-white', !isScrolled && !isDynamic);
        link.classList.remove('text-white/70', 'text-parchment/50', 'text-parchment/60'); 
        link.classList.toggle('text-text-body', isScrolled || (isDynamic && !isScrolled));
        link.classList.toggle('hover:text-white', !isScrolled && !isDynamic);
        link.classList.toggle('hover:text-brass', isScrolled || (isDynamic && !isScrolled));
      });

      // Buttons
      if (btnSecondary) {
        btnSecondary.classList.toggle('border-white/50', !isScrolled && !isDynamic);
        btnSecondary.classList.toggle('text-white', !isScrolled && !isDynamic);
        btnSecondary.classList.toggle('hover:bg-white', !isScrolled && !isDynamic);
        btnSecondary.classList.toggle('hover:text-ink', !isScrolled && !isDynamic);

        btnSecondary.classList.toggle('border-ink/30', isScrolled || (isDynamic && !isScrolled));
        btnSecondary.classList.toggle('text-text-body', isScrolled || (isDynamic && !isScrolled));
        btnSecondary.classList.toggle('hover:bg-ink', isScrolled || (isDynamic && !isScrolled));
        btnSecondary.classList.toggle('hover:text-white', isScrolled || (isDynamic && !isScrolled));
      }
    };

    window.addEventListener('scroll', updateNavbar);
    updateNavbar(); // Trigger on init
    
    // Dropdown Logic
    document.querySelectorAll('[data-dropdown]').forEach(d => {
      const menu = d.querySelector('[data-dropdown-menu]');
      d.onmouseenter = () => menu?.classList.remove('hidden', 'opacity-0', 'invisible');
      d.onmouseleave = () => menu?.classList.add('hidden', 'opacity-0', 'invisible');
    });

    // Robust Active Link Highlighting
    const cur = decodeURIComponent(window.location.pathname);
    
    document.querySelectorAll('nav a, aside a, [data-dropdown] button').forEach(el => {
      // Skip branding/logo
      if (el.classList.contains('font-display') && (el.classList.contains('text-2xl') || el.classList.contains('text-3xl'))) return;

      const href = el.getAttribute('href');
      const text = el.textContent.trim().toLowerCase();
      
      let active = false;
      if (href && href !== '#' && href !== 'javascript:void(0)') {
        const linkPath = decodeURIComponent(new URL(el.href).pathname);
        // Strict match for path
        if (cur === linkPath) active = true;
      } else if (text === 'home' && (cur.endsWith('index.html') || cur.endsWith('/'))) {
        active = true;
      }

      if (active) {
        el.classList.add('!text-accent', 'font-bold');
        // Highlight parent dropdown if exists
        const parent = el.closest('[data-dropdown]')?.querySelector('button');
        if (parent) parent.classList.add('!text-accent', 'font-bold');
      }
    });
  }
};

const ScrollReveal = {
  init: () => {
    const obs = new IntersectionObserver((es) => es.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('is-visible'); obs.unobserve(e.target); }
    }), { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
  }
};

// Lite Tabs/Modals (Combined Toggle)
const UI = {
  init: () => {
    document.querySelectorAll('[data-toggle]').forEach(b => b.onclick = () => {
      const target = document.getElementById(b.dataset.toggle);
      target?.classList.toggle('hidden');
    });

    // Offer Banner Dismissal
    document.querySelectorAll('[data-offer-dismiss]').forEach(b => b.onclick = () => {
      b.closest('[data-offer-banner]')?.classList.add('hidden');
    });
  }
};

const FadeSlider = {
  init() {
    document.querySelectorAll('[data-fade-slider]').forEach(slider => {
      const slides = slider.querySelectorAll('[data-slide]');
      const dots = slider.querySelectorAll('[data-dot]');
      const prevBtn = slider.querySelector('[data-prev]');
      const nextBtn = slider.querySelector('[data-next]');
      let cur = 0;
      const interval = parseInt(slider.dataset.interval) || 5000;
      let timer;

      const show = (idx) => {
        cur = (idx + slides.length) % slides.length;
        slides.forEach((s, i) => {
          s.classList.toggle('opacity-100', i === cur);
          s.classList.toggle('opacity-0', i !== cur);
          s.classList.toggle('pointer-events-none', i !== cur);
          s.style.zIndex = i === cur ? 10 : 0;
        });
        dots.forEach((d, i) => {
          d.classList.toggle('w-12', i === cur);
          d.classList.toggle('w-6', i !== cur);
          d.classList.toggle('bg-brass', i === cur);
          d.classList.toggle('bg-ink/10', i !== cur);
          d.classList.toggle('dark:bg-parchment/10', i !== cur);
        });
      };

      const start = () => {
        clearInterval(timer);
        timer = setInterval(() => show(cur + 1), interval);
      };

      const stop = () => clearInterval(timer);

      // Controls
      if (prevBtn) prevBtn.onclick = () => { stop(); show(cur - 1); start(); };
      if (nextBtn) nextBtn.onclick = () => { stop(); show(cur + 1); start(); };
      
      dots.forEach((d, i) => d.onclick = () => {
        stop();
        show(i);
        start();
      });

      // Pause on hover
      slider.onmouseenter = stop;
      slider.onmouseleave = start;

      show(0);
      start();
    });
  }
};

const RTLManager = {
  init() {
    const dir = localStorage.getItem('hearthside-dir') || 'ltr';
    this.apply(dir);
    document.addEventListener('click', e => {
      if (e.target.closest('[data-rtl-toggle]')) {
        const newDir = document.documentElement.dir === 'rtl' ? 'ltr' : 'rtl';
        this.apply(newDir);
      }
    });
  },
  apply(dir) {
    document.documentElement.dir = dir;
    localStorage.setItem('hearthside-dir', dir);
    document.querySelectorAll('[data-rtl-label]').forEach(el => {
      el.textContent = dir === 'rtl' ? 'LTR' : 'RTL';
    });
  }
};

const Accordion = {
  init() {
    document.querySelectorAll('[data-accordion-trigger]').forEach(btn => {
      btn.onclick = () => {
        const target = document.getElementById(btn.getAttribute('aria-controls'));
        const expanded = btn.getAttribute('aria-expanded') === 'true';
        
        btn.setAttribute('aria-expanded', !expanded);
        if (target) {
          target.style.maxHeight = !expanded ? `${target.scrollHeight}px` : '0px';
          target.style.opacity = !expanded ? '1' : '0';
        }

        const icon = btn.querySelector('[data-accordion-icon]');
        if (icon) icon.style.transform = !expanded ? 'rotate(180deg)' : 'rotate(0deg)';
      };
    });
  }
};

document.addEventListener('DOMContentLoaded', () => {
  DarkMode.init();
  Navbar.init();
  RTLManager.init();
  ScrollReveal.init();
  UI.init();
  FadeSlider.init();
  Accordion.init();
  if (window.lucide) lucide.createIcons();
});
