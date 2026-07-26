/**
 * cart.js — Dr. Seema's Clinical Skincare
 * Cart & Checkout page logic
 * Handles: cart state, quantity controls, coupons, shipping calc,
 *          checkout form, order placement, progress bar, UI interactions.
 */

/* ─────────────────────────────────────────────
   CART STATE
───────────────────────────────────────────── */
const CART_PRODUCTS = [
  {
    id: 'p1',
    name: 'Cellular Renewal Serum',
    variant: '30ml · Serums',
    price: 8800,
    oldPrice: 10500,
    qty: 1,
    img: '/assets/hero_skincare_bottle_1784829018079-DS2qkswC.jpg',
    badge: 'BESTSELLER'
  },
  {
    id: 'p2',
    name: 'Deep Moisture Barrier Cream',
    variant: '50ml · Moisturizers',
    price: 7600,
    oldPrice: null,
    qty: 1,
    img: '/assets/luxury_cream_jar_1784829034543-DzFwA63r.jpg',
    badge: ''
  }
];

let cartItems = CART_PRODUCTS.map(p => ({ ...p })); // working copy
let appliedCoupon = null;   // { code, type, value }
let selectedShipping = 250; // default shipping cost
const TAX_RATE = 0.17;
const FREE_SHIPPING_THRESHOLD = 12000;

/* ─────────────────────────────────────────────
   UTILS
───────────────────────────────────────────── */
/** Format number as PKR string: "PKR 8,800" */
function formatPKR(n) {
  return 'PKR ' + Math.round(n).toLocaleString('en-PK');
}

/** Get subtotal (pre-discount) */
function getSubtotal() {
  return cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
}

/** Get discount amount based on appliedCoupon */
function getDiscount(subtotal) {
  if (!appliedCoupon) return 0;
  if (appliedCoupon.type === 'percent') return Math.round(subtotal * appliedCoupon.value / 100);
  if (appliedCoupon.type === 'freeship') return 0; // handled in shipping
  return 0;
}

/** Get effective shipping cost (0 if free threshold met or FREESHIP coupon) */
function getShippingCost(subtotal) {
  if (subtotal >= FREE_SHIPPING_THRESHOLD) return 0;
  if (appliedCoupon && appliedCoupon.type === 'freeship') return 0;
  return selectedShipping;
}

/* ─────────────────────────────────────────────
   UPDATE ORDER SUMMARY
───────────────────────────────────────────── */
/**
 * Recalculates and updates all order summary values
 * in both the cart panel and the checkout panel.
 */
function updateOrderSummary() {
  const subtotal = getSubtotal();
  const discount = getDiscount(subtotal);
  const discountedSub = subtotal - discount;
  const shipping = getShippingCost(subtotal);
  const tax = Math.round(discountedSub * TAX_RATE);
  const grandTotal = discountedSub + shipping + tax;
  const itemCount = cartItems.reduce((s, i) => s + i.qty, 0);

  // ── CART SUMMARY ──
  setText('summary-item-count', itemCount);
  setText('summary-subtotal', formatPKR(subtotal));
  setText('summary-shipping', shipping === 0 ? 'FREE' : formatPKR(shipping));
  setText('summary-tax', formatPKR(tax));
  setText('summary-grand-total', formatPKR(grandTotal));

  const discountRow = document.getElementById('summary-discount-row');
  if (discountRow) {
    discountRow.style.display = discount > 0 ? '' : 'none';
    if (discount > 0) {
      setText('summary-coupon-name', appliedCoupon ? appliedCoupon.code : '');
      setText('summary-discount', '–' + formatPKR(discount));
    }
  }

  // ── CHECKOUT SUMMARY ──
  setText('co-item-count', itemCount);
  setText('co-subtotal', formatPKR(subtotal));
  setText('co-shipping', shipping === 0 ? 'FREE' : formatPKR(shipping));
  setText('co-tax', formatPKR(tax));
  setText('co-grand-total', formatPKR(grandTotal));

  const coDiscountRow = document.getElementById('co-discount-row');
  if (coDiscountRow) {
    coDiscountRow.style.display = discount > 0 ? '' : 'none';
    if (discount > 0) {
      setText('co-coupon-name', appliedCoupon ? appliedCoupon.code : '');
      setText('co-discount', '–' + formatPKR(discount));
    }
  }

  // Coupon badges
  const cartBadge = document.getElementById('coupon-badge-cart');
  const checkoutBadge = document.getElementById('coupon-badge-checkout');
  const badgeText = appliedCoupon ? appliedCoupon.code + ' applied' : '';
  if (cartBadge) cartBadge.style.display = appliedCoupon ? '' : 'none';
  if (checkoutBadge) checkoutBadge.style.display = appliedCoupon ? '' : 'none';
  setText('coupon-badge-text-cart', badgeText);
  setText('coupon-badge-text-checkout', badgeText);

  // Update cart count label
  const countLabel = document.getElementById('cart-count-label');
  if (countLabel) countLabel.textContent = `(${cartItems.length} item${cartItems.length !== 1 ? 's' : ''})`;

  // Update nav badge count
  document.querySelectorAll('.cart-badge-count').forEach(el => el.textContent = itemCount);

  // Update checkout mini items list
  renderCheckoutItemsList();

  // Update shipping bar
  updateShippingBar();
}

/** Helper to set text content safely */
function setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

/* ─────────────────────────────────────────────
   SHIPPING PROGRESS BAR
───────────────────────────────────────────── */
/**
 * Updates the free shipping progress bar width and message
 * based on current cart subtotal vs FREE_SHIPPING_THRESHOLD.
 */
function updateShippingBar() {
  const subtotal = getSubtotal();
  const fill = document.getElementById('shipping-bar-fill');
  const msg = document.getElementById('shipping-bar-msg');
  if (!fill || !msg) return;

  if (subtotal >= FREE_SHIPPING_THRESHOLD) {
    fill.style.width = '100%';
    msg.innerHTML = '<strong>🎉 You\'ve unlocked complimentary shipping!</strong>';
  } else {
    const remaining = FREE_SHIPPING_THRESHOLD - subtotal;
    const pct = Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100);
    fill.style.width = pct + '%';
    msg.innerHTML = `You're <strong>${formatPKR(remaining)}</strong> away from complimentary shipping!`;
  }
}

/* ─────────────────────────────────────────────
   CHECKOUT MINI ITEMS LIST
───────────────────────────────────────────── */
/** Renders the small items list inside the checkout order summary panel */
function renderCheckoutItemsList() {
  const container = document.getElementById('co-items-list');
  if (!container) return;
  container.innerHTML = '';
  cartItems.forEach(item => {
    const el = document.createElement('div');
    el.style.cssText = 'display:flex;align-items:center;gap:12px;';
    el.innerHTML = `
      <img src="${item.img}" alt="${item.name}"
        style="width:52px;height:52px;border-radius:10px;object-fit:cover;border:1px solid var(--border-light);flex-shrink:0;">
      <div style="flex:1;min-width:0;">
        <div style="font-size:0.84rem;font-weight:600;color:var(--text-dark);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${item.name}</div>
        <div style="font-size:0.72rem;color:var(--text-muted);">Qty: ${item.qty}</div>
      </div>
      <div style="font-size:0.88rem;font-weight:700;color:var(--primary-sage);flex-shrink:0;">${formatPKR(item.price * item.qty)}</div>
    `;
    container.appendChild(el);
  });
}

/* ─────────────────────────────────────────────
   QUANTITY CONTROLS
───────────────────────────────────────────── */
/**
 * Initialises all quantity +/- buttons and direct input fields.
 * Uses event delegation on the cart items container.
 */
function initQtyControls() {
  const container = document.getElementById('cart-items-container');
  if (!container) return;

  container.addEventListener('click', function (e) {
    const btn = e.target.closest('.qty-btn');
    if (!btn) return;
    const id = btn.dataset.id;
    const item = cartItems.find(i => i.id === id);
    if (!item) return;
    const input = document.getElementById('qty-' + id);

    if (btn.classList.contains('qty-plus')) {
      if (item.qty < 10) {
        item.qty++;
        if (input) input.value = item.qty;
        updateLineTotals(id);
        updateOrderSummary();
      }
    } else if (btn.classList.contains('qty-minus')) {
      if (item.qty > 1) {
        item.qty--;
        if (input) input.value = item.qty;
        updateLineTotals(id);
        updateOrderSummary();
      }
    }
  });

  container.addEventListener('change', function (e) {
    if (!e.target.classList.contains('qty-input')) return;
    const id = e.target.dataset.id;
    const item = cartItems.find(i => i.id === id);
    if (!item) return;
    let newQty = parseInt(e.target.value, 10);
    if (isNaN(newQty) || newQty < 1) newQty = 1;
    if (newQty > 10) newQty = 10;
    item.qty = newQty;
    e.target.value = newQty;
    updateLineTotals(id);
    updateOrderSummary();
  });
}

/** Updates the line total display for a specific item */
function updateLineTotals(id) {
  const item = cartItems.find(i => i.id === id);
  if (!item) return;
  const lineEl = document.getElementById('line-total-' + id);
  if (lineEl) lineEl.textContent = formatPKR(item.price * item.qty);
}

/* ─────────────────────────────────────────────
   REMOVE ITEMS
───────────────────────────────────────────── */
/**
 * Attaches remove-item handlers. Animates card out, then removes from DOM and state.
 */
function initRemoveButtons() {
  const container = document.getElementById('cart-items-container');
  if (!container) return;

  container.addEventListener('click', function (e) {
    const btn = e.target.closest('.remove-btn');
    if (!btn) return;
    const id = btn.dataset.id;
    const card = document.getElementById('cart-item-' + id);
    if (card) {
      card.style.transition = 'all 0.35s ease';
      card.style.opacity = '0';
      card.style.transform = 'translateX(-20px)';
      card.style.height = card.offsetHeight + 'px';
      card.style.overflow = 'hidden';
      setTimeout(() => {
        card.style.height = '0';
        card.style.padding = '0';
        card.style.margin = '0';
        setTimeout(() => {
          card.remove();
          cartItems = cartItems.filter(i => i.id !== id);
          updateOrderSummary();
          checkEmptyCart();
        }, 250);
      }, 300);
    }
  });
}

/** Shows empty cart state when all items are removed */
function checkEmptyCart() {
  const emptyState = document.getElementById('empty-cart-state');
  const shippingBar = document.getElementById('shipping-bar-section');
  const proceedBtn = document.getElementById('proceed-checkout-btn');
  const isEmpty = cartItems.length === 0;

  if (emptyState) emptyState.style.display = isEmpty ? '' : 'none';
  if (shippingBar) shippingBar.style.display = isEmpty ? 'none' : '';
  if (proceedBtn) proceedBtn.disabled = isEmpty;
}

/* ─────────────────────────────────────────────
   WISHLIST MOVE BUTTONS
───────────────────────────────────────────── */
/**
 * Handles "Move to Wishlist" — shows a confirmation toast then removes item from cart.
 */
function initWishlistMoveButtons() {
  const container = document.getElementById('cart-items-container');
  if (!container) return;

  container.addEventListener('click', function (e) {
    const btn = e.target.closest('.wishlist-move-btn');
    if (!btn) return;
    const id = btn.dataset.id;
    const item = cartItems.find(i => i.id === id);
    if (item) {
      showToast(`"${item.name}" moved to your wishlist.`);
      // Trigger the same remove logic
      const fakeRemoveBtn = document.querySelector(`.remove-btn[data-id="${id}"]`);
      if (fakeRemoveBtn) fakeRemoveBtn.click();
    }
  });
}

/* ─────────────────────────────────────────────
   COUPON TABS TOGGLE
───────────────────────────────────────────── */
/** Switches between Coupon Code and Gift Card panels */
function switchCouponTab(tab) {
  const couponPanel = document.getElementById('coupon-panel');
  const giftPanel = document.getElementById('giftcard-panel');
  const couponBtn = document.getElementById('coupon-tab-btn');
  const giftBtn = document.getElementById('giftcard-tab-btn');
  if (!couponPanel || !giftPanel) return;

  if (tab === 'coupon') {
    couponPanel.style.display = '';
    giftPanel.style.display = 'none';
    couponBtn.classList.add('active');
    giftBtn.classList.remove('active');
  } else {
    couponPanel.style.display = 'none';
    giftPanel.style.display = '';
    giftBtn.classList.add('active');
    couponBtn.classList.remove('active');
  }
}

/* ─────────────────────────────────────────────
   COUPON APPLY
───────────────────────────────────────────── */
/**
 * Validates entered coupon code and applies discount.
 * Valid codes: SEEMA15 (15% off), FREESHIP (free shipping).
 */
function applyCoupon() {
  const input = document.getElementById('coupon-input');
  if (!input) return;
  const code = input.value.trim().toUpperCase();
  const successMsg = document.getElementById('coupon-success-msg');
  const successText = document.getElementById('coupon-success-text');

  if (!code) {
    showToast('Please enter a coupon code.');
    return;
  }

  const validCoupons = {
    'SEEMA15':  { type: 'percent', value: 15, label: '15% discount applied!' },
    'FREESHIP': { type: 'freeship', value: 0, label: 'Free shipping applied!' },
    'SAVE10':   { type: 'percent', value: 10, label: '10% discount applied!' }
  };

  if (validCoupons[code]) {
    appliedCoupon = { code, ...validCoupons[code] };
    if (successMsg) successMsg.style.display = '';
    if (successText) successText.textContent = `Code "${code}" — ${validCoupons[code].label}`;
    input.value = '';
    input.disabled = true;
    updateOrderSummary();
    showToast(`✅ Coupon "${code}" applied successfully!`);
  } else {
    if (successMsg) successMsg.style.display = 'none';
    showToast(`❌ Coupon code "${code}" is not valid.`);
  }
}

/** Removes the currently applied coupon */
function removeCoupon() {
  appliedCoupon = null;
  const input = document.getElementById('coupon-input');
  const successMsg = document.getElementById('coupon-success-msg');
  if (input) { input.value = ''; input.disabled = false; }
  if (successMsg) successMsg.style.display = 'none';
  updateOrderSummary();
  showToast('Coupon removed.');
}

/** Validates gift card entry (demo only) */
function applyGiftCard() {
  const input = document.getElementById('giftcard-input');
  if (!input) return;
  const code = input.value.trim();
  if (!code || code.length < 8) {
    showToast('Please enter a valid gift card number.');
    return;
  }
  showToast('🎁 Gift card accepted! PKR 2,000 credit applied.');
  input.disabled = true;
}

/* ─────────────────────────────────────────────
   SHIPPING CALCULATOR
───────────────────────────────────────────── */
/**
 * Shows shipping options after city/country selection.
 * Selects standard by default.
 */
function calculateShipping() {
  const city = document.getElementById('ship-city');
  if (!city || !city.value) {
    showToast('Please select a city first.');
    return;
  }
  const results = document.getElementById('shipping-results');
  if (results) {
    results.style.display = '';
    results.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
  selectShipping('standard', 250, document.getElementById('ship-opt-standard'));
  showToast('Shipping rates calculated for ' + city.options[city.selectedIndex].text + '.');
}

/**
 * Selects a shipping option and updates the order summary.
 * @param {string} type - 'standard' or 'express'
 * @param {number} cost - shipping cost in PKR
 * @param {HTMLElement} el - the clicked shipping option card
 */
function selectShipping(type, cost, el) {
  selectedShipping = cost;
  document.querySelectorAll('.shipping-option-card').forEach(c => {
    c.classList.remove('selected');
    const radio = c.querySelector('input[type="radio"]');
    if (radio) radio.checked = false;
  });
  if (el) {
    el.classList.add('selected');
    const radio = el.querySelector('input[type="radio"]');
    if (radio) radio.checked = true;
  }
  updateOrderSummary();
}

/* ─────────────────────────────────────────────
   BILLING ADDRESS TOGGLE
───────────────────────────────────────────── */
/** Shows or hides the billing address section based on checkbox state */
function toggleBillingSection() {
  const checkbox = document.getElementById('same-address-check');
  const billingSection = document.getElementById('billing-address-section');
  if (!checkbox || !billingSection) return;
  billingSection.style.display = checkbox.checked ? 'none' : '';
}

/* ─────────────────────────────────────────────
   PAYMENT METHOD CARDS
───────────────────────────────────────────── */
/**
 * Selects a payment method card, deselects others,
 * and shows/hides the card details form.
 * @param {string} method - payment method id
 * @param {HTMLElement} el - clicked payment card element
 */
function selectPayment(method, el) {
  document.querySelectorAll('.payment-method-card').forEach(c => {
    c.classList.remove('selected');
    const radio = c.querySelector('.payment-radio');
    if (radio) radio.checked = false;
  });
  if (el) {
    el.classList.add('selected');
    const radio = el.querySelector('.payment-radio');
    if (radio) radio.checked = true;
  }
  const cardForm = document.getElementById('card-details-form');
  if (cardForm) cardForm.style.display = method === 'card' ? '' : 'none';
}

/* ─────────────────────────────────────────────
   PROGRESS BAR
───────────────────────────────────────────── */
/**
 * Sets progress bar step state.
 * @param {number} activeStep - 1, 2, or 3
 */
function initProgressBar(activeStep) {
  for (let i = 1; i <= 3; i++) {
    const step = document.getElementById('step-' + i);
    if (!step) continue;
    step.classList.remove('active', 'completed');
    if (i < activeStep) step.classList.add('completed');
    else if (i === activeStep) step.classList.add('active');
  }
  // Update connectors
  const c1 = document.getElementById('connector-1');
  const c2 = document.getElementById('connector-2');
  if (c1) c1.classList.toggle('completed', activeStep > 1);
  if (c2) c2.classList.toggle('completed', activeStep > 2);
}

/* ─────────────────────────────────────────────
   CHECKOUT FLOW
───────────────────────────────────────────── */
/**
 * Hides the cart section and shows the checkout form section.
 * Advances progress bar to step 2. Scrolls to top of page.
 */
function proceedToCheckout() {
  if (cartItems.length === 0) {
    showToast('Your bag is empty. Add items before checking out.');
    return;
  }
  const cartSection = document.getElementById('cart-page-section');
  const checkoutSection = document.getElementById('checkout-section');
  if (cartSection) cartSection.style.display = 'none';
  if (checkoutSection) checkoutSection.style.display = '';

  // Sync order notes from cart to checkout
  const cartNotes = document.getElementById('order-notes-cart');
  const checkoutNotes = document.getElementById('order-notes-checkout');
  if (cartNotes && checkoutNotes && cartNotes.value) {
    checkoutNotes.value = cartNotes.value;
  }

  initProgressBar(2);
  updateOrderSummary();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Returns user from checkout form back to cart view.
 */
function backToCart() {
  const cartSection = document.getElementById('cart-page-section');
  const checkoutSection = document.getElementById('checkout-section');
  if (cartSection) cartSection.style.display = '';
  if (checkoutSection) checkoutSection.style.display = 'none';
  initProgressBar(1);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ─────────────────────────────────────────────
   PLACE ORDER
───────────────────────────────────────────── */
/**
 * Validates form fields, then if valid:
 * hides checkout section, shows order success section,
 * updates progress bar to step 3, generates order number.
 */
function placeOrder() {
  // Required field validation
  const requiredFields = [
    { id: 'first-name',  label: 'First Name' },
    { id: 'last-name',   label: 'Last Name' },
    { id: 'email-addr',  label: 'Email Address' },
    { id: 'phone-num',   label: 'Phone Number' },
    { id: 'address-1',   label: 'Street Address' },
    { id: 'city-name',   label: 'City' },
    { id: 'province',    label: 'Province' }
  ];

  let isValid = true;
  let firstInvalid = null;

  requiredFields.forEach(field => {
    const el = document.getElementById(field.id);
    if (!el) return;
    const val = el.value.trim();
    if (!val) {
      isValid = false;
      el.style.borderColor = '#dc3545';
      el.style.boxShadow = '0 0 0 3px rgba(220,53,69,0.15)';
      if (!firstInvalid) firstInvalid = el;
    } else {
      el.style.borderColor = '';
      el.style.boxShadow = '';
    }
  });

  // Email format check
  const emailEl = document.getElementById('email-addr');
  if (emailEl && emailEl.value.trim()) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailEl.value.trim())) {
      isValid = false;
      emailEl.style.borderColor = '#dc3545';
      emailEl.style.boxShadow = '0 0 0 3px rgba(220,53,69,0.15)';
      if (!firstInvalid) firstInvalid = emailEl;
      showToast('Please enter a valid email address.');
    }
  }

  if (!isValid) {
    if (firstInvalid) firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
    showToast('Please fill in all required fields.');
    return;
  }

  // Generate random order number
  const orderNum = 'DS-2026-' + String(Math.floor(10000 + Math.random() * 90000));
  const firstName = (document.getElementById('first-name').value.trim().split(' ')[0]) || 'Valued Customer';

  // Update success section
  setText('order-number-display', '#' + orderNum);
  setText('order-success-msg', `Thank you, ${firstName}! Your clinical skincare is on its way.`);

  // Transition: hide checkout, show success
  const checkoutSection = document.getElementById('checkout-section');
  const successSection = document.getElementById('order-success-section');
  if (checkoutSection) checkoutSection.style.display = 'none';
  if (successSection) successSection.style.display = '';

  // Update progress bar to step 3
  initProgressBar(3);

  // Clear cart state
  cartItems = [];
  document.querySelectorAll('.cart-badge-count').forEach(el => el.textContent = '0');

  window.scrollTo({ top: 0, behavior: 'smooth' });
  showToast('🎉 Order placed! Confirmation email sent.');
}

/* ─────────────────────────────────────────────
   SCROLL REVEAL
───────────────────────────────────────────── */
/** IntersectionObserver-based scroll reveal for elements with reveal classes */
function initScrollReveal() {
  const revealClasses = [
    '.reveal-on-scroll', '.reveal-fade-left', '.reveal-fade-right', '.reveal-scale'
  ];
  const elements = document.querySelectorAll(revealClasses.join(','));
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  elements.forEach(el => observer.observe(el));
}

/* ─────────────────────────────────────────────
   HEADER SCROLL EFFECT
───────────────────────────────────────────── */
/** Adds/removes .scrolled class on header for background change on scroll */
function initHeaderScroll() {
  const header = document.getElementById('main-header');
  if (!header) return;
  function onScroll() {
    header.classList.toggle('scrolled', window.scrollY > 50);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ─────────────────────────────────────────────
   DRAWERS (cart, search, quickview, mobile nav)
───────────────────────────────────────────── */
/** Initialises cart drawer, search overlay, quickview, and mobile nav drawers */
function initDrawers() {
  const backdrop = document.getElementById('cart-backdrop');
  const cartDrawer = document.getElementById('cart-drawer');
  const cartTriggers = document.querySelectorAll('.cart-trigger-btn');
  const cartCloseBtn = document.querySelector('.cart-close-btn');

  function openCart() {
    if (cartDrawer) cartDrawer.classList.add('active');
    if (backdrop) backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  function closeCart() {
    if (cartDrawer) cartDrawer.classList.remove('active');
    if (backdrop) backdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  cartTriggers.forEach(btn => btn.addEventListener('click', openCart));
  if (cartCloseBtn) cartCloseBtn.addEventListener('click', closeCart);
  if (backdrop) backdrop.addEventListener('click', closeCart);

  // Search overlay
  const searchTriggers = document.querySelectorAll('.search-trigger-btn');
  const searchOverlay = document.getElementById('search-overlay');
  const searchCloseBtn = document.querySelector('.search-close-btn');
  const searchInput = document.getElementById('search-input');

  searchTriggers.forEach(btn => btn.addEventListener('click', () => {
    if (searchOverlay) { searchOverlay.classList.add('active'); if (searchInput) searchInput.focus(); }
  }));
  if (searchCloseBtn) searchCloseBtn.addEventListener('click', () => searchOverlay && searchOverlay.classList.remove('active'));
  if (searchOverlay) searchOverlay.addEventListener('click', (e) => {
    if (e.target === searchOverlay) searchOverlay.classList.remove('active');
  });

  // Quickview close
  const qvModal = document.getElementById('quickview-modal');
  const qvClose = document.querySelector('.quickview-close-btn');
  if (qvClose) qvClose.addEventListener('click', () => qvModal && qvModal.classList.remove('active'));
  if (qvModal) qvModal.addEventListener('click', (e) => { if (e.target === qvModal) qvModal.classList.remove('active'); });

  // Escape key closes any open overlay
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCart();
      if (searchOverlay) searchOverlay.classList.remove('active');
      if (qvModal) qvModal.classList.remove('active');
    }
  });
}

/* ─────────────────────────────────────────────
   NEWSLETTER
───────────────────────────────────────────── */
/** Newsletter form submission handler */
function initNewsletter() {
  const form = document.getElementById('newsletter-form');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const input = form.querySelector('.newsletter-input');
    const email = input ? input.value.trim() : '';
    if (email) {
      showToast(`🌿 Welcome to Club Seema! Your 15% off code has been sent to ${email}.`);
      if (input) input.value = '';
    }
  });
}

/* ─────────────────────────────────────────────
   LUXURY TOAST
───────────────────────────────────────────── */
/**
 * Displays a luxury toast notification (matching other pages).
 * Creates dynamically if not present in DOM.
 * @param {string} message - message to display
 */
function showToast(message) {
  let toast = document.getElementById('luxury-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'luxury-toast';
    toast.style.cssText = `
      position:fixed; bottom:28px; left:50%; transform:translateX(-50%) translateY(20px);
      background:var(--dark-forest); color:#fff; padding:14px 26px;
      border-radius:var(--radius-full); font-size:0.9rem; font-weight:600;
      box-shadow:0 12px 40px rgba(0,0,0,0.35); z-index:99999;
      opacity:0; transition:all 0.4s var(--transition-smooth);
      max-width:90vw; text-align:center; pointer-events:none;
      border:1px solid rgba(200,230,213,0.2);
    `;
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.style.opacity = '1';
  toast.style.transform = 'translateX(-50%) translateY(0)';

  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-50%) translateY(20px)';
  }, 3200);
}

/* ─────────────────────────────────────────────
   CARD NUMBER FORMATTING
───────────────────────────────────────────── */
/** Auto-formats card number input with spaces every 4 digits */
function initCardFormatting() {
  const cardInput = document.getElementById('card-number');
  if (!cardInput) return;
  cardInput.addEventListener('input', function () {
    let val = this.value.replace(/\D/g, '').substring(0, 16);
    this.value = val.replace(/(.{4})/g, '$1  ').trim();
  });

  const expiryInput = document.getElementById('card-expiry');
  if (!expiryInput) return;
  expiryInput.addEventListener('input', function () {
    let val = this.value.replace(/\D/g, '').substring(0, 4);
    if (val.length >= 2) val = val.substring(0, 2) + ' / ' + val.substring(2);
    this.value = val;
  });
}

/* ─────────────────────────────────────────────
   DOMContentLoaded — INIT ALL
───────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', function () {

  // Initialise all cart functionality
  initQtyControls();
  initRemoveButtons();
  initWishlistMoveButtons();
  initScrollReveal();
  initHeaderScroll();
  initDrawers();
  initNewsletter();
  initCardFormatting();

  // Set initial progress bar state
  initProgressBar(1);

  // Run initial summary calculation
  updateOrderSummary();

  // Reveal app content (matches loader behaviour from global JS)
  const appContent = document.getElementById('app-content');
  if (appContent) {
    setTimeout(() => {
      appContent.style.opacity = '1';
    }, 400);
  }

  // Hide luxury loader if present
  const loader = document.getElementById('luxury-loader');
  if (loader) {
    setTimeout(() => {
      loader.style.opacity = '0';
      loader.style.pointerEvents = 'none';
      setTimeout(() => loader.style.display = 'none', 500);
    }, 800);
  }
});
