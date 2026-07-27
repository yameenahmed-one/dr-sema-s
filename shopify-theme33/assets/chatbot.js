/* ==========================================================
   DR. SEEMA'S SKINCARE — CHATBOT WIDGET
   Self-contained IIFE — no external dependencies
   ========================================================== */
(function () {
  'use strict';

  /* ── CSS ──────────────────────────────────────────────── */
  var style = document.createElement('style');
  style.textContent = `
    :root{--cb-sage:#2F6B66;--cb-dark:#152221;--cb-mint:#C8E6D5;--cb-light:#F5F8F7;}
    #cb-widget{position:fixed;bottom:24px;right:24px;z-index:99999;font-family:'Plus Jakarta Sans',system-ui,sans-serif;}
    #cb-fab{width:60px;height:60px;border-radius:50%;background:var(--cb-sage);color:#fff;border:none;cursor:pointer;
      box-shadow:0 8px 28px rgba(47,107,102,0.45);display:flex;align-items:center;justify-content:center;
      font-size:1.5rem;transition:transform .3s ease,box-shadow .3s ease;position:relative;}
    #cb-fab:hover{transform:scale(1.1);box-shadow:0 12px 36px rgba(47,107,102,0.55);}
    #cb-badge{position:absolute;top:2px;right:2px;width:14px;height:14px;border-radius:50%;
      background:#e63946;border:2px solid #fff;display:none;}
    #cb-window{width:380px;height:520px;background:#fff;border-radius:20px;
      box-shadow:0 20px 60px rgba(0,0,0,0.22);display:flex;flex-direction:column;overflow:hidden;
      position:absolute;bottom:74px;right:0;
      transform:scale(0.85) translateY(20px);opacity:0;pointer-events:none;
      transform-origin:bottom right;transition:all .3s cubic-bezier(.16,1,.3,1);}
    #cb-window.open{transform:scale(1) translateY(0);opacity:1;pointer-events:auto;}
    #cb-header{background:var(--cb-dark);padding:14px 18px;display:flex;align-items:center;gap:12px;flex-shrink:0;}
    #cb-header-seal{width:36px;height:36px;border-radius:50%;background:var(--cb-sage);color:#fff;
      font-size:0.9rem;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;}
    #cb-header-info{flex:1;}
    #cb-header-name{color:#fff;font-size:0.88rem;font-weight:700;}
    #cb-header-status{color:var(--cb-mint);font-size:0.7rem;display:flex;align-items:center;gap:4px;}
    #cb-header-dot{width:7px;height:7px;border-radius:50%;background:#4caf50;}
    #cb-close{background:none;border:none;color:rgba(255,255,255,.6);cursor:pointer;font-size:1.1rem;
      transition:color .2s;padding:4px;}
    #cb-close:hover{color:#fff;}
    #cb-messages{flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:10px;
      background:#f9fbfa;scrollbar-width:thin;scrollbar-color:rgba(47,107,102,.2) transparent;}
    #cb-messages::-webkit-scrollbar{width:4px;}
    #cb-messages::-webkit-scrollbar-thumb{background:rgba(47,107,102,.2);border-radius:2px;}
    .cb-row-bot{display:flex;align-items:flex-end;gap:8px;}
    .cb-row-user{display:flex;justify-content:flex-end;}
    .cb-avatar{width:28px;height:28px;border-radius:50%;background:var(--cb-sage);color:#fff;
      font-size:0.7rem;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;}
    .cb-bubble-bot{background:var(--cb-light);border:1px solid rgba(47,107,102,.12);
      color:#1A2928;padding:10px 14px;border-radius:16px 16px 16px 4px;
      font-size:0.84rem;line-height:1.55;max-width:270px;word-break:break-word;white-space:pre-wrap;}
    .cb-bubble-user{background:var(--cb-sage);color:#fff;padding:10px 14px;
      border-radius:16px 16px 4px 16px;font-size:0.84rem;line-height:1.55;max-width:260px;word-break:break-word;}
    .cb-time{font-size:0.62rem;color:#9bb;margin-top:3px;text-align:right;}
    .cb-qr{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px;max-width:290px;}
    .cb-qbtn{background:#fff;border:1.5px solid var(--cb-sage);color:var(--cb-sage);
      border-radius:999px;padding:5px 13px;font-size:0.76rem;font-weight:600;cursor:pointer;
      transition:all .2s;font-family:inherit;}
    .cb-qbtn:hover{background:var(--cb-sage);color:#fff;}
    .cb-typing{display:flex;align-items:center;gap:5px;padding:10px 14px;
      background:var(--cb-light);border:1px solid rgba(47,107,102,.12);
      border-radius:16px 16px 16px 4px;width:fit-content;}
    .cb-dot{width:7px;height:7px;border-radius:50%;background:#8aada9;animation:cb-bounce .9s infinite;}
    .cb-dot:nth-child(2){animation-delay:.15s;}
    .cb-dot:nth-child(3){animation-delay:.3s;}
    @keyframes cb-bounce{0%,60%,100%{transform:translateY(0)}30%{transform:translateY(-6px)}}
    #cb-input-area{padding:12px 14px;border-top:1px solid rgba(47,107,102,.1);
      display:flex;gap:8px;align-items:center;background:#fff;flex-shrink:0;}
    #cb-input{flex:1;border:1.5px solid rgba(47,107,102,.18);border-radius:999px;
      padding:9px 16px;font-size:0.85rem;font-family:inherit;outline:none;
      color:#1A2928;transition:border-color .2s;}
    #cb-input:focus{border-color:var(--cb-sage);}
    #cb-send{width:38px;height:38px;border-radius:50%;background:var(--cb-sage);
      border:none;color:#fff;cursor:pointer;font-size:1rem;
      display:flex;align-items:center;justify-content:center;transition:background .2s;}
    #cb-send:hover{background:#214F4B;}
    @media(max-width:480px){
      #cb-widget{bottom:0;right:0;left:0;}
      #cb-fab{bottom:16px;right:16px;position:fixed;}
      #cb-window{width:100%;border-radius:20px 20px 0 0;bottom:0;right:0;height:80vh;position:fixed;}
    }
  `;
  document.head.appendChild(style);

  /* ── KNOWLEDGE BASE ───────────────────────────────────── */
  var KB = [
    {
      id:'greet',
      patterns:['hello','hi','salam','assalam','hey','good morning','good evening','good afternoon','namaste','hola','bonjour'],
      response:'Assalam o Alaikum! 👋 Welcome to Dr. Seema\'s Clinical Skincare.\n\nI\'m your personal skincare assistant. I can help you with:\n\n• Products & formulations\n• Skin concerns & routines\n• Orders, shipping & returns\n• About Dr. Seema\n\nHow can I help you today? ✨',
      qr:['Browse Products','My Skin Concern','Track Order','About Dr. Seema']
    },
    {
      id:'products',
      patterns:['product','shop','buy','formulation','serum','cream','cleanser','oil','sunscreen','skincare','moisturizer','moisturiser','toner'],
      response:'We have 48+ dermatologist-formulated products:\n\n💚 Cellular Renewal Serum — PKR 8,800\n💚 Deep Moisture Barrier Cream — PKR 7,600\n💚 Vitamin C Luminous Concentrate — PKR 9,200\n💚 Radiant Glow Barrier Elixir — PKR 8,400\n💚 Calming Gentle Cleanser — PKR 5,200\n💚 Firming Peptide Eye Essence — PKR 6,800\n\nAll formulations are dermatologist-certified, cruelty-free & fragrance-free.',
      qr:['View All Products','Best Sellers','New Arrivals','Skin Concern Guide']
    },
    {
      id:'acne',
      patterns:['acne','breakout','pimple','blackhead','whitehead','pore','blemish','zit','spots'],
      response:'For acne-prone skin Dr. Seema recommends:\n\n🌿 Morning: Calming Cleanser → Vitamin C → Moisturiser → SPF 50+\n🌙 Night: Double Cleanse → Cellular Renewal Serum → Barrier Cream\n\nKey actives: Salicylic Acid 2%, Niacinamide 10%, Zinc PCA\n\n91% breakout reduction reported in just 28 days! ✨',
      qr:['Shop Acne Products','Acne Routine','Book Consultation']
    },
    {
      id:'pigmentation',
      patterns:['pigmentation','dark spot','melasma','uneven','hyperpigmentation','dull','brightening','whitening','tone','spot','mark'],
      response:'Hyperpigmentation is the #1 concern for South Asian skin. Dr. Seema recommends:\n\n✨ Hero: Vitamin C Luminous Concentrate (15% L-Ascorbic Acid)\n✨ Also: Cellular Renewal Serum with Alpha Arbutin & Niacinamide\n\n💡 Key tip: SPF 50+ every morning is mandatory — without it, brightening actives lose 80% of their effect!\n\n96% spot reduction in 6 weeks! 🌟',
      qr:['Shop Brightening','Full Routine','SPF Advice']
    },
    {
      id:'dryskin',
      patterns:['dry','dehydrat','flak','tight','moisture','hydration','barrier','ceramide','rough','peel'],
      response:'For dry & dehydrated skin:\n\n💧 Deep Moisture Barrier Cream — 72-hr Ceramide NP + Hyaluronic Acid — PKR 7,600\n💧 Radiant Glow Barrier Elixir — Squalane + Sacred Lotus — PKR 8,400\n\n💡 Dr. Seema\'s tip: Apply HA serum on damp skin, then seal with cream, then oil. Layer in that order!\n\n100% of patients reported hydration boost! 🌊',
      qr:['Shop Hydration','Dry Skin Routine']
    },
    {
      id:'oilyskin',
      patterns:['oily','shine','shiny','greasy','pore','sebum','congestion','large pore'],
      response:'For oily & congested skin:\n\n🍃 Calming Gentle Cleanser — BHA-infused — PKR 5,200\n🍃 Cellular Renewal Serum — Niacinamide 10% — PKR 8,800\n\n💡 NEVER skip moisturiser — it prevents sebum rebound!\n\nNiacinamide 10% reduces sebum by 52% in just 4 weeks! 🌿',
      qr:['Shop Oily Skin','Oily Skin Routine']
    },
    {
      id:'sensitive',
      patterns:['sensitive','redness','rosacea','reactive','sting','flush','allerg','irritat','fragrance'],
      response:'All Dr. Seema\'s formulas are tested for sensitive skin:\n\n🌸 Deep Moisture Barrier Cream — Centella Asiatica, 100% fragrance-free — PKR 7,600\n🌸 Calming Gentle Cleanser — Colloidal Oat + Allantoin — PKR 5,200\n\n💡 Use Mineral SPF only (Zinc Oxide) — chemical UV filters cause stinging!\n\n94% redness reduction in 3 weeks! 💕',
      qr:['Shop Sensitive','Patch Test Guide']
    },
    {
      id:'aging',
      patterns:['aging','anti aging','wrinkle','fine line','firm','elasticit','collagen','peptide','retinol','crow','forehead line'],
      response:'Dr. Seema\'s anti-aging protocol:\n\n⏳ Cellular Renewal Serum — Bio-Retinol + Quad-Peptide — PKR 8,800\n⏳ Firming Peptide Eye Essence — Matrixyl 3000 — PKR 6,800\n\n💡 UV causes 80% of visible aging — SPF 50+ daily is the #1 anti-aging step!\n\n96% firmness improvement in 4 weeks clinical trial! ✨',
      qr:['Shop Anti-Aging','Anti-Aging Routine']
    },
    {
      id:'vitaminc',
      patterns:['vitamin c','vit c','ascorbic','luminous'],
      response:'Our Vitamin C Luminous Concentrate is our #1 brightening product:\n\n✨ 15% L-Ascorbic Acid + Ferulic Acid + Vitamin E\n✨ Clinically proven for hyperpigmentation\n✨ PKR 9,200 (was PKR 11,000)\n\n💡 Apply 3–4 drops on damp skin every morning before SPF.\n\nStorage tip: Keep cool & dark — Vitamin C oxidises in heat & light! ☀️',
      qr:['Buy Vitamin C','Morning Routine']
    },
    {
      id:'collections',
      patterns:['collection','category','range','line','series','bundle','gift set','gift'],
      response:'We have 12 curated clinical collections:\n\n🌿 New Arrivals · Best Sellers\n🌿 Vitamin C Radiance · Acne Care & BHA\n🌿 72-Hr Hydration · Sensitive & Rosacea\n🌿 Anti-Aging · Pigmentation & Dark Spots\n🌿 Daily Essentials · Sun Protection\n🌿 Night Repair · Luxury Gift Sets\n\nEach collection is personally curated by Dr. Seema! 💚',
      qr:['View Collections','Find My Concern']
    },
    {
      id:'shipping',
      patterns:['shipping','delivery','dispatch','courier','tcs','how long','arrive','deliver','track','when will'],
      response:'Dr. Seema\'s delivery info:\n\n🚚 Standard (3–5 days): PKR 250 via TCS Express\n🚀 Express (1–2 days): PKR 500 via TCS Overnight\n🎁 FREE shipping on orders above PKR 12,000!\n\nDelivery to all Pakistan cities. International shipping: UAE, UK & Canada.\n\nTracking number sent via SMS & email after dispatch! 📦',
      qr:['Place an Order','Return Policy']
    },
    {
      id:'returns',
      patterns:['return','refund','exchange','money back','damage','wrong product','complaint','cancel'],
      response:'Dr. Seema\'s return policy:\n\n✅ 7-day easy returns on all products\n✅ 100% refund if product is damaged or wrong\n✅ Exchange within 14 days of purchase\n\n📧 Email: support@drseemasproducts.pk\nInclude your order number + photo.\n\nOur team responds within 24 hours! 💚',
      qr:['Contact Support','Place New Order']
    },
    {
      id:'payment',
      patterns:['payment','pay','cash','cod','cash on delivery','visa','mastercard','online','card','easypaisa','jazzcash','paypal','apple pay','google pay'],
      response:'We accept all major payment methods:\n\n💳 Credit/Debit Card (Visa, Mastercard, UBL)\n💰 Cash on Delivery — nationwide!\n📱 PayPal · Apple Pay · Google Pay\n\nAll online payments are SSL encrypted 🔒\n\nCOD: Pay in cash when your order arrives — no prepayment needed!',
      qr:['Go to Checkout','Shipping Info']
    },
    {
      id:'about',
      patterns:['dr seema','doctor','founder','who is','about','dermatologist','qualified','certified','experience','biography'],
      response:'About Dr. Seema:\n\n👩‍⚕️ Board-certified Dermatologist — 18+ years\n🎓 FCPS Dermatology — CPSP Pakistan (2005)\n🏥 Fellowship — King\'s College London (2010)\n📚 14 peer-reviewed publications\n🏆 12 international awards\n👥 50,000+ patients treated\n\nShe founded this brand to bring clinical-grade skincare to Pakistan! 💚',
      qr:['Visit About Page','Book Consultation']
    },
    {
      id:'consult',
      patterns:['consult','consultation','appointment','book','advice','skin test','recommend','which product','what should i use','skin analysis'],
      response:'Dr. Seema\'s team offers:\n\n📱 Free Virtual Consultation\n💻 Skin Concern Guide — explore by concern type\n📋 Routine Builder — personalised 3-step routine\n\nTo book:\n📞 +92 (042) 3555-SEEMA\n📧 support@drseemasproducts.pk\n\nOr visit our Skin Concerns page for detailed treatment guides! ✨',
      qr:['Skin Concerns Page','Contact Us','Routine Builder']
    },
    {
      id:'contact',
      patterns:['contact','phone','email','address','location','whatsapp','reach','customer','support','help','helpline'],
      response:'Reach Dr. Seema\'s team:\n\n📧 support@drseemasproducts.pk\n📞 +92 (042) 3555-SEEMA\n📍 Gulberg III, Lahore, Pakistan\n\n⏰ Business hours: Mon–Sat, 9am–6pm PKT\n\n📸 Instagram · Facebook · TikTok · Pinterest\n\nWe respond within 2–4 hours during business hours! 💬',
      qr:['Book Consultation','Visit About Page']
    },
    {
      id:'ingredients',
      patterns:['ingredient','paraben','sulfate','fragrance','organic','natural','clean','safe','halal','cruelty','chemical','toxic'],
      response:'Dr. Seema\'s formulation standards:\n\n🌿 1,400+ restricted ingredients — none used\n✅ Zero parabens, sulfates, phthalates\n✅ 100% fragrance-free (certified)\n✅ Cruelty-free — Leaping Bunny certified\n✅ Organic USDA certified botanicals\n✅ ISO 22716 GMP manufacturing\n\nKey actives: Bio-Retinol, Ceramide NP, Niacinamide 10%, 15% Vitamin C, Triple Hyaluronic Acid, Centella Asiatica 💚',
      qr:['Shop Clean Products','Sensitive Skin Safe']
    },
    {
      id:'spf',
      patterns:['spf','sunscreen','sun','uv','sun protection','zinc','mineral sunscreen'],
      response:'Sun protection is Dr. Seema\'s #1 recommendation:\n\n☀️ SPF 50+ every single day — ALL skin types\n☀️ Sensitive skin: Mineral Zinc Oxide only\n☀️ Reapply every 2 hours outdoors\n\nDr. Seema says:\n"SPF is the single most powerful anti-aging AND anti-pigmentation step available — cheaper than any serum!" 💚',
      qr:['Shop Sun Protection','Pigmentation Routine']
    },
    {
      id:'price',
      patterns:['price','cost','how much','expensive','affordable','discount','sale','offer','promo','coupon','cheap'],
      response:'Our product prices:\n\n💚 Calming Gentle Cleanser — PKR 5,200\n💚 Firming Peptide Eye Essence — PKR 6,800\n💚 Deep Moisture Barrier Cream — PKR 7,600\n💚 Radiant Glow Barrier Elixir — PKR 8,400\n💚 Cellular Renewal Serum — PKR 8,800\n💚 Vitamin C Concentrate — PKR 9,200\n\n🏷️ Use code SEEMA15 for 15% off your first order!\n🚚 Free shipping above PKR 12,000!',
      qr:['Shop Now','Apply Coupon','View Cart']
    },
    {
      id:'cart',
      patterns:['cart','order','checkout','purchase','bag','add to cart','how to order','place order','buy now'],
      response:'How to order:\n\n1️⃣ Browse products at /shop\n2️⃣ Add items to your bag\n3️⃣ Go to /cart to review\n4️⃣ Enter shipping address\n5️⃣ Choose payment (Card, COD, PayPal)\n6️⃣ Confirm — get SMS & email!\n\n📦 Delivery in 3–5 days via TCS Express\n🎁 Free shipping above PKR 12,000!',
      qr:['Go to Cart','Shipping Info','Payment Options']
    },
    {
      id:'concerns',
      patterns:['skin concern','concern','skin type','which','guide','problem','issue','skin issue','what should'],
      response:'Our Skin Concerns page has complete guides for:\n\n🔴 Acne & Breakouts\n🟡 Hyperpigmentation\n🟤 Dark Spots & Marks\n💧 Dry & Dehydrated Skin\n💦 Oily & Congested Skin\n🌸 Sensitive & Rosacea\n⏳ Aging & Firmness\n🫧 Wrinkles & Fine Lines\n\nEach includes: symptoms, products, AM/PM routines, ingredients, before/after & FAQs!',
      qr:['Visit Skin Concerns','Tell Me My Concern']
    }
  ];

  /* ── PAGE LINKS ───────────────────────────────────────── */
  var PAGE_LINKS = {
    'View All Products': '/shop',
    'Best Sellers': '/shop?filter=bestseller',
    'New Arrivals': '/shop?filter=new',
    'Shop Acne Products': '/skin-concerns#acne',
    'Shop Brightening': '/skin-concerns#pigmentation',
    'Shop Hydration': '/skin-concerns#dryskin',
    'Shop Oily Skin': '/skin-concerns#oilyskin',
    'Shop Sensitive': '/skin-concerns#sensitive',
    'Shop Anti-Aging': '/skin-concerns#aging',
    'Shop Sun Protection': '/skin-concerns#wrinkles',
    'Shop Clean Products': '/shop',
    'Sensitive Skin Safe': '/skin-concerns#sensitive',
    'Shop Now': '/shop',
    'Buy Vitamin C': '/shop',
    'View Collections': '/collections',
    'Visit About Page': '/about',
    'Visit Skin Concerns': '/skin-concerns',
    'Skin Concerns Page': '/skin-concerns',
    'Go to Cart': '/cart',
    'View Cart': '/cart',
    'Go to Checkout': '/cart',
    'Place an Order': '/shop',
    'Place New Order': '/shop',
    'Browse Products': '/shop',
    'My Skin Concern': '/skin-concerns',
    'Find My Concern': '/skin-concerns',
    'Skin Concern Guide': '/skin-concerns',
    'Routine Builder': '/skin-concerns'
  };

  /* ── CONVERSATION HISTORY (for context) ──────────────── */
  var chatHistory = [];

  /* ── GEMINI API CALL ──────────────────────────────────── */
  async function getGeminiReply(userText) {
    try {
      var res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userText,
          history: chatHistory.slice(-10) // send last 10 turns for context
        })
      });
      var data = await res.json();
      if (data.reply) {
        // Save turn to history
        chatHistory.push({ role: 'user',  parts: [{ text: userText }] });
        chatHistory.push({ role: 'model', parts: [{ text: data.reply }] });
        return data.reply;
      }
      return 'Maafi chahta hoon, abhi jawab nahi de pa raha. Thodi der mein try karein! 😊';
    } catch (e) {
      return 'Connection issue! Please check your internet and try again. 🌐';
    }
  }

  /* ── QUICK REPLIES based on topic keywords ─────────────── */
  function getQuickReplies(text) {
    var t = (text || '').toLowerCase();
    if (t.match(/acne|breakout|pimple|pore/))        return ['Shop Acne Products','Acne Routine','Book Consultation'];
    if (t.match(/pigment|dark spot|melasma|tone/))   return ['Shop Brightening','Full Routine','SPF Advice'];
    if (t.match(/dry|dehydrat|flak|moisture/))       return ['Shop Hydration','Dry Skin Routine'];
    if (t.match(/oily|shine|sebum/))                 return ['Shop Oily Skin','Oily Skin Routine'];
    if (t.match(/sensitive|redness|rosacea/))        return ['Shop Sensitive','Skin Concerns Page'];
    if (t.match(/aging|wrinkle|fine line|peptide/))  return ['Shop Anti-Aging','Anti-Aging Routine'];
    if (t.match(/product|shop|buy|serum|cream/))     return ['View All Products','Best Sellers','View Collections'];
    if (t.match(/ship|deliver|order|track/))         return ['Place an Order','Return Policy'];
    if (t.match(/price|cost|coupon|discount/))       return ['Shop Now','Go to Cart'];
    if (t.match(/hi|hello|salam|hey/))               return ['Browse Products','My Skin Concern','About Dr. Seema'];
    return ['Browse Products','Skin Concerns','Contact Us'];
  }

  /* ── DOM STATE ────────────────────────────────────────── */
  var isOpen = false;
  var typingEl = null;

  /* ── TIMESTAMP ────────────────────────────────────────── */
  function getTime() {
    var d = new Date();
    var h = d.getHours(), m = d.getMinutes();
    var ampm = h >= 12 ? 'PM' : 'AM';
    h = h % 12 || 12;
    return h + ':' + (m < 10 ? '0' + m : m) + ' ' + ampm;
  }

  /* ── ADD MESSAGE ──────────────────────────────────────── */
  function addMessage(text, sender, qrList) {
    var msgs = document.getElementById('cb-messages');
    if (!msgs) return;

    var row = document.createElement('div');
    row.className = sender === 'bot' ? 'cb-row-bot' : 'cb-row-user';

    if (sender === 'bot') {
      var av = document.createElement('div');
      av.className = 'cb-avatar';
      av.textContent = 'DS';
      row.appendChild(av);
    }

    var wrap = document.createElement('div');

    var bubble = document.createElement('div');
    bubble.className = sender === 'bot' ? 'cb-bubble-bot' : 'cb-bubble-user';
    bubble.textContent = text;
    wrap.appendChild(bubble);

    var ts = document.createElement('div');
    ts.className = 'cb-time';
    ts.textContent = getTime();
    wrap.appendChild(ts);

    if (sender === 'bot' && qrList && qrList.length) {
      var qrDiv = document.createElement('div');
      qrDiv.className = 'cb-qr';
      qrList.forEach(function (label) {
        var btn = document.createElement('button');
        btn.className = 'cb-qbtn';
        btn.textContent = label;
        btn.addEventListener('click', function () {
          if (PAGE_LINKS[label]) {
            window.location.href = PAGE_LINKS[label];
          } else {
            handleUserInput(label);
          }
        });
        qrDiv.appendChild(btn);
      });
      wrap.appendChild(qrDiv);
    }

    row.appendChild(wrap);
    msgs.appendChild(row);
    msgs.scrollTop = msgs.scrollHeight;
  }

  /* ── TYPING INDICATOR ─────────────────────────────────── */
  function showTyping() {
    var msgs = document.getElementById('cb-messages');
    if (!msgs) return;
    var row = document.createElement('div');
    row.className = 'cb-row-bot';
    row.id = 'cb-typing-row';
    var av = document.createElement('div');
    av.className = 'cb-avatar';
    av.textContent = 'DS';
    row.appendChild(av);
    var t = document.createElement('div');
    t.className = 'cb-typing';
    t.innerHTML = '<div class="cb-dot"></div><div class="cb-dot"></div><div class="cb-dot"></div>';
    row.appendChild(t);
    msgs.appendChild(row);
    msgs.scrollTop = msgs.scrollHeight;
  }

  function hideTyping() {
    var el = document.getElementById('cb-typing-row');
    if (el) el.remove();
  }

  /* ── HANDLE USER INPUT ────────────────────────────────── */
  function handleUserInput(text) {
    var trimmed = text.trim();
    if (!trimmed) return;
    var input = document.getElementById('cb-input');
    if (input) input.value = '';
    // disable input while waiting
    if (input) input.disabled = true;
    var sendBtn = document.getElementById('cb-send');
    if (sendBtn) sendBtn.disabled = true;

    addMessage(trimmed, 'user');
    showTyping();

    getGeminiReply(trimmed).then(function(reply) {
      hideTyping();
      var qr = getQuickReplies(trimmed + ' ' + reply);
      addMessage(reply, 'bot', qr);
      if (input) input.disabled = false;
      if (sendBtn) sendBtn.disabled = false;
      if (input) input.focus();
    });
  }

  /* ── TOGGLE CHAT ──────────────────────────────────────── */
  function toggleChat() {
    isOpen = !isOpen;
    var win = document.getElementById('cb-window');
    var badge = document.getElementById('cb-badge');
    if (!win) return;
    if (isOpen) {
      win.classList.add('open');
      if (badge) badge.style.display = 'none';
      setTimeout(function () {
        var inp = document.getElementById('cb-input');
        if (inp) inp.focus();
      }, 320);
    } else {
      win.classList.remove('open');
    }
  }

  /* ── CREATE WIDGET DOM ────────────────────────────────── */
  function createWidget() {
    var widget = document.createElement('div');
    widget.id = 'cb-widget';

    /* Chat Window */
    var win = document.createElement('div');
    win.id = 'cb-window';
    win.setAttribute('role', 'dialog');
    win.setAttribute('aria-label', 'Dr. Seema Skincare Assistant');

    /* Header */
    win.innerHTML = `
      <div id="cb-header">
        <div id="cb-header-seal">DS</div>
        <div id="cb-header-info">
          <div id="cb-header-name">Dr. Seema Assistant</div>
          <div id="cb-header-status"><span id="cb-header-dot"></span> Online — Skincare Expert</div>
        </div>
        <button id="cb-close" aria-label="Close chat" title="Close">&#10005;</button>
      </div>
      <div id="cb-messages"></div>
      <div id="cb-input-area">
        <input id="cb-input" type="text" placeholder="Ask about products, routines, skin concerns…" autocomplete="off" maxlength="200">
        <button id="cb-send" aria-label="Send message" title="Send">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
        </button>
      </div>
    `;

    /* FAB */
    var fab = document.createElement('button');
    fab.id = 'cb-fab';
    fab.setAttribute('aria-label', 'Open chat');
    fab.setAttribute('title', 'Chat with Dr. Seema\'s Assistant');
    fab.innerHTML = `
      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
      </svg>
      <span id="cb-badge"></span>
    `;

    widget.appendChild(win);
    widget.appendChild(fab);
    document.body.appendChild(widget);

    /* ── EVENT LISTENERS ── */
    fab.addEventListener('click', toggleChat);

    document.getElementById('cb-close').addEventListener('click', function () {
      isOpen = true;
      toggleChat();
    });

    document.getElementById('cb-send').addEventListener('click', function () {
      var inp = document.getElementById('cb-input');
      if (inp) handleUserInput(inp.value);
    });

    document.getElementById('cb-input').addEventListener('keydown', function (e) {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleUserInput(this.value);
      }
    });

    /* Close on outside click */
    document.addEventListener('click', function (e) {
      if (!isOpen) return;
      var w = document.getElementById('cb-widget');
      if (w && !w.contains(e.target)) {
        isOpen = true;
        toggleChat();
      }
    });
  }

  /* ── INIT ─────────────────────────────────────────────── */
  function init() {
    createWidget();

    /* Welcome message after 2.5s */
    setTimeout(function () {
      showTyping();
      setTimeout(function () {
        hideTyping();
        addMessage(
          'Assalam o Alaikum! 👋 Main Dr. Seema ka virtual skincare assistant hoon.\n\nAap mujhse products, skin concerns, routines, orders ya kuch bhi pooch sakte hain — main yahan hoon! ✨',
          'bot',
          ['Browse Products', 'Skin Concerns', 'About Dr. Seema', 'Contact Us']
        );
        /* Show unread badge */
        var badge = document.getElementById('cb-badge');
        if (badge && !isOpen) {
          badge.style.cssText = 'display:block;position:absolute;top:2px;right:2px;width:14px;height:14px;border-radius:50%;background:#e63946;border:2px solid #fff;';
        }
      }, 1000);
    }, 2500);
  }

  /* Run after DOM ready */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
