import express from "express";
import path from "path";
import { config } from "dotenv";

config(); // load .env

const app = express();
const PORT = process.env.PORT || 3000;
const rootDir = process.cwd();
const GEMINI_KEY = process.env.GEMINI_API_KEY || "";

app.use(express.json());

// ── GEMINI CHAT API ────────────────────────────────────────────────────────
const SYSTEM_PROMPT = `You are a friendly, warm skincare assistant for Dr. Seema's Clinical Skincare — a premium dermatologist-formulated skincare brand based in Lahore, Pakistan.

YOUR PERSONALITY:
- Talk like a knowledgeable, caring friend — not a robot
- Respond naturally to greetings like "hi", "hello", "salam" etc. with warmth
- Use light emojis occasionally (not excessive)
- Keep responses concise and helpful (3-5 lines max unless a detailed routine is asked)
- Write in the same language the user uses (English or Roman Urdu or Urdu)

BRAND KNOWLEDGE:
- Founder: Dr. Seema — FCPS Dermatologist, 18+ years experience, Fellowship King's College London
- Products: Cellular Renewal Serum (PKR 8,800), Deep Moisture Barrier Cream (PKR 7,600), Vitamin C Luminous Concentrate (PKR 9,200), Radiant Glow Barrier Elixir (PKR 8,400), Calming Gentle Cleanser (PKR 5,200), Firming Peptide Eye Essence (PKR 6,800)
- 48+ formulations across 12 collections
- All products: cruelty-free, fragrance-free, clinically tested
- Shipping: PKR 250 standard (3-5 days), PKR 500 express (1-2 days), FREE above PKR 12,000
- Payment: Card, Cash on Delivery, PayPal, Apple Pay, Google Pay
- Coupon: SEEMA15 = 15% off first order
- Contact: support@drseemasproducts.pk | +92 (042) 3555-SEEMA | Gulberg III, Lahore
- Website pages: Home (/), Shop (/shop), Collections (/collections), Skin Concerns (/skin-concerns), About (/about), Cart (/cart)

SKIN EXPERTISE:
- Acne: Salicylic Acid 2%, Niacinamide 10%, Zinc PCA — 91% breakout reduction in 28 days
- Pigmentation/Dark Spots: 15% Vitamin C, Alpha Arbutin, Kojic Acid — SPF daily is #1 step
- Dry Skin: Ceramide NP, Triple Hyaluronic Acid, Squalane — 72-hour moisture
- Oily Skin: BHA, Niacinamide 10% reduces sebum by 52% — never skip moisturiser
- Sensitive/Rosacea: Centella Asiatica, Colloidal Oat, Allantoin — mineral SPF only
- Aging/Wrinkles: Bio-Retinol, Quad-Peptide, Matrixyl 3000 — 96% firmness improvement

STRICT RULES:
- ONLY answer questions related to Dr. Seema's brand, products, skincare, and website
- If asked about anything unrelated (politics, news, other brands, general AI questions), politely say: "I'm only here to help with Dr. Seema's skincare! 😊 Ask me about our products, your skin concern, or orders."
- Never mention competitor brands
- Never give medical diagnoses — recommend consulting Dr. Seema's team for serious conditions`;

app.post("/api/chat", async (req, res) => {
  const { message, history } = req.body as { message: string; history?: {role:string;parts:{text:string}[]}[] };

  if (!message || !GEMINI_KEY) {
    res.status(400).json({ error: "Missing message or API key" });
    return;
  }

  try {
    const contents = [
      ...(history || []),
      { role: "user", parts: [{ text: message }] }
    ];

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
          contents,
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 400,
            topP: 0.9
          }
        })
      }
    );

    const data = await response.json() as any;
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't process that. Please try again! 😊";
    res.json({ reply: text });
  } catch (err) {
    console.error("Gemini error:", err);
    res.status(500).json({ error: "AI service unavailable" });
  }
});

// Serve static assets
app.use("/assets", express.static(path.join(rootDir, "assets")));

// Serve shop page
app.get(["/shop", "/shop.html"], (_req, res) => {
  res.sendFile(path.join(rootDir, "shop.html"));
});

// Serve collections page
app.get(["/collections", "/collections.html"], (_req, res) => {
  res.sendFile(path.join(rootDir, "collections.html"));
});

// Serve product details page
app.get(["/product", "/product-details", "/product.html", "/product-details.html"], (_req, res) => {
  res.sendFile(path.join(rootDir, "product-details.html"));
});

// Serve cart & checkout page
app.get(["/cart", "/cart.html", "/checkout", "/checkout.html"], (_req, res) => {
  res.sendFile(path.join(rootDir, "cart.html"));
});

// Serve skin concerns page
app.get(["/skin-concerns", "/skin-concerns.html"], (_req, res) => {
  res.sendFile(path.join(rootDir, "skin-concerns.html"));
});

// Serve about page
app.get(["/about", "/about.html"], (_req, res) => {
  res.sendFile(path.join(rootDir, "about.html"));
});

// Serve root index.html
app.get("/", (_req, res) => {
  res.sendFile(path.join(rootDir, "index.html"));
});

// Fallback all routes to index.html
app.get("*", (_req, res) => {
  res.sendFile(path.join(rootDir, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

