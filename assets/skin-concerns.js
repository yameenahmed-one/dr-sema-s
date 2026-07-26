// ==========================================================================
// DR. SEEMA'S — SKIN CONCERNS PAGE ENGINE
// ==========================================================================

// ── CONCERN TAB SWITCHING ─────────────────────────────────────────────────
/**
 * Handles the sticky tab bar — activates the correct concern panel
 * and updates the active tab button state.
 */
function initConcernTabs() {
  const buttons = document.querySelectorAll(".sc-tab-btn");
  const panels  = document.querySelectorAll(".sc-panel");

  if (!buttons.length || !panels.length) return;

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const target = btn.dataset.concern;

      // Remove active from all buttons
      buttons.forEach(b => b.classList.remove("active"));
      // Hide all panels
      panels.forEach(p => p.classList.remove("active"));

      // Activate clicked button
      btn.classList.add("active");

      // Activate matching panel
      const activePanel = document.getElementById(target);
      if (activePanel) {
        activePanel.classList.add("active");
        // Reinitialise before/after sliders inside the newly visible panel
        initBeforeAfterSliders();
        // Scroll concern tabs area into view smoothly
        const tabsSection = document.getElementById("concern-tabs");
        if (tabsSection) {
          tabsSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    });
  });
}

// ── BEFORE / AFTER SLIDER ─────────────────────────────────────────────────
/**
 * Attaches drag + touch handlers to every .before-after-wrapper on the page.
 * Works with classes: .ba-handle, .ba-before-container, .ba-handle-circle
 * Only visible wrappers are initialised to avoid ghost listeners.
 */
function initBeforeAfterSliders() {
  const wrappers = document.querySelectorAll(".before-after-wrapper");

  wrappers.forEach(wrapper => {
    const handle   = wrapper.querySelector(".ba-handle");
    const beforeEl = wrapper.querySelector(".ba-before-container");
    if (!handle || !beforeEl) return;

    let dragging = false;

    function getPercent(clientX) {
      const rect  = wrapper.getBoundingClientRect();
      const x     = clientX - rect.left;
      const pct   = Math.min(Math.max((x / rect.width) * 100, 2), 98);
      return pct;
    }

    function applyPercent(pct) {
      beforeEl.style.width = pct + "%";
      handle.style.left    = pct + "%";
    }

    // Initialise at 50%
    applyPercent(50);

    // Mouse events
    handle.addEventListener("mousedown", e => {
      e.preventDefault();
      dragging = true;
    });

    document.addEventListener("mousemove", e => {
      if (!dragging) return;
      applyPercent(getPercent(e.clientX));
    });

    document.addEventListener("mouseup", () => {
      dragging = false;
    });

    // Touch events
    handle.addEventListener("touchstart", e => {
      e.preventDefault();
      dragging = true;
    }, { passive: false });

    document.addEventListener("touchmove", e => {
      if (!dragging) return;
      applyPercent(getPercent(e.touches[0].clientX));
    }, { passive: true });

    document.addEventListener("touchend", () => {
      dragging = false;
    });
  });
}

// ── FAQ ACCORDION ─────────────────────────────────────────────────────────
/**
 * Toggles .sc-faq-a open/close on .sc-faq-q button click.
 * Closes all other items when one opens (accordion behaviour).
 */
function initFAQs() {
  const questions = document.querySelectorAll(".sc-faq-q");
  if (!questions.length) return;

  questions.forEach(question => {
    question.addEventListener("click", () => {
      const answer     = question.nextElementSibling;
      const isOpen     = question.classList.contains("open");

      // Close all
      questions.forEach(q => {
        q.classList.remove("open");
        const a = q.nextElementSibling;
        if (a) a.classList.remove("open");
      });

      // If it wasn't open, open it
      if (!isOpen && answer) {
        question.classList.add("open");
        answer.classList.add("open");
      }
    });
  });
}

// ── SCROLL REVEAL ─────────────────────────────────────────────────────────
/**
 * IntersectionObserver that adds .animated-in to reveal elements
 * when they scroll into the viewport — matches global CSS animation classes.
 */
function initScrollReveal() {
  const revealEls = document.querySelectorAll(
    ".reveal-on-scroll, .reveal-fade-left, .reveal-fade-right, .reveal-scale"
  );
  if (!revealEls.length) return;

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animated-in");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.10 }
  );

  revealEls.forEach(el => observer.observe(el));
}

// ── HEADER SCROLL CLASS ───────────────────────────────────────────────────
/**
 * Adds .scrolled class to #main-header after 60px scroll —
 * triggers compact header styles defined in global CSS.
 */
function initHeaderScroll() {
  const header = document.getElementById("main-header");
  if (!header) return;

  const onScroll = () => {
    header.classList.toggle("scrolled", window.scrollY > 60);
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll(); // run on load
}

// ── DRAWERS (cart, search, quickview, mobile nav) ─────────────────────────
/**
 * Wire up all drawer open/close triggers.
 * Mirrors the pattern used in collections.js and about.html.
 */
function initDrawers() {
  const backdrop       = document.getElementById("cart-backdrop");
  const cartDrawer     = document.getElementById("cart-drawer");
  const cartTriggers   = document.querySelectorAll(".cart-trigger-btn");
  const cartClose      = document.querySelector(".cart-close-btn");
  const searchOverlay  = document.getElementById("search-overlay");
  const searchTriggers = document.querySelectorAll(".search-trigger-btn");
  const searchClose    = document.querySelector(".search-close-btn");
  const quickviewModal = document.getElementById("quickview-modal");
  const quickviewClose = document.querySelector(".quickview-close-btn");

  function openDrawer(el) {
    el && el.classList.add("active");
    backdrop && backdrop.classList.add("active");
  }

  function closeAll() {
    [cartDrawer, searchOverlay, quickviewModal].forEach(el =>
      el && el.classList.remove("active")
    );
    backdrop && backdrop.classList.remove("active");
  }

  cartTriggers.forEach(b => b.addEventListener("click", () => openDrawer(cartDrawer)));
  cartClose  && cartClose.addEventListener("click", closeAll);
  searchTriggers.forEach(b => b.addEventListener("click", () => openDrawer(searchOverlay)));
  searchClose  && searchClose.addEventListener("click", closeAll);
  quickviewClose && quickviewClose.addEventListener("click", closeAll);
  backdrop && backdrop.addEventListener("click", closeAll);
}

// ── NEWSLETTER FORM ───────────────────────────────────────────────────────
/**
 * Handles newsletter subscription form submission.
 * Delegates toast notification to the global showToast utility.
 */
function initNewsletter() {
  const form = document.getElementById("newsletter-form");
  if (!form) return;

  form.addEventListener("submit", e => {
    e.preventDefault();
    const input = form.querySelector("input[type='email']");
    if (input && input.value) {
      typeof showToast === "function" &&
        showToast("Welcome to Club Seema! Check your inbox for your 15% discount.");
      input.value = "";
    }
  });
}

// ── HASH ROUTING ──────────────────────────────────────────────────────────
/**
 * Reads the URL hash on page load (e.g. /skin-concerns#acne)
 * and activates the matching concern tab programmatically.
 */
function initHashRouting() {
  const hash = window.location.hash.replace("#", "").trim();
  if (!hash) return;

  const targetBtn = document.querySelector(`.sc-tab-btn[data-concern="${hash}"]`);
  if (targetBtn) {
    // Small delay ensures the DOM is fully painted before triggering
    setTimeout(() => {
      targetBtn.click();
    }, 120);
  }
}

// ── PRODUCT ADD-TO-CART (page-level) ─────────────────────────────────────
/**
 * Forwards add-to-cart calls to the global cart system loaded by index-Db8R-LCH.js.
 * Provides a graceful fallback toast if the global system isn't ready.
 * @param {string} id    - Product ID (e.g. 'p1')
 * @param {string} name  - Product name
 * @param {number} price - Price in PKR
 * @param {string} img   - Image path
 */
function addToCart(id, name, price, img) {
  if (typeof window.addToCartGlobal === "function") {
    window.addToCartGlobal(id, name, price, img);
  } else if (typeof showToast === "function") {
    showToast(`${name} added to bag!`);
    // Update badge counts
    document.querySelectorAll(".cart-badge-count").forEach(el => {
      el.textContent = parseInt(el.textContent || "0") + 1;
    });
  }
}
window.addToCart = addToCart;

// ── INIT ──────────────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  initConcernTabs();
  initBeforeAfterSliders();
  initFAQs();
  initScrollReveal();
  initHeaderScroll();
  initDrawers();
  initNewsletter();
  initHashRouting();
});
