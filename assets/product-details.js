// ==========================================================================
// DR. SEEMA'S PRODUCTS - DEDICATED PRODUCT DETAILS PAGE ENGINE
// ==========================================================================

const PRODUCT_DATABASE = {
  p1: {
    id: "p1",
    name: "Cellular Renewal Bio-Retinol Serum",
    category: "serums",
    categoryName: "Serums & Concentrates",
    categoryUrl: "/shop?filter=serums",
    price: 8800,
    oldPrice: 10500,
    discountBadge: "16% OFF",
    rating: 5.0,
    reviewsCount: 148,
    inStock: true,
    sku: "DS-CR-SER-01",
    volume: "30ml / 1.01 fl. oz.",
    texture: "Silky, fast-absorbing micro-emulsion",
    suitableFor: "All Skin Types • Mature • Hyperpigmented • Uneven Texture",
    shortDesc: "An advanced dermatologist formulation combining 2% Bio-Retinol with 5% Niacinamide and Botanical Squalane to accelerate cellular turnover without irritation or dryness.",
    clinicalHighlights: [
      "Accelerates collagen synthesis & overnight cellular regeneration",
      "Visibly fades stubborn dark spots, sun discoloration & post-acne marks",
      "Refines enlarged pores and smooths fine lines within 14 days",
      "Non-peeling, liposomal micro-encapsulation safe for sensitive skin"
    ],
    gallery: [
      "/assets/hero_skincare_bottle_1784829018079-DS2qkswC.jpg",
      "/assets/botanical_serum_1784829065095-CWvF2yY0.jpg",
      "/assets/skin_glowing_portrait_1784829050112-BE8ZFnY9.jpg",
      "/assets/luxury_cream_jar_1784829034543-DzFwA63r.jpg"
    ],
    ingredientsList: [
      { name: "Bio-Retinol 2%", desc: "Botanical Bakuchiol synergy that stimulates collagen renewal without redness or photo-sensitivity.", icon: "bi-flower1" },
      { name: "Niacinamide 5%", desc: "Strengthens moisture barrier, regulates excess sebum, and restricts melanosome transfer.", icon: "bi-shield-check" },
      { name: "Multi-Molecular Hyaluronic Acid", desc: "Tri-layer hydration matrix penetrating deep dermal layers for instant volume and bounce.", icon: "bi-droplet-half" },
      { name: "Botanical Squalane", desc: "Cold-pressed olive-derived lipid that locks in moisture and protects against environmental stress.", icon: "bi-sparkles" }
    ],
    usageSteps: [
      { step: "01", title: "Cleanse & Prep", desc: "Gently cleanse face with Dr. Seema's Calming Botanical Cleanser. Pat dry with a clean towel.", icon: "bi-droplet" },
      { step: "02", title: "Apply Essence", desc: "Dispense 3-4 drops onto clean fingertips. Gently press and smooth across face, neck, and chest.", icon: "bi-hand-index-thumb" },
      { step: "03", title: "Seal Barrier", desc: "Follow with Deep Moisture Barrier Cream to lock in bio-active peptides overnight.", icon: "bi-moon-stars" }
    ],
    clinicalResults: [
      { stat: "98%", label: "Noticed smoother, refined skin texture in 14 days" },
      { stat: "95%", label: "Reported visible reduction in hyperpigmentation" },
      { stat: "99%", label: "Experienced zero redness or peeling irritation" }
    ],
    beforeAfter: {
      beforeImg: "/assets/botanical_serum_1784829065095-CWvF2yY0.jpg",
      afterImg: "/assets/skin_after_treatment_1784834215984-D_r22WyY.jpg",
      title: "14-Day Clinical Trial Transformations",
      desc: "Real patient photography evaluated in Dr. Seema's Dermatology Clinic."
    },
    reviews: [
      { name: "Fatima K.", date: "12 May 2026", rating: 5, verified: true, title: "Unbelievable glow without any peeling!", text: "I have sensitive Pakistani skin that usually reacts terribly to Retinol. Dr. Seema's formula changed my skin completely within two weeks. My acne marks are almost invisible now!" },
      { name: "Dr. Ayesha M.", date: "03 April 2026", rating: 5, verified: true, title: "Recommended to all my patients", text: "As a fellow dermatologist, I scrutinize ingredient lists. The liposomal encapsulation in this serum is world-class. Excellent balance of efficacy and barrier safety." },
      { name: "Zainab S.", date: "18 March 2026", rating: 5, verified: true, title: "Worth every rupee", text: "Ordered from Lahore and received it the next day! The packaging is so luxurious and my skin feels plump and glass-like every morning." }
    ]
  },
  p2: {
    id: "p2",
    name: "Deep Moisture Barrier Repair Cream",
    category: "creams",
    categoryName: "Moisturizers & Creams",
    categoryUrl: "/shop?filter=creams",
    price: 7600,
    oldPrice: 8900,
    discountBadge: "15% OFF",
    rating: 4.9,
    reviewsCount: 96,
    inStock: true,
    sku: "DS-DM-CRM-02",
    volume: "50ml / 1.70 fl. oz.",
    texture: "Rich velvet whipped cream that melts instantly into skin",
    suitableFor: "Dry • Dehydrated • Compromised Barrier • Rosacea Safe",
    shortDesc: "A 72-hour moisture surge barrier cream formulated with Ceramide NP, Sacred Lotus extract, and Centella Asiatica to seal micro-cracks and relieve tightness.",
    clinicalHighlights: [
      "72-hour clinical hydration seal preventing transepidermal water loss",
      "Rebuilds damaged lipid barrier caused by harsh weather or chemical peels",
      "Instant relief from redness, itching, and tightness upon application",
      "Non-comedogenic formula that won't clog pores or cause breakouts"
    ],
    gallery: [
      "/assets/luxury_cream_jar_1784829034543-DzFwA63r.jpg",
      "/assets/skin_glowing_portrait_1784829050112-BE8ZFnY9.jpg",
      "/assets/hero_skincare_bottle_1784829018079-DS2qkswC.jpg",
      "/assets/botanical_serum_1784829065095-CWvF2yY0.jpg"
    ],
    ingredientsList: [
      { name: "Ceramide NP (Ceramide 3)", desc: "Essential bio-identical lipid that restores moisture cohesion in skin cells.", icon: "bi-shield-plus" },
      { name: "Sacred Lotus Extract", desc: "Potent botanical antioxidant that soothes inflammation and brightens complexion.", icon: "bi-flower2" },
      { name: "Meadowfoam Seed Oil", desc: "Fast-absorbing plant oil rich in fatty acids that seals in deep hydration.", icon: "bi-droplet-fill" },
      { name: "Centella Asiatica", desc: "Proven healing herb that calms redness, irritation, and restores barrier integrity.", icon: "bi-heart-pulse" }
    ],
    usageSteps: [
      { step: "01", title: "Apply Treatment", desc: "Apply your preferred Dr. Seema serum to clean skin.", icon: "bi-droplet" },
      { step: "02", title: "Scoop Balm", desc: "Scoop a nickel-sized amount using the spatulated clinical lid.", icon: "bi-box-seam" },
      { step: "03", title: "Massage Gently", desc: "Massage in upward circular motions across face and neck morning and evening.", icon: "bi-hand-index-thumb" }
    ],
    clinicalResults: [
      { stat: "100%", label: "Experienced immediate relief from dry tightness" },
      { stat: "97%", label: "Showed clinical barrier reinforcement after 7 days" },
      { stat: "98%", label: "Agreed skin felt softer and deeply hydrated all day" }
    ],
    beforeAfter: {
      beforeImg: "/assets/luxury_cream_jar_1784829034543-DzFwA63r.jpg",
      afterImg: "/assets/skin_after_treatment_1784834215984-D_r22WyY.jpg",
      title: "Barrier Restoration Results",
      desc: "Observed under dermatoscope after 7 days of daily application."
    },
    reviews: [
      { name: "Mariam R.", date: "02 June 2026", rating: 5, verified: true, title: "Saved my ruined skin barrier!", text: "I over-exfoliated with strong acids and my face was burning. This cream restored my skin in just 3 days. I can't live without it now!" },
      { name: "Sana A.", date: "19 May 2026", rating: 5, verified: true, title: "Silky luxury in a jar", text: "The texture is incredible. It feels heavy in a good way, yet melts in without leaving an oily residue. Perfect under makeup too!" }
    ]
  },
  p3: {
    id: "p3",
    name: "Vitamin C Luminous Radiance Concentrate",
    category: "serums",
    categoryName: "Serums & Concentrates",
    categoryUrl: "/shop?filter=pigmentation",
    price: 9200,
    oldPrice: 11000,
    discountBadge: "16% OFF",
    rating: 5.0,
    reviewsCount: 210,
    inStock: true,
    sku: "DS-VC-LUM-03",
    volume: "30ml / 1.01 fl. oz.",
    texture: "Lightweight golden botanical elixir",
    suitableFor: "Dull Skin • Hyperpigmentation • Sun Damage • Uneven Tone",
    shortDesc: "A high-potency 15% pure L-Ascorbic Acid serum stabilized with Ferulic Acid and Vitamin E. Erases sun spots and boosts glass-skin radiance.",
    clinicalHighlights: [
      "15% Stabilized L-Ascorbic Acid for maximum cellular brightening",
      "Neutralizes free radical damage and UV photo-aging",
      "Fades dark spots, acne scars, and uneven pigmentation",
      "Enhances natural skin luminosity for an instant healthy glow"
    ],
    gallery: [
      "/assets/botanical_serum_1784829065095-CWvF2yY0.jpg",
      "/assets/hero_skincare_bottle_1784829018079-DS2qkswC.jpg",
      "/assets/skin_glowing_portrait_1784829050112-BE8ZFnY9.jpg",
      "/assets/luxury_cream_jar_1784829034543-DzFwA63r.jpg"
    ],
    ingredientsList: [
      { name: "15% Pure L-Ascorbic Acid", desc: "Gold-standard Vitamin C that inhibits melanin production and boosts collagen.", icon: "bi-sun" },
      { name: "1% Vitamin E (Tocopherol)", desc: "Lipid-soluble antioxidant that works synergistically to stabilize Vitamin C.", icon: "bi-shield-check" },
      { name: "0.5% Ferulic Acid", desc: "Plant-derived antioxidant that doubles the efficacy and stability of Vitamin C.", icon: "bi-sparkles" },
      { name: "Kakadu Plum Extract", desc: "World's richest natural source of Vitamin C for enhanced radiance.", icon: "bi-flower1" }
    ],
    usageSteps: [
      { step: "01", title: "Morning Cleanse", desc: "Cleanse face gently in the morning.", icon: "bi-droplet" },
      { step: "02", title: "Apply Vitamin C", desc: "Apply 4-5 drops to face and neck every morning.", icon: "bi-brightness-high" },
      { step: "03", title: "Apply Sunscreen", desc: "Always finish with Dr. Seema's Mineral SPF 50+ sunscreen.", icon: "bi-shield-shading" }
    ],
    clinicalResults: [
      { stat: "99%", label: "Noticed brighter, more radiant skin within 10 days" },
      { stat: "96%", label: "Saw reduction in sun spots and discoloration" },
      { stat: "97%", label: "Reported firmer, smoother skin texture" }
    ],
    beforeAfter: {
      beforeImg: "/assets/botanical_serum_1784829065095-CWvF2yY0.jpg",
      afterImg: "/assets/skin_after_treatment_1784834215984-D_r22WyY.jpg",
      title: "Radiance & Pigmentation Results",
      desc: "Measured over 21 days of daily morning application."
    },
    reviews: [
      { name: "Hira M.", date: "10 June 2026", rating: 5, verified: true, title: "The best Vitamin C in Pakistan!", text: "Unlike other Vitamin C serums that oxidize quickly or smell weird, Dr. Seema's formula stays fresh and works like magic. My dark spots are 80% gone!" }
    ]
  },
  p4: {
    id: "p4",
    name: "Radiant Glow Barrier Elixir",
    category: "oils",
    categoryName: "Treatment Oils",
    categoryUrl: "/shop?filter=oils",
    price: 8400,
    oldPrice: 9800,
    discountBadge: "14% OFF",
    rating: 4.8,
    reviewsCount: 82,
    inStock: true,
    sku: "DS-RG-OIL-04",
    volume: "30ml / 1.01 fl. oz.",
    texture: "Cold-pressed golden velvet oil",
    suitableFor: "Dry • Mature • Dull • Sensitive Skin",
    shortDesc: "A nutrient-dense botanical facial oil infused with Rosehip, Marula, and Evening Primrose to restore deep lipid bounce.",
    clinicalHighlights: [
      "Deep lipid replenishment for compromised barrier function",
      "Restores elasticity, plumpness, and youthful radiance",
      "Rich in essential omega fatty acids 3, 6, and 9",
      "Fast-absorbing formula that leaves zero greasy residue"
    ],
    gallery: [
      "/assets/skin_glowing_portrait_1784829050112-BE8ZFnY9.jpg",
      "/assets/luxury_cream_jar_1784829034543-DzFwA63r.jpg",
      "/assets/hero_skincare_bottle_1784829018079-DS2qkswC.jpg",
      "/assets/botanical_serum_1784829065095-CWvF2yY0.jpg"
    ],
    ingredientsList: [
      { name: "Organic Rosehip Seed Oil", desc: "Rich in natural retinoic acid and essential fatty acids for skin repair.", icon: "bi-flower2" },
      { name: "Virgin Marula Oil", desc: "Potent antioxidant oil that hydrates deeply and combats cellular oxidation.", icon: "bi-droplet-fill" },
      { name: "Evening Primrose Oil", desc: "Soothes hormonal irritation and improves overall skin elasticity.", icon: "bi-heart-pulse" },
      { name: "Golden Jojoba", desc: "Bio-identical sebum oil that balances lipid production naturally.", icon: "bi-sparkles" }
    ],
    usageSteps: [
      { step: "01", title: "Cleanse Skin", desc: "Cleanse face thoroughly.", icon: "bi-droplet" },
      { step: "02", title: "Warm Drops", desc: "Warm 2-3 drops between palms.", icon: "bi-hand-index-thumb" },
      { step: "03", title: "Press Gently", desc: "Press into face and neck as the final step of nighttime routine.", icon: "bi-moon-stars" }
    ],
    clinicalResults: [
      { stat: "96%", label: "Reported softer skin texture after single night" },
      { stat: "94%", label: "Noticed improved elasticity and plumpness" },
      { stat: "98%", label: "Agreed formula absorbs quickly without greasy feel" }
    ],
    beforeAfter: {
      beforeImg: "/assets/skin_glowing_portrait_1784829050112-BE8ZFnY9.jpg",
      afterImg: "/assets/skin_after_treatment_1784834215984-D_r22WyY.jpg",
      title: "Glow & Barrier Results",
      desc: "Measured over 14 days of nightly application."
    },
    reviews: [
      { name: "Sadia B.", date: "15 April 2026", rating: 5, verified: true, title: "Liquid gold for dry winter skin!", text: "My skin gets so flaky and dull. Just 2 drops of this elixir at night gives me glass skin by morning!" }
    ]
  },
  p5: {
    id: "p5",
    name: "Calming Botanical Gentle Cleanser",
    category: "cleansers",
    categoryName: "Cleansers & Toners",
    categoryUrl: "/shop?filter=cleansers",
    price: 5200,
    oldPrice: 6200,
    discountBadge: "16% OFF",
    rating: 4.9,
    reviewsCount: 115,
    inStock: true,
    sku: "DS-CB-CLN-05",
    volume: "150ml / 5.07 fl. oz.",
    texture: "pH-balanced soothing gel-to-foam",
    suitableFor: "All Skin Types • Sensitive • Rosacea Prone • Post-Procedure",
    shortDesc: "A non-stripping, pH 5.5 botanical cleanser formulated with Green Tea Water and Chamomile to melt away dirt while shielding dermal lipids.",
    clinicalHighlights: [
      "pH 5.5 balanced formula maintains natural skin mantle",
      "Soothes redness and calms reactive, sensitive skin",
      "Cleanses deep pores without tightness or drying residue",
      "Sulfate-free, soap-free formulation safe for daily use"
    ],
    gallery: [
      "/assets/luxury_cream_jar_1784829034543-DzFwA63r.jpg",
      "/assets/botanical_serum_1784829065095-CWvF2yY0.jpg",
      "/assets/skin_glowing_portrait_1784829050112-BE8ZFnY9.jpg",
      "/assets/hero_skincare_bottle_1784829018079-DS2qkswC.jpg"
    ],
    ingredientsList: [
      { name: "Green Tea Hydrosol", desc: "Antioxidant-rich base that soothes irritation and protects against stress.", icon: "bi-flower1" },
      { name: "Chamomile Extract", desc: "Anti-inflammatory botanical that calms sensitivity and redness.", icon: "bi-heart-pulse" },
      { name: "Oat Amino Acids", desc: "Ultra-gentle lipid-preserving surfactants derived from natural oats.", icon: "bi-droplet-half" },
      { name: "Panthenol (Pro-Vitamin B5)", desc: "Hydrating humectant that maintains moisture during cleansing.", icon: "bi-shield-check" }
    ],
    usageSteps: [
      { step: "01", title: "Dampen Face", desc: "Splash face with lukewarm water.", icon: "bi-droplet" },
      { step: "02", title: "Lather Pump", desc: "Lather 1-2 pumps between wet hands.", icon: "bi-hand-index-thumb" },
      { step: "03", title: "Rinse Clean", desc: "Massage gently in circles for 60 seconds and rinse thoroughly.", icon: "bi-check-circle" }
    ],
    clinicalResults: [
      { stat: "100%", label: "Agreed cleanser left zero tightness after washing" },
      { stat: "98%", label: "Noticed immediate reduction in skin redness" },
      { stat: "99%", label: "Felt skin was clean, fresh and calm" }
    ],
    beforeAfter: {
      beforeImg: "/assets/luxury_cream_jar_1784829034543-DzFwA63r.jpg",
      afterImg: "/assets/skin_after_treatment_1784834215984-D_r22WyY.jpg",
      title: "Calming Cleanser Study",
      desc: "Measured immediately after washing sensitive reactive skin."
    },
    reviews: [
      { name: "Noreen T.", date: "01 May 2026", rating: 5, verified: true, title: "Finally a cleanser that doesn't dry my skin!", text: "Every other cleanser makes my face feel like a dry desert. This one leaves my face so soft, calm and hydrated!" }
    ]
  },
  p6: {
    id: "p6",
    name: "Firming Peptide Eye Essence",
    category: "serums",
    categoryName: "Eye & Treatment",
    categoryUrl: "/shop?filter=serums",
    price: 6800,
    oldPrice: 7900,
    discountBadge: "14% OFF",
    rating: 4.9,
    reviewsCount: 74,
    inStock: true,
    sku: "DS-FP-EYE-06",
    volume: "15ml / 0.51 fl. oz.",
    texture: "Cooling micro-gel with cooling ceramic applicator feel",
    suitableFor: "Puffiness • Dark Circles • Fine Lines • Crows Feet",
    shortDesc: "Quad-Peptide treatment engineered with Matrixyl 3000 and Caffeine to de-puff, firm delicate eye contours, and lighten dark shadow rings.",
    clinicalHighlights: [
      "Quad-Peptide matrix stimulates collagen synthesis around delicate eye tissue",
      "Visibly reduces morning puffiness and fluid retention in 10 minutes",
      "Lightens dark circles and hyperpigmented under-eye shadows",
      "Smooths fine crow's feet and prevents premature sagging"
    ],
    gallery: [
      "/assets/hero_skincare_bottle_1784829018079-DS2qkswC.jpg",
      "/assets/skin_glowing_portrait_1784829050112-BE8ZFnY9.jpg",
      "/assets/botanical_serum_1784829065095-CWvF2yY0.jpg",
      "/assets/luxury_cream_jar_1784829034543-DzFwA63r.jpg"
    ],
    ingredientsList: [
      { name: "Matrixyl 3000", desc: "Dual-peptide signal complex that rebuilds under-eye collagen matrix.", icon: "bi-stars" },
      { name: "Micro-Encapsulated Caffeine", desc: "Constricts dilated micro-vessels to drain puffiness and dark circles.", icon: "bi-lightning-charge" },
      { name: "Acetyl Tetrapeptide-5", desc: "Anti-edema peptide that prevents water retention and eye bags.", icon: "bi-droplet" },
      { name: "Haloxyl Complex", desc: "Targeted bio-tech active that breaks down dark blood pigments under skin.", icon: "bi-brightness-high" }
    ],
    usageSteps: [
      { step: "01", title: "Dispense Pea", desc: "Dispense half a pea-sized drop onto ring finger.", icon: "bi-droplet" },
      { step: "02", title: "Dot Contour", desc: "Gently dot along orbital bone around eyes.", icon: "bi-hand-index-thumb" },
      { step: "03", title: "Tap Gently", desc: "Tap lightly until fully absorbed morning and evening.", icon: "bi-check2-circle" }
    ],
    clinicalResults: [
      { stat: "97%", label: "Noticed reduced under-eye puffiness in 10 mins" },
      { stat: "94%", label: "Reported lighter dark circles after 14 days" },
      { stat: "96%", label: "Agreed eye area looked smoother and firmer" }
    ],
    beforeAfter: {
      beforeImg: "/assets/hero_skincare_bottle_1784829018079-DS2qkswC.jpg",
      afterImg: "/assets/skin_after_treatment_1784834215984-D_r22WyY.jpg",
      title: "Under-Eye Firming Results",
      desc: "Measured after 14 days of twice-daily application."
    },
    reviews: [
      { name: "Farah S.", date: "22 May 2026", rating: 5, verified: true, title: "Works miracles on dark circles!", text: "I work long night shifts and my dark circles were terrible. Within a week of using this eye gel, my eyes look awake and bright!" }
    ]
  }
};

// Current Active Product Data
let currentProduct = PRODUCT_DATABASE.p1;
let selectedQuantity = 1;
let currentImageIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
  // Parse product ID from query parameter
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id") || "p1";

  if (PRODUCT_DATABASE[productId]) {
    currentProduct = PRODUCT_DATABASE[productId];
  } else if (window.PRODUCTS_DATA) {
    // Fallback if item exists in general list
    const found = window.PRODUCTS_DATA.find(p => p.id === productId);
    if (found) {
      currentProduct = {
        ...PRODUCT_DATABASE.p1,
        id: found.id,
        name: found.name,
        price: found.price,
        oldPrice: found.oldPrice,
        category: found.category,
        categoryName: found.categoryName || "Clinical Skincare",
        shortDesc: found.shortDesc,
        gallery: [found.imgPrimary, found.imgSecondary, "/assets/skin_glowing_portrait_1784829050112-BE8ZFnY9.jpg", "/assets/luxury_cream_jar_1784829034543-DzFwA63r.jpg"]
      };
    }
  }

  // Save to Recently Viewed
  saveToRecentlyViewed(currentProduct);

  // Bind Data to Page UI
  bindProductDetailsUI();

  // Render Related & Recently Viewed
  renderRelatedProducts();
  renderRecentlyViewed();

  // Sticky Mobile Cart updates
  const stickyImg = document.getElementById("sticky-cart-img");
  const stickyTitle = document.getElementById("sticky-cart-title");
  const stickyPrice = document.getElementById("sticky-cart-price");
  if (stickyImg && currentProduct.gallery) stickyImg.src = currentProduct.gallery[0];
  if (stickyTitle) stickyTitle.textContent = currentProduct.name;
  if (stickyPrice) stickyPrice.textContent = formatPKR(currentProduct.price);

  // Setup Gallery Zoom and Handlers
  setupGalleryHandlers();
  setupQuantityHandlers();
  setupStickyMobileCartScroll();
});

function bindProductDetailsUI() {
  const formatPKR = window.formatPKR || (v => "PKR " + v.toLocaleString("en-PK"));

  // Breadcrumbs
  const bCategory = document.getElementById("p-bread-category");
  const bTitle = document.getElementById("p-bread-title");
  if (bCategory) {
    bCategory.textContent = currentProduct.categoryName;
    bCategory.href = currentProduct.categoryUrl;
  }
  if (bTitle) bTitle.textContent = currentProduct.name;

  // Title, SKU, Rating
  const titleElem = document.getElementById("p-title");
  const skuElem = document.getElementById("p-sku");
  const ratingVal = document.getElementById("p-rating-val");
  const reviewCount = document.getElementById("p-review-count");
  if (titleElem) titleElem.textContent = currentProduct.name;
  if (skuElem) skuElem.textContent = "SKU: " + currentProduct.sku;
  if (ratingVal) ratingVal.textContent = currentProduct.rating;
  if (reviewCount) reviewCount.textContent = `(${currentProduct.reviewsCount} verified reviews)`;

  // Pricing & Badges
  const priceElem = document.getElementById("p-price");
  const oldPriceElem = document.getElementById("p-old-price");
  const badgeDiscount = document.getElementById("p-discount-badge");
  if (priceElem) priceElem.textContent = formatPKR(currentProduct.price);
  if (oldPriceElem) {
    if (currentProduct.oldPrice) {
      oldPriceElem.textContent = formatPKR(currentProduct.oldPrice);
      oldPriceElem.style.display = "inline";
    } else {
      oldPriceElem.style.display = "none";
    }
  }
  if (badgeDiscount) {
    if (currentProduct.discountBadge) {
      badgeDiscount.textContent = currentProduct.discountBadge;
      badgeDiscount.style.display = "inline-block";
    } else {
      badgeDiscount.style.display = "none";
    }
  }

  // Specifications
  const shortDesc = document.getElementById("p-short-desc");
  const suitableFor = document.getElementById("p-suitable");
  const texture = document.getElementById("p-texture");
  const volume = document.getElementById("p-volume");
  if (shortDesc) shortDesc.textContent = currentProduct.shortDesc;
  if (suitableFor) suitableFor.textContent = currentProduct.suitableFor;
  if (texture) texture.textContent = currentProduct.texture;
  if (volume) volume.textContent = currentProduct.volume;

  // Highlights list
  const highlightsContainer = document.getElementById("p-highlights-list");
  if (highlightsContainer && currentProduct.clinicalHighlights) {
    highlightsContainer.innerHTML = currentProduct.clinicalHighlights.map(h => `
      <li class="d-flex align-items-center gap-2 mb-2 text-dark small fw-medium">
        <i class="bi bi-check-circle-fill text-sage fs-6"></i>
        <span>${h}</span>
      </li>
    `).join("");
  }

  // Ingredients Grid
  const ingredientsContainer = document.getElementById("p-ingredients-grid");
  if (ingredientsContainer && currentProduct.ingredientsList) {
    ingredientsContainer.innerHTML = currentProduct.ingredientsList.map(ing => `
      <div class="col-12 col-md-6 reveal-on-scroll mb-3 mb-md-0">
        <div class="p-3 p-md-4 bg-white border rounded-4 shadow-sm h-100 d-flex gap-3 align-items-start">
          <div class="p-2 bg-light-mint text-sage rounded-circle fs-4 flex-shrink-0" style="width: 48px; height: 48px; display: flex; align-items: center; justify-content: center;">
            <i class="bi ${ing.icon}"></i>
          </div>
          <div class="flex-grow-1 min-w-0">
            <h6 class="font-serif fw-bold text-dark mb-1 text-break">${ing.name}</h6>
            <p class="small text-muted mb-0 text-break" style="font-size: 0.85rem; line-height: 1.5;">${ing.desc}</p>
          </div>
        </div>
      </div>
    `).join("");
  }

  // Usage Steps
  const usageContainer = document.getElementById("p-usage-steps");
  if (usageContainer && currentProduct.usageSteps) {
    usageContainer.innerHTML = currentProduct.usageSteps.map(st => `
      <div class="col-12 col-md-6 col-lg-4 reveal-on-scroll">
        <div class="bg-white p-4 border rounded-4 shadow-sm text-center h-100">
          <span class="badge bg-sage text-white rounded-pill px-3 py-1 mb-3 fw-bold">STEP ${st.step}</span>
          <div class="mb-3 text-sage fs-1"><i class="bi ${st.icon}"></i></div>
          <h5 class="font-serif fw-bold mb-2">${st.title}</h5>
          <p class="small text-muted mb-0">${st.desc}</p>
        </div>
      </div>
    `).join("");
  }

  // Clinical Results
  const resultsContainer = document.getElementById("p-clinical-results");
  if (resultsContainer && currentProduct.clinicalResults) {
    resultsContainer.innerHTML = currentProduct.clinicalResults.map(res => `
      <div class="col-12 col-md-4 text-center reveal-on-scroll">
        <div class="display-3 font-serif fw-bold text-sage mb-2">${res.stat}</div>
        <p class="fw-semibold text-dark mb-0">${res.label}</p>
      </div>
    `).join("");
  }

  // Gallery Main & Thumbnails
  renderGallery();

  // Reviews
  renderReviews();

  // Ensure all dynamically rendered elements are animated in and visible
  triggerRevealAnimations();
}

function triggerRevealAnimations() {
  document.querySelectorAll(".reveal-on-scroll, .reveal-fade-left, .reveal-fade-right, .reveal-scale").forEach(el => {
    el.classList.add("animated-in");
  });
}
window.triggerRevealAnimations = triggerRevealAnimations;

function renderGallery() {
  const mainImg = document.getElementById("gallery-main-img");
  const thumbsContainer = document.getElementById("gallery-thumbs-container");
  if (!mainImg || !currentProduct.gallery) return;

  mainImg.src = currentProduct.gallery[currentImageIndex];

  if (thumbsContainer) {
    thumbsContainer.innerHTML = currentProduct.gallery.map((imgUrl, idx) => `
      <div class="gallery-thumb-item ${idx === currentImageIndex ? 'active' : ''}" onclick="selectGalleryImage(${idx})">
        <img src="${imgUrl}" alt="Thumbnail ${idx + 1}">
      </div>
    `).join("");
  }
}

function selectGalleryImage(idx) {
  currentImageIndex = idx;
  renderGallery();
}
window.selectGalleryImage = selectGalleryImage;

function setupGalleryHandlers() {
  const mainImg = document.getElementById("gallery-main-img");
  const zoomBox = document.getElementById("gallery-main-container");

  if (zoomBox && mainImg) {
    // Desktop Mouse Hover Zoom
    zoomBox.addEventListener("mousemove", (e) => {
      if (window.innerWidth >= 992) {
        const rect = zoomBox.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        mainImg.style.transformOrigin = `${x}% ${y}%`;
        mainImg.style.transform = "scale(1.5)";
      }
    });

    zoomBox.addEventListener("mouseleave", () => {
      mainImg.style.transformOrigin = "center center";
      mainImg.style.transform = "scale(1)";
    });

    // Touch Swipe Navigation for Mobile Gallery
    let touchStartX = 0;
    let touchEndX = 0;

    zoomBox.addEventListener("touchstart", (e) => {
      if (e.changedTouches && e.changedTouches.length > 0) {
        touchStartX = e.changedTouches[0].screenX;
      }
    }, { passive: true });

    zoomBox.addEventListener("touchend", (e) => {
      if (e.changedTouches && e.changedTouches.length > 0) {
        touchEndX = e.changedTouches[0].screenX;
        handleGallerySwipe();
      }
    }, { passive: true });

    function handleGallerySwipe() {
      const diffX = touchStartX - touchEndX;
      if (Math.abs(diffX) > 35) {
        if (diffX > 0) {
          // Swipe left -> Next Image
          if (currentProduct.gallery && currentImageIndex < currentProduct.gallery.length - 1) {
            selectGalleryImage(currentImageIndex + 1);
          } else {
            selectGalleryImage(0);
          }
        } else {
          // Swipe right -> Previous Image
          if (currentProduct.gallery && currentImageIndex > 0) {
            selectGalleryImage(currentImageIndex - 1);
          } else if (currentProduct.gallery) {
            selectGalleryImage(currentProduct.gallery.length - 1);
          }
        }
      }
    }
  }
}

function setupQuantityHandlers() {
  const qtyInput = document.getElementById("p-qty-input");
  const btnMinus = document.getElementById("p-qty-minus");
  const btnPlus = document.getElementById("p-qty-plus");

  if (btnMinus && qtyInput) {
    btnMinus.addEventListener("click", () => {
      if (selectedQuantity > 1) {
        selectedQuantity--;
        qtyInput.value = selectedQuantity;
      }
    });
  }

  if (btnPlus && qtyInput) {
    btnPlus.addEventListener("click", () => {
      selectedQuantity++;
      qtyInput.value = selectedQuantity;
    });
  }
}

function handleAddCurrentToCart() {
  if (window.addToCart) {
    for (let i = 0; i < selectedQuantity; i++) {
      window.addToCart(currentProduct.id);
    }
  } else {
    showToast(`Added ${selectedQuantity} x ${currentProduct.name} to Shopping Bag!`);
  }
}
window.handleAddCurrentToCart = handleAddCurrentToCart;

function handleBuyNow() {
  handleAddCurrentToCart();
  const cartDrawer = document.getElementById("cart-drawer");
  const backdrop = document.getElementById("cart-backdrop");
  if (cartDrawer && backdrop) {
    cartDrawer.classList.add("active");
    backdrop.classList.add("active");
  }
}
window.handleBuyNow = handleBuyNow;

function renderReviews() {
  const reviewsContainer = document.getElementById("p-reviews-container");
  if (!reviewsContainer || !currentProduct.reviews) return;

  reviewsContainer.innerHTML = currentProduct.reviews.map(rev => `
    <div class="bg-white p-4 rounded-4 border shadow-sm mb-3 reveal-on-scroll">
      <div class="d-flex align-items-center justify-content-between mb-2">
        <div class="d-flex align-items-center gap-2">
          <div class="fw-bold text-dark">${rev.name}</div>
          ${rev.verified ? `<span class="badge bg-light-mint text-sage small"><i class="bi bi-patch-check-fill me-1"></i> Verified Buyer</span>` : ''}
        </div>
        <span class="small text-muted">${rev.date}</span>
      </div>
      <div class="stars-gold mb-2">
        <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
      </div>
      <h6 class="font-serif fw-bold text-dark mb-1">${rev.title}</h6>
      <p class="small text-muted mb-0">${rev.text}</p>
    </div>
  `).join("");
}

function renderRelatedProducts() {
  const container = document.getElementById("related-products-container");
  if (!container) return;

  const allProducts = window.PRODUCTS_DATA || Object.values(PRODUCT_DATABASE);
  const related = allProducts.filter(p => p.id !== currentProduct.id).slice(0, 4);

  const formatPKR = window.formatPKR || (v => "PKR " + v.toLocaleString("en-PK"));

  container.innerHTML = related.map(p => `
    <div class="col-xl-3 col-lg-4 col-md-6 col-12 reveal-on-scroll">
      <div class="product-card-luxury">
        <div class="product-image-box">
          <button class="wishlist-btn-corner" onclick="toggleWishlist(this, '${p.id}')">
            <i class="bi bi-heart-fill"></i>
          </button>
          <img src="${p.imgPrimary || p.gallery[0]}" class="product-img-primary" alt="${p.name}">
          <img src="${p.imgSecondary || p.gallery[1] || p.gallery[0]}" class="product-img-secondary" alt="${p.name}">
          <a href="/product?id=${p.id}" class="quickview-hover-btn">View Details <i class="bi bi-arrow-right"></i></a>
        </div>
        <div class="product-info-box">
          <span class="product-category-sub">${p.categoryName || 'Clinical Skincare'}</span>
          <h3 class="product-title-text"><a href="/product?id=${p.id}" class="text-dark text-decoration-none">${p.name}</a></h3>
          <div class="product-price-row mt-2">
            <div>
              <span class="product-price-tag">${formatPKR(p.price)}</span>
            </div>
            <button class="add-cart-icon-btn" onclick="addToCart('${p.id}')" title="Add to Bag">
              <i class="bi bi-bag-plus"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  `).join("");

  triggerRevealAnimations();
}

function saveToRecentlyViewed(prod) {
  try {
    let list = JSON.parse(localStorage.getItem("ds_recently_viewed") || "[]");
    list = list.filter(item => item.id !== prod.id);
    list.unshift({
      id: prod.id,
      name: prod.name,
      price: prod.price,
      img: prod.gallery ? prod.gallery[0] : prod.imgPrimary
    });
    if (list.length > 6) list.pop();
    localStorage.setItem("ds_recently_viewed", JSON.stringify(list));
  } catch (e) {
    console.error("Local storage error:", e);
  }
}

function renderRecentlyViewed() {
  const container = document.getElementById("recently-viewed-container");
  if (!container) return;

  try {
    const list = JSON.parse(localStorage.getItem("ds_recently_viewed") || "[]");
    if (list.length === 0) {
      container.parentElement.style.display = "none";
      return;
    }

    const formatPKR = window.formatPKR || (v => "PKR " + v.toLocaleString("en-PK"));

    container.innerHTML = list.map(item => `
      <div class="col-lg-2 col-md-3 col-6 reveal-on-scroll">
        <a href="/product?id=${item.id}" class="text-decoration-none text-dark d-block bg-white p-3 rounded-4 border text-center hover-lift h-100">
          <img src="${item.img}" class="img-fluid rounded-3 mb-2" style="height: 100px; object-fit: contain;" alt="${item.name}">
          <div class="small fw-semibold text-truncate mb-1">${item.name}</div>
          <div class="small text-sage fw-bold">${formatPKR(item.price)}</div>
        </a>
      </div>
    `).join("");
  } catch (e) {
    console.error(e);
  }
}

function shareProduct() {
  if (navigator.share) {
    navigator.share({
      title: currentProduct.name,
      text: currentProduct.shortDesc,
      url: window.location.href
    }).catch(() => {});
  } else {
    navigator.clipboard.writeText(window.location.href);
    showToast("Product link copied to clipboard!");
  }
}
window.shareProduct = shareProduct;

function setupStickyMobileCartScroll() {
  const stickyBar = document.getElementById("sticky-mobile-cart-bar");
  if (!stickyBar) return;

  window.addEventListener("scroll", () => {
    if (window.innerWidth < 768 && window.scrollY > 350) {
      stickyBar.classList.add("visible");
    } else {
      stickyBar.classList.remove("visible");
    }
  });
}
