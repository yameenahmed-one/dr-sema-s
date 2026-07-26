// ==========================================================================
// DR. SEEMA'S PRODUCTS - DEDICATED SHOP PAGE LOGIC & DATA ENGINE
// ==========================================================================

const SHOP_PRODUCTS = [
  {
    id: "p1",
    name: "Cellular Renewal Serum",
    category: "serums",
    categoryName: "Serums & Concentrates",
    tags: ["all", "serums", "antiaging", "bestseller", "new", "hydration"],
    shortDesc: "Advanced Bio-Retinol & Niacinamide formula for cellular regeneration.",
    price: 8800,
    oldPrice: 10500,
    rating: 5,
    reviewsCount: 148,
    badges: ["DERM FAVORITE", "CLINICALLY TESTED"],
    imgPrimary: "/assets/hero_skincare_bottle_1784829018079-DS2qkswC.jpg",
    imgSecondary: "/assets/botanical_serum_1784829065095-CWvF2yY0.jpg",
    ingredients: "Bio-Retinol 2%, Niacinamide 5%, Botanical Squalane, Hyaluronic Acid Multi-Complex",
    created: 100
  },
  {
    id: "p2",
    name: "Deep Moisture Barrier Cream",
    category: "creams",
    categoryName: "Moisturizers & Creams",
    tags: ["all", "creams", "moisturizers", "hydration", "sensitive", "bestseller"],
    shortDesc: "72-Hour intensive hydration moisturizer infused with Ceramide-3 & Sacred Lotus.",
    price: 7600,
    oldPrice: null,
    rating: 4.9,
    reviewsCount: 96,
    badges: ["BEST SELLER"],
    imgPrimary: "/assets/luxury_cream_jar_1784829034543-DzFwA63r.jpg",
    imgSecondary: "/assets/skin_glowing_portrait_1784829050112-BE8ZFnY9.jpg",
    ingredients: "Ceramide NP, Sacred Lotus Extract, Meadowfoam Seed Oil, Centella Asiatica",
    created: 90
  },
  {
    id: "p3",
    name: "Vitamin C Luminous Concentrate",
    category: "serums",
    categoryName: "Serums & Concentrates",
    tags: ["all", "serums", "pigmentation", "new", "antiaging", "bestseller"],
    shortDesc: "15% Stabilized L-Ascorbic Acid with Ferulic Acid for hyperpigmentation radiance.",
    price: 9200,
    oldPrice: 11000,
    rating: 5,
    reviewsCount: 210,
    badges: ["TRENDING", "ORGANIC"],
    imgPrimary: "/assets/botanical_serum_1784829065095-CWvF2yY0.jpg",
    imgSecondary: "/assets/hero_skincare_bottle_1784829018079-DS2qkswC.jpg",
    ingredients: "15% Pure Vitamin C, 1% Vitamin E, 0.5% Ferulic Acid, Kakadu Plum Extract",
    created: 110
  },
  {
    id: "p4",
    name: "Radiant Glow Barrier Elixir",
    category: "oils",
    categoryName: "Treatment Oils",
    tags: ["all", "serums", "hydration", "sensitive", "bestseller"],
    shortDesc: "Cold-pressed botanical facial oil that restores elasticity and youthful bounce.",
    price: 8400,
    oldPrice: null,
    rating: 4.8,
    reviewsCount: 82,
    badges: ["POPULAR"],
    imgPrimary: "/assets/skin_glowing_portrait_1784829050112-BE8ZFnY9.jpg",
    imgSecondary: "/assets/luxury_cream_jar_1784829034543-DzFwA63r.jpg",
    ingredients: "Rosehip Seed Oil, Marula Oil, Evening Primrose, Golden Jojoba",
    created: 80
  },
  {
    id: "p5",
    name: "Calming Botanical Gentle Cleanser",
    category: "cleansers",
    categoryName: "Cleansers & Toners",
    tags: ["all", "cleansers", "cleanser", "sensitive", "hydration"],
    shortDesc: "pH-balanced soothing gel cleanser that removes impurities without stripping moisture.",
    price: 5200,
    oldPrice: 6200,
    rating: 4.9,
    reviewsCount: 115,
    badges: ["SENSITIVE SAFE"],
    imgPrimary: "/assets/luxury_cream_jar_1784829034543-DzFwA63r.jpg",
    imgSecondary: "/assets/botanical_serum_1784829065095-CWvF2yY0.jpg",
    ingredients: "Green Tea Water, Chamomile Extract, Oat Amino Acids, Panthenol",
    created: 70
  },
  {
    id: "p6",
    name: "Firming Peptide Eye Essence",
    category: "serums",
    categoryName: "Eye & Treatment",
    tags: ["all", "serums", "antiaging", "pigmentation"],
    shortDesc: "Quad-Peptide treatment that visibly reduces puffiness, dark circles and fine lines.",
    price: 6800,
    oldPrice: null,
    rating: 4.9,
    reviewsCount: 74,
    badges: ["DERM DEVELOPED"],
    imgPrimary: "/assets/hero_skincare_bottle_1784829018079-DS2qkswC.jpg",
    imgSecondary: "/assets/skin_glowing_portrait_1784829050112-BE8ZFnY9.jpg",
    ingredients: "Matrixyl 3000, Acetyl Tetrapeptide-5, Caffeine, Haloxyl Complex",
    created: 95
  },
  {
    id: "p7",
    name: "Invisible Shield Mineral Sunscreen SPF 50+",
    category: "sunscreen",
    categoryName: "Sun Protection",
    tags: ["all", "sunscreen", "sensitive", "new", "hydration"],
    shortDesc: "100% Non-nano Zinc Oxide mineral sunscreen providing broad-spectrum UV protection.",
    price: 6400,
    oldPrice: null,
    rating: 4.95,
    reviewsCount: 89,
    badges: ["NEW RELEASE", "NO WHITE CAST"],
    imgPrimary: "/assets/botanical_serum_1784829065095-CWvF2yY0.jpg",
    imgSecondary: "/assets/hero_skincare_bottle_1784829018079-DS2qkswC.jpg",
    ingredients: "20% Zinc Oxide, Niacinamide, Licorice Root, Squalane",
    created: 120
  },
  {
    id: "p8",
    name: "Clarifying Salicylic & Zinc Spot Gel",
    category: "acne",
    categoryName: "Acne Care & Treatment",
    tags: ["all", "acne", "cleanser", "bestseller"],
    shortDesc: "2% Encapsulated BHA formula designed to clear active breakouts and unclog pores.",
    price: 4900,
    oldPrice: 5800,
    rating: 4.85,
    reviewsCount: 132,
    badges: ["ACNE CLEARING"],
    imgPrimary: "/assets/hero_skincare_bottle_1784829018079-DS2qkswC.jpg",
    imgSecondary: "/assets/luxury_cream_jar_1784829034543-DzFwA63r.jpg",
    ingredients: "Salicylic Acid 2%, Zinc PCA, Tea Tree Hydrosol, Allantoin",
    created: 85
  },
  {
    id: "p9",
    name: "Triple Hyaluronic Moisture Surge Drops",
    category: "serums",
    categoryName: "Serums & Concentrates",
    tags: ["all", "serums", "hydration", "sensitive"],
    shortDesc: "Multi-weight Hyaluronic Acid matrix delivering multi-depth skin plumping hydration.",
    price: 7900,
    oldPrice: null,
    rating: 4.9,
    reviewsCount: 164,
    badges: ["INTENSIVE HYDRATION"],
    imgPrimary: "/assets/skin_glowing_portrait_1784829050112-BE8ZFnY9.jpg",
    imgSecondary: "/assets/botanical_serum_1784829065095-CWvF2yY0.jpg",
    ingredients: "Hyaluronic Acid High/Mid/Low, Polyglutamic Acid, Provitamin B5",
    created: 75
  },
  {
    id: "p10",
    name: "Niacinamide 10% Pigmentation Corrector",
    category: "serums",
    categoryName: "Serums & Concentrates",
    tags: ["all", "serums", "pigmentation", "acne", "new"],
    shortDesc: "Potent 10% Niacinamide and Alpha Arbutin serum for dark spot and blotchiness removal.",
    price: 7200,
    oldPrice: 8500,
    rating: 4.92,
    reviewsCount: 105,
    badges: ["RADIANCE BOOST"],
    imgPrimary: "/assets/botanical_serum_1784829065095-CWvF2yY0.jpg",
    imgSecondary: "/assets/luxury_cream_jar_1784829034543-DzFwA63r.jpg",
    ingredients: "Niacinamide 10%, Alpha Arbutin 2%, Licorice Root Extract, Glutathione",
    created: 115
  },
  {
    id: "p11",
    name: "Centella Soothing Barrier Rescue Cream",
    category: "creams",
    categoryName: "Moisturizers & Creams",
    tags: ["all", "creams", "moisturizers", "sensitive", "hydration"],
    shortDesc: "Emergency relief moisture balm infused with Madecassoside and Centella for red, irritated skin.",
    price: 6900,
    oldPrice: 8000,
    rating: 4.98,
    reviewsCount: 142,
    badges: ["BARRIER REPAIR"],
    imgPrimary: "/assets/luxury_cream_jar_1784829034543-DzFwA63r.jpg",
    imgSecondary: "/assets/skin_glowing_portrait_1784829050112-BE8ZFnY9.jpg",
    ingredients: "Centella Asiatica 70%, Madecassoside, Asiatic Acid, Ceramide EOP",
    created: 65
  },
  {
    id: "p12",
    name: "Glycolic Acid Resurfacing Exfoliating Toner",
    category: "cleansers",
    categoryName: "Cleansers & Toners",
    tags: ["all", "cleansers", "antiaging", "pigmentation"],
    shortDesc: "7% Glycolic Acid liquid exfoliant that gently dissolves dead cells for smooth radiance.",
    price: 5800,
    oldPrice: null,
    rating: 4.88,
    reviewsCount: 97,
    badges: ["SMOOTH & GLOW"],
    imgPrimary: "/assets/hero_skincare_bottle_1784829018079-DS2qkswC.jpg",
    imgSecondary: "/assets/botanical_serum_1784829065095-CWvF2yY0.jpg",
    ingredients: "Glycolic Acid 7%, Aloe Vera Water, Tasmanian Pepperberry, Ginseng",
    created: 60
  }
];

// Merge into global PRODUCTS_DATA if needed
if (window.PRODUCTS_DATA) {
  window.PRODUCTS_DATA = SHOP_PRODUCTS;
}

// Shop State
let activeCategoryFilter = "all";
let searchQuery = "";
let sortOption = "newest";
let currentPage = 1;
const itemsPerPage = 8;

document.addEventListener("DOMContentLoaded", () => {
  // Read URL query string
  const urlParams = new URLSearchParams(window.location.search);
  const paramFilter = urlParams.get("filter");
  const paramSearch = urlParams.get("search");

  if (paramFilter) {
    activeCategoryFilter = paramFilter;
  }
  if (paramSearch) {
    searchQuery = paramSearch;
    const searchInput = document.getElementById("shop-search-input");
    if (searchInput) searchInput.value = paramSearch;
  }

  // Sync Pill UI
  syncFilterPillsUI();

  // Attach Event Listeners
  setupShopEventListeners();

  // Render Initial Grid
  renderShopGrid();
});

function syncFilterPillsUI() {
  const pills = document.querySelectorAll(".shop-filter-pill-btn");
  pills.forEach(pill => {
    if (pill.dataset.filter === activeCategoryFilter) {
      pill.classList.add("active");
    } else {
      pill.classList.remove("active");
    }
  });
}

function setupShopEventListeners() {
  // Pill Clicks
  const pills = document.querySelectorAll(".shop-filter-pill-btn");
  pills.forEach(pill => {
    pill.addEventListener("click", () => {
      activeCategoryFilter = pill.dataset.filter;
      currentPage = 1;
      syncFilterPillsUI();
      renderShopGrid();
    });
  });

  // Search Input
  const searchInput = document.getElementById("shop-search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      currentPage = 1;
      renderShopGrid();
    });
  }

  // Sort Select
  const sortSelect = document.getElementById("shop-sort-select");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      sortOption = e.target.value;
      currentPage = 1;
      renderShopGrid();
    });
  }
}

function filterShopCategory(cat) {
  activeCategoryFilter = cat;
  currentPage = 1;
  syncFilterPillsUI();
  renderShopGrid();
  const gridElem = document.getElementById("shop-grid");
  if (gridElem) {
    gridElem.scrollIntoView({ behavior: "smooth" });
  }
}
window.filterShopCategory = filterShopCategory;

function renderShopGrid() {
  const container = document.getElementById("shop-products-container");
  const countElem = document.getElementById("shop-results-count");
  const paginationElem = document.getElementById("shop-pagination");
  if (!container) return;

  // 1. Filter
  let list = SHOP_PRODUCTS.filter(p => {
    // Category match
    let catMatch = false;
    if (activeCategoryFilter === "all") catMatch = true;
    else if (p.tags && p.tags.includes(activeCategoryFilter)) catMatch = true;
    else if (p.category === activeCategoryFilter) catMatch = true;

    // Search match
    let searchMatch = true;
    if (searchQuery) {
      const targetText = `${p.name} ${p.shortDesc} ${p.ingredients} ${p.categoryName}`.toLowerCase();
      searchMatch = targetText.includes(searchQuery);
    }

    return catMatch && searchMatch;
  });

  // 2. Sort
  list.sort((a, b) => {
    if (sortOption === "price-low") return a.price - b.price;
    if (sortOption === "price-high") return b.price - a.price;
    if (sortOption === "a-z") return a.name.localeCompare(b.name);
    if (sortOption === "bestselling") return b.reviewsCount - a.reviewsCount;
    // Default newest
    return b.created - a.created;
  });

  // 3. Count
  const totalCount = list.length;
  if (countElem) {
    countElem.textContent = `Showing ${totalCount} formulation${totalCount !== 1 ? 's' : ''}`;
  }

  // Empty state
  if (totalCount === 0) {
    container.innerHTML = `
      <div class="col-12 text-center py-5">
        <i class="bi bi-search display-3 text-muted mb-3 d-block"></i>
        <h4 class="font-serif text-dark mb-2">No Clinical Formulations Found</h4>
        <p class="text-muted mb-4">Try clearing your filters or searching for another skin concern or ingredient.</p>
        <button class="btn-hero-primary" onclick="resetShopFilters()">Reset All Filters</button>
      </div>
    `;
    if (paginationElem) paginationElem.innerHTML = "";
    return;
  }

  // 4. Pagination math
  const totalPages = Math.ceil(totalCount / itemsPerPage);
  if (currentPage > totalPages) currentPage = totalPages;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const pageItems = list.slice(startIndex, startIndex + itemsPerPage);

  // 5. Render Cards
  container.innerHTML = pageItems.map(p => {
    const formatPKR = window.formatPKR || (v => "PKR " + v.toLocaleString("en-PK"));
    const isWishlist = window.wishlistState && window.wishlistState.has(p.id);

    return `
      <div class="col-xl-3 col-lg-4 col-md-6 col-12 reveal-on-scroll animated-in">
        <div class="product-card-luxury">
          <div class="product-image-box">
            ${p.badges && p.badges.length > 0 ? `<span class="product-badge ${p.badges.includes('BEST SELLER') ? 'bestseller' : ''}">${p.badges[0]}</span>` : ''}
            <button class="wishlist-btn-corner ${isWishlist ? 'active' : ''}" onclick="toggleWishlist(this, '${p.id}')" title="Add to Wishlist">
              <i class="bi bi-heart-fill"></i>
            </button>
            <img src="${p.imgPrimary}" class="product-img-primary" alt="${p.name}">
            <img src="${p.imgSecondary}" class="product-img-secondary" alt="${p.name}">
            <button class="quickview-hover-btn" onclick="openQuickView('${p.id}')">Quick View <i class="bi bi-eye"></i></button>
          </div>
          <div class="product-info-box">
            <span class="product-category-sub">${p.categoryName}</span>
            <h3 class="product-title-text"><a href="/product?id=${p.id}" class="text-dark text-decoration-none">${p.name}</a></h3>
            <p class="small text-muted mb-2 text-truncate" style="font-size: 0.78rem;">${p.shortDesc}</p>
            <div class="product-rating-line">
              <div class="stars-gold"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></div>
              <span class="rating-count">(${p.reviewsCount} reviews)</span>
            </div>
            <div class="product-price-row">
              <div>
                <span class="product-price-tag">${formatPKR(p.price)}</span>
                ${p.oldPrice ? `<span class="old-price">${formatPKR(p.oldPrice)}</span>` : ''}
              </div>
              <div class="d-flex align-items-center gap-1">
                <button class="add-cart-icon-btn" onclick="addToCart('${p.id}')" title="Add to Bag">
                  <i class="bi bi-bag-plus"></i>
                </button>
                <button class="btn-buy-now" onclick="addToCart('${p.id}')">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join("");

  // 6. Render Pagination
  if (paginationElem) {
    if (totalPages <= 1) {
      paginationElem.innerHTML = "";
    } else {
      let pagesHTML = `
        <button class="page-btn ${currentPage === 1 ? 'disabled' : ''}" onclick="changeShopPage(${currentPage - 1})">
          <i class="bi bi-chevron-left"></i>
        </button>
      `;

      for (let i = 1; i <= totalPages; i++) {
        pagesHTML += `
          <button class="page-btn ${i === currentPage ? 'active' : ''}" onclick="changeShopPage(${i})">${i}</button>
        `;
      }

      pagesHTML += `
        <button class="page-btn ${currentPage === totalPages ? 'disabled' : ''}" onclick="changeShopPage(${currentPage + 1})">
          <i class="bi bi-chevron-right"></i>
        </button>
      `;

      paginationElem.innerHTML = pagesHTML;
    }
  }
}

function changeShopPage(page) {
  currentPage = page;
  renderShopGrid();
  const gridElem = document.getElementById("shop-grid");
  if (gridElem) {
    gridElem.scrollIntoView({ behavior: "smooth" });
  }
}
window.changeShopPage = changeShopPage;

function resetShopFilters() {
  activeCategoryFilter = "all";
  searchQuery = "";
  sortOption = "newest";
  currentPage = 1;

  const searchInput = document.getElementById("shop-search-input");
  if (searchInput) searchInput.value = "";

  const sortSelect = document.getElementById("shop-sort-select");
  if (sortSelect) sortSelect.value = "newest";

  syncFilterPillsUI();
  renderShopGrid();
}
window.resetShopFilters = resetShopFilters;
