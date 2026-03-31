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
      // Toggle using a single class, let CSS [dir="rtl"] handle the direction
      m?.classList.toggle('translate-x-full', !v);
      o?.classList.toggle('opacity-0', !v);
      o?.classList.toggle('pointer-events-none', !v);
      document.body.style.overflow = v ? 'hidden' : '';
    };
    h?.addEventListener('click', () => toggle(true));
    c?.addEventListener('click', () => toggle(false));
    o?.addEventListener('click', () => toggle(false));

    // Mobile Accordion Logic
    m?.querySelectorAll('[data-mobile-dropdown]').forEach(btn => {
      btn.addEventListener('click', () => {
        const content = btn.nextElementSibling;
        const icon = btn.querySelector('[data-lucide="chevron-down"]');
        const isOpen = !content.classList.contains('hidden');
        
        // Toggle
        if (content.classList.contains('hidden')) {
           content.classList.remove('hidden');
           if (icon) icon.style.transform = 'rotate(180deg)';
        } else {
           content.classList.add('hidden');
           if (icon) icon.style.transform = 'rotate(0deg)';
        }
      });
    });

    // Scroll Transition for Transparent Navbar
    const brand = document.querySelector('[data-nav-brand]');
    const logo = document.querySelector('[data-nav-logo]');
    // FIX: Exclude mobile menu links from dynamic scroll styling
    const links = document.querySelectorAll('[data-nav-link]:not([data-nav-mobile] *)');
    const btnSecondary = document.querySelector('[data-nav-btn="secondary"]');
    const btnPrimary = document.querySelector('[data-nav-btn="primary"]');

    const updateNavbar = () => {
      const isScrolled = window.scrollY > 50;
      const isDynamic = n?.dataset.navDynamic === 'true';
      const isLightHero = n?.dataset.navLightHero === 'true';
      
      // Use White Text logic: Only when at the top AND on a dynamic (hero) page AND not a light-bg hero
      const useWhiteText = isDynamic && !isScrolled && !isLightHero;

      // Navbar Background & Border Logic
      if (isDynamic) {
        // Dynamic Page (Hero): Transparent at top, Solid on scroll
        n?.classList.toggle('bg-white', isScrolled); 
        n?.classList.toggle('dark:bg-bg-panel', isScrolled);
        n?.classList.toggle('border-transparent', !isScrolled);
        n?.classList.toggle('border-ink/8', isScrolled);
        n?.classList.toggle('dark:border-parchment/8', isScrolled);
        n?.classList.toggle('shadow-md', isScrolled);
        n?.classList.toggle('backdrop-blur-md', isScrolled);
      } else {
        // Standard Page: Always solid with consistent background
        n?.classList.add('bg-white', 'dark:bg-bg-panel', 'border-ink/8', 'dark:border-parchment/8', 'shadow-md', 'backdrop-blur-md');
        n?.classList.remove('border-transparent');
      }
      
      // Brand & Logo
      if (brand) {
        brand.classList.toggle('text-white', useWhiteText);
        brand.classList.toggle('text-text-headline', !useWhiteText);
      }

      links.forEach(link => {
        link.classList.toggle('text-white', useWhiteText);
        link.classList.remove('text-white/70', 'text-parchment/50', 'text-parchment/60'); 
        link.classList.toggle('text-text-body', !useWhiteText);
        link.classList.toggle('hover:text-white', useWhiteText);
        link.classList.toggle('hover:text-brass', !useWhiteText);
      });

      // Buttons
      if (btnSecondary) {
        btnSecondary.classList.toggle('border-white/50', useWhiteText);
        btnSecondary.classList.toggle('text-white', useWhiteText);
        btnSecondary.classList.toggle('hover:bg-white', useWhiteText);
        btnSecondary.classList.toggle('hover:text-ink', useWhiteText);

        btnSecondary.classList.toggle('border-ink/30', !useWhiteText);
        btnSecondary.classList.toggle('text-text-body', !useWhiteText);
        btnSecondary.classList.toggle('hover:bg-ink', !useWhiteText);
        btnSecondary.classList.toggle('hover:text-white', !useWhiteText);
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

    // Robust Active Link Highlighting (Sync both desktop and mobile)
    const cur = decodeURIComponent(window.location.pathname);
    
    document.querySelectorAll('nav a, aside a, [data-dropdown] button').forEach(el => {
      // Skip branding/logo and Action Buttons (Book Now, etc.) from active highlighting
      if (el.classList.contains('font-display')) return;
      if (el.hasAttribute('data-nav-btn')) return;

      const href = el.getAttribute('href');
      const text = el.textContent.trim().toLowerCase();
      
      let active = false;
      if (href && href !== '#' && href !== 'javascript:void(0)') {
        try {
          const linkPath = decodeURIComponent(new URL(el.href).pathname);
          if (cur === linkPath) active = true;
        } catch (e) {}
      } else if (text === 'home' && (cur.endsWith('index.html') || cur.endsWith('/'))) {
        active = true;
      }

      if (active) {
        el.classList.add('!text-accent', 'font-bold');
        
        // Highlight parent dropdown (Desktop)
        const parentDropdown = el.closest('[data-dropdown]')?.querySelector('button');
        if (parentDropdown) parentDropdown.classList.add('!text-accent', 'font-bold');

        // Highlight parent accordion (Mobile)
        const mobileParent = el.closest('.hidden')?.previousElementSibling;
        if (mobileParent && mobileParent.hasAttribute('data-mobile-dropdown')) {
          mobileParent.classList.add('!text-accent', 'font-bold');
        }
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

const PasswordToggle = {
  init() {
    document.addEventListener('click', e => {
      const btn = e.target.closest('[data-password-toggle]');
      if (!btn) return;

      const input = document.getElementById(btn.getAttribute('aria-controls'));
      if (!input) return;

      const isPassword = input.type === 'password';
      input.type = isPassword ? 'text' : 'password';
      
      btn.innerHTML = isPassword 
        ? `<i data-lucide="eye-off" class="w-4 h-4"></i>`
        : `<i data-lucide="eye" class="w-4 h-4"></i>`;
      
      if (window.lucide) lucide.createIcons();
    });
  }
};

// Global Exposure for Dynamic Content
window.DarkMode = DarkMode;
window.Navbar = Navbar;
window.ScrollReveal = ScrollReveal;
window.PasswordToggle = PasswordToggle;


document.addEventListener('DOMContentLoaded', () => {
  DarkMode.init();
  Navbar.init();
  RTLManager.init();
  ScrollReveal.init();
  UI.init();
  FadeSlider.init();
  Accordion.init();
  PasswordToggle.init();
  if (window.lucide) lucide.createIcons();
});
