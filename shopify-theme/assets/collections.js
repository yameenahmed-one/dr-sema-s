// ==========================================================================
// DR. SEMA'S — COLLECTIONS PAGE ENGINE
// ==========================================================================

const COLLECTIONS_DATA = [
  {
    id: "col-new",
    name: "New Arrivals",
    filterKey: "serums",
    desc: "The latest clinical breakthroughs — bio-retinol, multi-peptide complexes, and barrier restoration.",
    count: 6,
    img: "/assets/hero_skincare_bottle_1784829018079-DS2qkswC.jpg",
    tag: "NEW"
  },
  {
    id: "col-bestsellers",
    name: "Best Sellers",
    filterKey: "all",
    desc: "Our most acclaimed dermatologist-formulated clinical treatments loved by thousands across Pakistan.",
    count: 8,
    img: "/assets/botanical_serum_1784829065095-CWvF2yY0.jpg",
    tag: "BESTSELLER"
  },
  {
    id: "col-vitaminc",
    name: "Vitamin C Radiance",
    filterKey: "pigmentation",
    desc: "15% L-Ascorbic Acid and Ferulic Acid concentrates designed to erase hyperpigmentation and reveal natural glow.",
    count: 4,
    img: "/assets/skin_glowing_portrait_1784829050112-BE8ZFnY9.jpg",
    tag: "CLINICAL PICK"
  },
  {
    id: "col-acne",
    name: "Acne Care & BHA",
    filterKey: "serums",
    desc: "Targeted 2% Salicylic Acid gels and Zinc cleansers engineered to clear active breakouts and unclog pores.",
    count: 5,
    img: "/assets/luxury_cream_jar_1784829034543-DzFwA63r.jpg",
    tag: ""
  },
  {
    id: "col-pigmentation",
    name: "Pigmentation & Dark Spots",
    filterKey: "pigmentation",
    desc: "10% Niacinamide and Alpha Arbutin serums for correcting melasma, sun spots, and uneven tone.",
    count: 4,
    img: "/assets/botanical_serum_1784829065095-CWvF2yY0.jpg",
    tag: "CLINICAL PICK"
  },
  {
    id: "col-antiaging",
    name: "Anti-Aging & Cellular Renewal",
    filterKey: "antiaging",
    desc: "Bio-Retinol complexes and Quad-Peptide formulations that smooth fine lines and restore skin elasticity.",
    count: 6,
    img: "/assets/hero_skincare_bottle_1784829018079-DS2qkswC.jpg",
    tag: "BESTSELLER"
  },
  {
    id: "col-hydration",
    name: "72-Hour Hydration Barrier",
    filterKey: "hydration",
    desc: "Ceramide NP balms and triple Hyaluronic Acid drops providing multi-depth moisture surge.",
    count: 5,
    img: "/assets/skin_glowing_portrait_1784829050112-BE8ZFnY9.jpg",
    tag: ""
  },
  {
    id: "col-sensitive",
    name: "Sensitive & Rosacea Relief",
    filterKey: "sensitive",
    desc: "Colloidal oat, Centella, and green tea extract remedies engineered for delicate, reactive skin.",
    count: 4,
    img: "/assets/luxury_cream_jar_1784829034543-DzFwA63r.jpg",
    tag: ""
  },
  {
    id: "col-essentials",
    name: "Daily Clinical Essentials",
    filterKey: "hydration",
    desc: "pH-balanced gentle gel cleansers and protective daily hydrators for everyday skin health.",
    count: 6,
    img: "/assets/hero_skincare_bottle_1784829018079-DS2qkswC.jpg",
    tag: "NEW"
  },
  {
    id: "col-sun",
    name: "Sun Protection & UV Shield",
    filterKey: "sunscreen",
    desc: "100% non-nano Zinc Oxide mineral sunscreens offering SPF 50+ broad-spectrum UVA/UVB protection.",
    count: 3,
    img: "/assets/botanical_serum_1784829065095-CWvF2yY0.jpg",
    tag: "CLINICAL PICK"
  },
  {
    id: "col-night",
    name: "Night Repair & Cell Restoration",
    filterKey: "antiaging",
    desc: "Overnight barrier repair creams and potent nighttime botanical elixirs that work while you sleep.",
    count: 4,
    img: "/assets/skin_after_treatment_1784834215984-D_r22WyY.jpg",
    tag: ""
  },
  {
    id: "col-gifts",
    name: "Luxury Gift Sets & Bundles",
    filterKey: "all",
    desc: "Dermatologist-curated clinical skincare rituals packaged in signature luxury box sets.",
    count: 3,
    img: "/assets/skin_dry_barrier_before_1784834246217-CY8S9Apx.jpg",
    tag: "NEW"
  }
];

// ── RENDER COLLECTIONS GRID ──────────────────────────────────────────────
/**
 * Renders collection cards into #featured-collections-grid.
 * @param {string} filter - filterKey to show, or 'all' for all cards.
 */
function renderCollectionsGrid(filter = "all") {
  const container = document.getElementById("featured-collections-grid");
  if (!container) return;

  const items = filter === "all"
    ? COLLECTIONS_DATA
    : COLLECTIONS_DATA.filter(c => c.filterKey === filter || c.filterKey === "all");

  container.innerHTML = items.map(col => {
    const tagBadge = col.tag
      ? `<span class="coll-tag-badge">${col.tag}</span>`
      : "";

    return `
      <div class="col-xl-3 col-lg-4 col-md-6 col-12 coll-card-wrap" data-filter="${col.filterKey}">
        <div class="coll-card">
          <div class="coll-img-wrap">
            ${tagBadge}
            <span class="coll-count-pill">${col.count} Formulations</span>
            <img src="${col.img}" alt="${col.name}" loading="lazy">
          </div>
          <div class="coll-body">
            <h3 class="coll-name">${col.name}</h3>
            <p class="coll-desc">${col.desc}</p>
            <div class="coll-cta-wrap">
              <a href="/shop.html?filter=${col.filterKey}" class="coll-cta-btn">
                Explore &nbsp;<i class="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>`;
  }).join("");

  // Animate new cards in on next frame
  requestAnimationFrame(() => {
    container.querySelectorAll(".coll-card-wrap").forEach((el, i) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(22px)";
      setTimeout(() => {
        el.style.transition = "opacity .42s ease, transform .42s ease";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, i * 55);
    });
  });
}

// ── FILTER TABS ───────────────────────────────────────────────────────────
/**
 * Attaches click handlers to .col-filter-btn elements.
 */
function initFilterTabs() {
  const buttons = document.querySelectorAll(".col-filter-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      // Update active state
      buttons.forEach(b => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");

      const filter = btn.dataset.filter || "all";
      renderCollectionsGrid(filter);
    });
  });
}

// ── MINI SLIDER ───────────────────────────────────────────────────────────
/**
 * Populates the #collection-mini-slider horizontal scroll strip.
 */
function renderMiniSlider() {
  const track = document.getElementById("collection-mini-slider");
  if (!track) return;

  track.innerHTML = COLLECTIONS_DATA.map(col => `
    <a href="/shop.html?filter=${col.filterKey}" class="slider-card-mini">
      <img src="${col.img}" alt="${col.name}">
      <div>
        <div class="slider-mini-title">${col.name}</div>
        <div class="slider-mini-count">${col.count} Formulations</div>
      </div>
    </a>
  `).join("");
}

/**
 * Scrolls the mini slider track by `offset` pixels.
 * @param {number} offset - positive = right, negative = left
 */
function scrollCollectionSlider(offset) {
  const track = document.getElementById("collection-mini-slider");
  if (track) {
    track.scrollBy({ left: offset, behavior: "smooth" });
  }
}
window.scrollCollectionSlider = scrollCollectionSlider;

// ── ANIMATED COUNTERS ─────────────────────────────────────────────────────
/**
 * Uses IntersectionObserver on #stats-strip; when strip enters viewport,
 * animates each .counter-number from 0 to data-target over 1.8 s (easeOut).
 */
function initCounterAnimation() {
  const strip = document.getElementById("stats-strip");
  if (!strip) return;

  const easeOut = t => 1 - Math.pow(1 - t, 3);

  function animateCounter(el) {
    const target = parseInt(el.dataset.target, 10);
    const suffix = el.dataset.suffix || "";
    const duration = 1800; // ms
    const start = performance.now();

    function step(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const value = Math.round(easeOut(progress) * target);
      el.textContent = value + suffix;
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target + suffix;
      }
    }

    requestAnimationFrame(step);
  }

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          strip.querySelectorAll(".counter-number").forEach(el => animateCounter(el));
          observer.unobserve(strip); // run once
        }
      });
    },
    { threshold: 0.3 }
  );

  observer.observe(strip);
}

// ── SCROLL-REVEAL (page-level lightweight) ────────────────────────────────
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
    { threshold: 0.12 }
  );

  revealEls.forEach(el => observer.observe(el));
}

// ── HEADER SCROLL CLASS ───────────────────────────────────────────────────
function initHeaderScroll() {
  const header = document.getElementById("main-header");
  if (!header) return;
  const onScroll = () => {
    header.classList.toggle("scrolled", window.scrollY > 60);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

// ── CART / SEARCH DRAWER LOGIC ────────────────────────────────────────────
function initDrawers() {
  const backdrop = document.getElementById("cart-backdrop");
  const cartDrawer = document.getElementById("cart-drawer");
  const cartTriggers = document.querySelectorAll(".cart-trigger-btn");
  const cartClose = document.querySelector(".cart-close-btn");
  const searchOverlay = document.getElementById("search-overlay");
  const searchTriggers = document.querySelectorAll(".search-trigger-btn");
  const searchClose = document.querySelector(".search-close-btn");
  const quickviewModal = document.getElementById("quickview-modal");
  const quickviewClose = document.querySelector(".quickview-close-btn");

  function openDrawer(el) { el && el.classList.add("active"); backdrop && backdrop.classList.add("active"); }
  function closeAll() {
    [cartDrawer, searchOverlay, quickviewModal].forEach(el => el && el.classList.remove("active"));
    backdrop && backdrop.classList.remove("active");
  }

  cartTriggers.forEach(b => b.addEventListener("click", () => openDrawer(cartDrawer)));
  cartClose && cartClose.addEventListener("click", closeAll);
  searchTriggers.forEach(b => b.addEventListener("click", () => openDrawer(searchOverlay)));
  searchClose && searchClose.addEventListener("click", closeAll);
  quickviewClose && quickviewClose.addEventListener("click", closeAll);
  backdrop && backdrop.addEventListener("click", closeAll);
}

// ── NEWSLETTER FORM ───────────────────────────────────────────────────────
function initNewsletter() {
  const form = document.getElementById("newsletter-form");
  if (!form) return;
  form.addEventListener("submit", e => {
    e.preventDefault();
    const input = form.querySelector("input[type='email']");
    if (input && input.value) {
      showToast && showToast("Welcome to Club Sema! Check your inbox for your 15% discount.");
      input.value = "";
    }
  });
}

// ── BOOTSTRAP ────────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  renderMiniSlider();
  renderCollectionsGrid("all");
  initFilterTabs();
  initCounterAnimation();
  initScrollReveal();
  initHeaderScroll();
  initDrawers();
  initNewsletter();
});
