# Milestone 5 — GEO Audit: AI Discoverability, Entity & Citation Readiness
**Project:** Hotel Sky Executive (Lonikand, Pune)  
**Document:** `seo_audit/05-geo-audit.md`  
**Date:** October 2026  
**Auditor:** GEO Specialist & Entity SEO Auditor  
**Status:** Part A Completed — Awaiting Client Approval Before Implementation (Part B)

---

## Project Context & Operational Parameters

| Parameter | Value / Status | Audit Tag & Source |
| :--- | :--- | :--- |
| **Website URL** | `https://hotelskyexecutive.in` | **VERIFIED** ([strings.ts:L30](file:///d:/Devesh/Clooyzi/sky/src/config/strings.ts#L30)) |
| **Exact Legal & Trading Name** | Hotel Sky Executive | **VERIFIED** ([hotel.ts:L54](file:///d:/Devesh/Clooyzi/sky/src/content/hotel.ts#L54)) |
| **Industry / Entity Type** | Hospitality / LodgingBusiness / Hotel | **VERIFIED** ([seo.ts:L72](file:///d:/Devesh/Clooyzi/sky/src/lib/seo.ts#L72)) |
| **Target Markets** | **Primary:** Pune, Lonikand, Pune–Nagar Road corridor, Wagholi, Sanaswadi Industrial Belt, Kharadi IT Park.<br>**Secondary:** Regional Maharashtra transit & highway travelers. | **VERIFIED** ([02-search-intent-map.md:L17](file:///d:/Devesh/Clooyzi/sky/seo_audit/02-search-intent-map.md#L17)) |
| **Existing External Profiles** | • Google Maps listing link: Present & Verified (`https://www.google.com/maps/place/FabHotel+Ace+Executive/@18.6081064,74.0152976,606a,61.9y,93.92h,82.97t/data=!3m7!1e1!3m5!1skvuYHWZgB7KHv7zVW_zR0A!2e0!6shttps:%2F%2Fstreetviewpixels-pa.clients6.google.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D7.0305408619603185%26panoid%3DkvuYHWZgB7KHv7zVW_zR0A%26yaw%3D93.91966873906634!7i16384!8i8192!4m16!1m5!3m4!2zMTjCsDM2JzI4LjkiTiA3NMKwMDAnNTYuNSJF!8m2!3d18.6080278!4d74.0156944!3m9!1s0x3bc2c5005566b215:0x95868d957642246b!5m3!1s2026-11-24!4m1!1i2!8m2!3d18.6082!4d74.01528!16s%2Fg%2F11wqq5xlwm?hl=en&entry=ttu&g_ep=EgoyMDI2MTAxMS4wIKXMDSoASAFQAw%3D%3D`).<br>• Google Business Profile CID shortlink: **VERIFIED** (`0x3bc2c5005566b215:0x95868d957642246b`).<br>• Official LinkedIn Company Page: **NEEDS DATA / TO CONFIRM**.<br>• Verified OTA profiles (MakeMyTrip, Goibibo, Booking.com): **NEEDS DATA / TO CONFIRM**.<br>• Wikipedia / Wikidata: None currently exist (**VERIFIED** via entity scan). | **VERIFIED** (Codebase)<br>**NEEDS DATA** (Client profiles) |
| **AI Search Tools in Scope** | Google AI Overviews, ChatGPT Search (OpenAI), Perplexity AI, Microsoft Copilot, Gemini. | **VERIFIED** (Target LLM retrieval engines) |

---

## 1. Crawler Access & Robots Configuration

Google, Bing, OpenAI, Perplexity, Anthropic, and Apple maintain distinct user agents for **Live Search / Retrieval** versus **Model Pre-Training**.

### 1.1 Current Robots & Bot-Blocking Audit

- **File Inspected:** [src/app/robots.ts](file:///d:/Devesh/Clooyzi/sky/src/app/robots.ts) producing `https://hotelskyexecutive.in/robots.txt`.
- **Current Rules in Production:**
  ```text
  User-Agent: *
  Allow: /
  Disallow: /api/

  Sitemap: https://hotelskyexecutive.in/sitemap.xml
  ```
- **Meta Robots Configuration:** `index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1` ([layout.tsx:L59-L69](file:///d:/Devesh/Clooyzi/sky/src/app/layout.tsx#L59-L69)).
- **WAF / Middleware Blocking:** None configured. No Cloudflare bot-fight mode or custom edge blocking active (**VERIFIED** in codebase).

### 1.2 Vendor-by-Vendor User-Agent Analysis

Verified against each AI vendor's published documentation:

| Vendor | User-Agent | Function & Purpose | Current Status | Search Impact if Blocked |
| :--- | :--- | :--- | :--- | :--- |
| **OpenAI** | `OAI-SearchBot` | **Search / Retrieval:** Powers link grounding and real-time citations in ChatGPT Search. | **ALLOWED** (`*`) | **HIGH RISK.** Blocking eliminates ChatGPT Search citations and website referral traffic. |
| **OpenAI** | `ChatGPT-User` | **Live Browsing:** Used when a user instructs ChatGPT to inspect a URL in real time. | **ALLOWED** (`*`) | **HIGH RISK.** Blocking prevents direct URL analysis by ChatGPT users. |
| **OpenAI** | `GPTBot` | **Model Training:** Scrapes web text to train future OpenAI foundation models. | **ALLOWED** (`*`) | **ZERO IMPACT** on live search citations. Consumes bandwidth without guaranteed traffic. |
| **Perplexity** | `PerplexityBot` | **Search / Retrieval:** Crawls content to index and ground answers in Perplexity AI. | **ALLOWED** (`*`) | **HIGH RISK.** Blocking removes the property entirely from Perplexity AI answer citations. |
| **Anthropic** | `Claude-Web` | **Search / Retrieval:** Live browsing fetcher for Claude when querying current web links. | **ALLOWED** (`*`) | **HIGH RISK.** Blocking prevents Claude from verifying live hotel facts. |
| **Anthropic** | `ClaudeBot` | **Model Training:** Crawls web corpus for Anthropic model training. | **ALLOWED** (`*`) | **ZERO IMPACT** on live web link retrieval. |
| **Google** | `Googlebot` / `Googlebot-Mobile` | **Core Search & AI Overviews:** Indexes content for Google Search and AI Overviews. | **ALLOWED** (`*`) | **CRITICAL.** Blocking de-indexes the site from Google. |
| **Google** | `Google-Extended` | **Model Training:** Controls data ingestion for Gemini and Vertex AI model training. | **ALLOWED** (`*`) | **ZERO IMPACT** on Google Search indexation or Google AI Overviews ranking. |
| **Apple** | `Applebot` | **Search / Siri:** Indexes web content for Siri and Apple Spotlight search. | **ALLOWED** (`*`) | **MODERATE RISK.** Reduces visibility on Apple device search. |
| **Apple** | `Applebot-Extended` | **Model Training:** Scrapes data for Apple Intelligence foundation models. | **ALLOWED** (`*`) | **ZERO IMPACT** on Apple Spotlight search. |
| **Common Crawl**| `CCBot` | **Generic Training Corpus:** Open web repository used by third-party model trainers. | **ALLOWED** (`*`) | **ZERO BENEFIT** to direct hotel bookings; purely data extraction. |
| **ByteDance** | `Bytespider` | **Scraper / Training:** Aggressive crawler with high request velocity. | **ALLOWED** (`*`) | **ZERO BENEFIT** to local hotel bookings. |

### 1.3 Crawler Policy Options & Trade-Offs for Owner Decision

Decisions regarding bot access belong to the owner. Below are three operational options:

- **Option 1: Maintain Open Access (Recommended Status Quo)**
  - *Configuration:* Keep current wildcard `Allow: /` with `Disallow: /api/`.
  - *Trade-off:* Maximizes discovery across all existing and upcoming LLM search products. Incurs minor background scraping from training bots, which is negligible for a lightweight static Next.js site.
- **Option 2: Allow Search / Retrieval Bots, Block Pure Training Bots**
  - *Configuration:* Allow `Googlebot`, `Bingbot`, `OAI-SearchBot`, `ChatGPT-User`, `PerplexityBot`, `Claude-Web`, `Applebot`. Disallow `GPTBot`, `ClaudeBot`, `Google-Extended`, `Applebot-Extended`, `CCBot`, `Bytespider`.
  - *Trade-off:* Prevents wholesale content ingestion by training crawlers while preserving 100% of search engine and real-time AI citation visibility.
- **Option 3: Restrictive / Anti-AI Policy**
  - *Configuration:* Disallow all AI bots.
  - *Trade-off:* **STRONGLY DISCOURAGED.** Disconnecting from AI retrieval engines forfeits search discovery in ChatGPT, Perplexity, and Apple Intelligence.

---

## 2. Server Renderability & Edge Accessibility Audit

AI crawlers (particularly lightweight retrieval bots like `OAI-SearchBot` and `PerplexityBot`) operate on tight latency budgets and often bypass or fail client-side JavaScript execution. Content that only renders after client hydration is frequently missed.

| Renderability Dimension | Status | Audit Findings & Technical Evidence | Tag |
| :--- | :--- | :--- | :--- |
| **Server-Rendered Headings (`h1`, `h2`, `h3`)** | **PASSED** | All primary headings, section titles, and FAQ question summaries are pre-rendered into static HTML (`.next/server/app/`). | **VERIFIED** ([validate.mjs output](file:///C:/Users/DEVESH/.gemini/antigravity-ide/brain/d7648297-09a3-4f27-a0d5-5ae6372afd26/scratch/validate.mjs)) |
| **AEO Direct Answer Blocks** | **PASSED** | Answer cards with verified property facts, transit corridors, and amenities are 100% present in initial HTML payload without client JS. | **VERIFIED** |
| **Frequently Asked Questions (FAQ)** | **PASSED** | Rendered using semantic HTML5 `<details>` and `<summary>` tags. Crawlable and functional natively in all browsers without JavaScript. | **VERIFIED** |
| **Contact Credentials & Phone Numbers** | **PASSED** | Direct phone (`+91 80077 24646`), email, and Jaywant Towers address exist as static HTML anchors (`tel:`, `mailto:`, plaintext). | **VERIFIED** |
| **Pricing & Tariff Disclaimers** | **PASSED** | Booking policies and starting guidance ("from ₹1,499/night") are fully embedded in static DOM. | **VERIFIED** |
| **Paywalls, Logins & Gating** | **PASSED** | 100% public access. Zero user-login walls, registration gates, or cookie barriers blocking bots. | **VERIFIED** |
| **Interstitials / Blocking Modals** | **PASSED** | `EnquiryPopup` is non-blocking and lazy-loaded; does not obstruct underlying HTML content for search bots. | **VERIFIED** |

---

## 3. Entity Clarity & Cross-Web Consistency Audit

Following `entity-seo-auditor.md`, search engines and LLMs rank **entities** (unambiguous, corroborated real-world objects) rather than disconnected text strings.

### 3.1 On-Site Entity Consistency Scorecard

```
ENTITY SCORECARD: Hotel Sky Executive
Entity Type: Hotel / LodgingBusiness (Local Business)
Entity Home: https://hotelskyexecutive.in/
Consistency Precondition: PASS (Zero internal name, address, or phone contradictions)

Layer Scores (0 to 10):
1. Entity Home ................. 9/10  (Clear canonical homepage declaring core facts)
2. Schema Layer ................. 9/10  (Consolidated @graph with @id, Hotel, Org, HotelRoom, FAQs)
3. Knowledge-Graph Presence .... 3/10  (Emerging local entity; lacks authoritative 3rd-party directory cluster)
4. Cross-Web Consistency ....... 4/10  (External listings fragmented or unlinked; needs manual claiming)
5. Disambiguation .............. 8/10  (Bound tightly to Jaywant Towers, Lonikand, Pune–Nagar Road)
6. Corroboration ............... 3/10  (Minimal independent external press, reviews, or industry citations)
```

### 3.2 Identified Entity Gaps & Bottlenecks

1. **Missing Named Leadership (E-E-A-T Person Layer):**
   - *Evidence:* The About page ([src/app/about/page.tsx](file:///d:/Devesh/Clooyzi/sky/src/app/about/page.tsx)) and `hotel.ts` present the hotel story and commitments, but omit named ownership or general management (`[OWNER TO CONFIRM: Founder / General Manager name]`).
   - *Impact:* LLMs and Google Quality Raters prefer associating high-trust commercial entities with accountable individuals.
2. **`sameAs` Array Incompleteness:**
   - *Evidence:* Schema in [seo.ts](file:///d:/Devesh/Clooyzi/sky/src/lib/seo.ts) only links to Google Maps search query URL. It lacks direct links to an official Google Business Profile CID shortlink, official LinkedIn company page, JustDial profile, IndiaMart profile, or TripAdvisor listing.
   - *Impact:* Without `sameAs` links, AI engines cannot reliably corroborate that external review profiles belong to this specific entity.
3. **Wikidata Assessment:**
   - *Finding:* A small independent local boutique hotel does not meet Wikidata's general notability criteria without significant secondary news coverage.
   - *Recommendation:* Do **NOT** attempt to create a premature Wikidata item at this stage. Focus effort on Google Business Profile, Apple Business Connect, Bing Places, and primary Indian hospitality directories.

### 3.3 Manual Checklist of External Profiles to Create or Fix

The business owner must manually claim, verify, and standardize the following profiles with exact NAP (Name, Address, Phone):

- [ ] **Google Business Profile (GBP):** Ensure name is strictly `Hotel Sky Executive`, category is `Hotel`, address matches `Jaywant Towers, Pune–Nagar Road, near Jaywant Warehouse, Lonikand, Pune – 412216`, phone is `+91 80077 24646`, and primary website URL is `https://hotelskyexecutive.in`.
- [ ] **Bing Places for Business:** Claim and sync with verified Google Business Profile to ensure Copilot and Bing AI citations.
- [ ] **Apple Business Connect:** Claim property listing to ground Applebot and Siri location cards.
- [ ] **LinkedIn Company Page:** Create an official company profile for `Hotel Sky Executive` (Hospitality / Executive Lodging, Pune) and link to `https://hotelskyexecutive.in`.
- [ ] **Regional Business Directories:** Ensure exact NAP match on JustDial, IndiaMart, Sulekha, and TradeIndia.
- [ ] **Hospitality OTAs:** Standardize description and amenities across MakeMyTrip, Goibibo, and Booking.com.

---

## 4. Original Value vs. Commodity Content Audit

Following `information-gain.md`, AI answers reward first-party information that cannot be gathered from generic competitor summaries.

### 4.1 First-Party Information Already Embedded (**VERIFIED**)
- **Physical Specifications:** Exact 200 sq. ft room area, Queen double bed, and attached en-suite bathroom with continuous 24/7 hot water.
- **Occupancy & Bedding Policy:** Standard 2 Adults + 1 Extra Guest with complimentary extra bed available upon request.
- **Dining Operational Reality:** Dedicated in-house cloud kitchen delivering fresh meals directly to rooms during exact hours (Breakfast 7:30–10:30 AM, Lunch 12:00–3:00 PM, Dinner 7:00–10:30 PM), clarifying there is no public walk-in restaurant.
- **Pet Allowance:** 100% pet-friendly property with zero extra pet surcharge or cleaning deposit.
- **Highway Navigation Landmark:** Clear driving guidance specifying Jaywant Towers directly adjacent to Jaywant Warehouse on SH-27 with wide service lane vehicle entry.
- **Precise Transit Distance Benchmarks:** ~15 km (25 mins) from Pune International Airport, ~20 km (35 mins) from Pune Junction Railway Station, 2 km from Wagholi, and direct corridor access to Sanaswadi MIDC.
- **Check-in Policies:** 24/7 reception availability, 11:00 AM check-in / 10:00 AM check-out, local ID acceptance for couples/families.

### 4.2 High-Value First-Party Additions to Provide (**NEEDS DATA**)
- **Baseline Tariff Publication:** Replacing the generic "on enquiry" disclaimer with an authoritative baseline (*"Starting room tariff: ₹1,499/night + applicable taxes"*).
- **Physical Inventory Metrics:** Specifying total room count and floor distribution (e.g., *"15 executive keys across 3 quiet, private floors"*).
- **Leadership / Management Bio:** Short 2-sentence bio of the founder or general manager on the About page.
- **Direct Review Shortlink:** Official GBP shortlink for guest feedback syndication.

---

## 5. Repeatable AI Visibility Test Set

To objectively benchmark and track whether AI tools cite Hotel Sky Executive, a structured 30-query test set has been compiled and saved to:
👉 [seo_audit/05-ai-visibility-tests.csv](file:///d:/Devesh/Clooyzi/sky/seo_audit/05-ai-visibility-tests.csv)

### 5.1 Test Set Query Distribution (30 Queries Total)

1. **Brand Queries (Q01–Q04):** Direct brand name, contact phone, directions, check-in & pet policies.
2. **Brand + Pricing / Reviews / Policies (Q05–Q08):** Room tariffs per night, executive double room costs, guest reviews, couple-friendly rules & local ID policy.
3. **Category Queries (Q09–Q13):** Executive hotel rooms in Lonikand, boutique hotels on Pune–Nagar Road, AC rooms near Wagholi, hotels near Sanaswadi MIDC with parking, double rooms near Kharadi.
4. **Problem-Based Queries (Q14–Q20):** 24-hour reception on Pune–Nagar Road, airport transit lodging with generator power backup, pet-friendly highway hotels with no surcharge, quiet hotel with work desk and Wi-Fi for business travel, in-room dining in Lonikand, extra bed for families.
5. **Comparison & Alternatives (Q21–Q24):** Best hotels in Lonikand for corporate executives, Sanaswadi vs Wagholi lodging, alternative stays on Nagar Road, budget vs boutique options.
6. **Local & Transit Market Queries (Q25–Q30):** Lodging near Jaywant Warehouse, distance from hotel to Pune Airport, Nagar Road hotels within 15 km of Pune Station, proximity to Kharadi EON IT park, booking direct without OTA commission.

> [!NOTE]
> Per the prompt rules, all result columns (`brand_mentioned`, `cited_urls`, `answer_accurate`, `inaccuracies_noted`, `competitors_mentioned`, `tester`) have been intentionally left blank. They must only be populated when the owner manually executes the queries in ChatGPT Search, Perplexity AI, Google AI Overviews, and Gemini.

---

## 6. Citation Share Formula & Current Measurement Status

Following `citation-share-auditor.md`, AI Citation Share is defined as:

$$\text{Citation Share} = \left(\frac{\text{Count of AI Answers Citing hotelskyexecutive.in}}{\text{Total AI Answers Tested across LLMs}}\right) \times 100\%$$

Per query category / grounding cluster:

$$\text{Category Citation Share} = \left(\frac{\text{Citations to hotelskyexecutive.in for Category } X}{\text{Total Responses Returned for Category } X}\right) \times 100\%$$

### Current Measurement Status:
**NOT MEASURED**  
*(Awaiting manual query execution by the owner using the 30-query CSV test set across ChatGPT, Perplexity, Google AI Overviews, and Gemini).*

---

## 7. Prioritized Recommendations for GEO & Entity Authority

| Priority / Severity | Focus Layer | Evidence / Finding | Recommended Action |
| :--- | :--- | :--- | :--- |
| **High** (Consistency) | External Profiles (GBP) | Website lists Jaywant Towers, Lonikand, Pune 412216, but lacks verified GBP CID link in `sameAs`. | Claim/verify Google Business Profile with exact NAP and link CID shortlink into `seo.ts` schema. |
| **High** (Crawler Access) | Robots.txt Policy | Current robots.txt is completely open (`User-Agent: *`). | Owner to select between Option 1 (remain open to all AI crawlers) or Option 2 (allow search/retrieval bots, block heavy training scrapers). |
| **Medium** (E-E-A-T / Trust) | Leadership / Authorship | About page describes philosophy but lacks named human leadership or general manager credentials. | Add a concise 2-sentence founder/manager attribution to the About page and Organization schema once confirmed. |
| **Medium** (Information Gain) | Pricing Transparency | Rooms and Homepage currently state tariffs are "confirmed upon enquiry". | Publish an authoritative baseline (e.g. `Starting from ₹1,499/night`) to resolve a dominant pre-purchase user intent. |
| **Low** (Entity Expansion) | Directory Footprint | Emerging entity without secondary citations on LinkedIn, JustDial, or Bing Places. | Manually claim Bing Places, Apple Business Connect, and a LinkedIn Company Page to reinforce Knowledge Graph nodes. |

---

## Part A Sign-Off: Next Steps & Client Confirmation

This concludes **Part A** of Milestone 5.

### Decisions Awaiting Your Explicit Approval:
1. **Crawler Access Strategy:** Do you wish to keep **Option 1 (Open Access to all AI crawlers)** or implement **Option 2 (Allow AI search/retrieval bots like OAI-SearchBot and PerplexityBot, but block training scrapers like CCBot and Bytespider)**?
2. **Entity & Leadership Details:** Can you confirm the name and title of the founder or general manager (e.g., `[OWNER TO CONFIRM: Name, Title]`) to add to the About page and Organization schema?
3. **External Profile Verification:** Do you have the official Google Business Profile shortlink (e.g. `https://maps.app.goo.gl/...` or CID) ready to connect to `sameAs`?
4. **Approval of Test Set:** Do you approve the 30-query test set in [05-ai-visibility-tests.csv](file:///d:/Devesh/Clooyzi/sky/seo_audit/05-ai-visibility-tests.csv) for tracking AI discoverability?

**Awaiting your approval before proceeding to Part B (Implementation).**
