# Milestone 4 — AEO: Answers, Questions & Structured Data Audit
**Project:** Hotel Sky Executive (Lonikand, Pune)  
**Document:** `seo_audit/04-aeo-audit.md`  
**Date:** October 2026  
**Auditor:** AEO Strategist, Search Quality Evaluator & Structured Data Specialist  
**Status:** Part A Completed — Awaiting Client Approval Before Implementation (Part B)

---

## Project Context & Operational Parameters

| Parameter | Value / Status | Audit Tag & Source |
| :--- | :--- | :--- |
| **Website URL** | `https://hotelskyexecutive.in` | **VERIFIED** ([strings.ts:L30](file:///d:/Devesh/Clooyzi/sky/src/config/strings.ts#L30)) |
| **Brand Name** | Hotel Sky Executive | **VERIFIED** ([hotel.ts:L54](file:///d:/Devesh/Clooyzi/sky/src/content/hotel.ts#L54)) |
| **Industry / Category** | Hospitality / Executive Boutique Hotel & Highway Lodging | **VERIFIED** ([hotel.ts:L58-L60](file:///d:/Devesh/Clooyzi/sky/src/content/hotel.ts#L58-L60)) |
| **Physical Address** | Jaywant Towers, Pune–Nagar Road, near Jaywant Warehouse, Lonikand, Pune – 412216, Maharashtra, India | **VERIFIED** ([contact.ts:L88-L101](file:///d:/Devesh/Clooyzi/sky/src/content/contact.ts#L88-L101)) |
| **Geo-Coordinates** | Latitude `18.6082`, Longitude `74.01528` | **VERIFIED** ([seo.ts:L96-L97](file:///d:/Devesh/Clooyzi/sky/src/lib/seo.ts#L96-L97)) |
| **Pages in Scope (Max 5)** | 1. Homepage (`https://hotelskyexecutive.in/`)<br>2. Rooms Page (`https://hotelskyexecutive.in/rooms`)<br>3. Location Page (`https://hotelskyexecutive.in/location`)<br>4. Contact Page (`https://hotelskyexecutive.in/contact`)<br>5. Guest Information Portal (`https://hotelskyexecutive.in/guest-information`) | **VERIFIED** (Key commercial & informational pages from Milestone 2 & 3) |
| **Where Real Customer Questions Exist** | 1. Interactive chatbot decision tree & options ([chatbot-config.json:L8-L64](file:///d:/Devesh/Clooyzi/sky/src/data/chatbot-config.json#L8-L64))<br>2. Digital guest portal instructions & rules ([guest-portal.json:L8-L74](file:///d:/Devesh/Clooyzi/sky/src/data/guest-portal.json#L8-L74))<br>3. Hotel policy documentation ([hotel-info.json:L31-L40](file:///d:/Devesh/Clooyzi/sky/src/data/hotel-info.json#L31-L40))<br>4. Pre-configured WhatsApp inquiry message templates ([contact.ts:L72-L86](file:///d:/Devesh/Clooyzi/sky/src/content/contact.ts#L72-L86))<br>5. Stay enquiry form fields ([ContactForm.tsx:L1-L307](file:///d:/Devesh/Clooyzi/sky/src/components/contact/ContactForm.tsx#L1-L307)) | **VERIFIED** (First-party system files) |
| **Confirmed Business Facts** | • Accommodates 2 Adults + 1 Extra Guest with complimentary extra bed on request.<br>• 200 sq. ft Executive Double Bed Rooms with Queen bed, en-suite bath & 24/7 hot water.<br>• In-house cloud kitchen delivering Breakfast, Lunch & Dinner to guest rooms (no public dine-in restaurant).<br>• Free 24/7 on-site parking, elevator to all floors, 100% generator power backup, CCTV surveillance.<br>• 24/7 reception desk; Check-in 11:00 AM, Check-out 10:00 AM.<br>• 100% pet-friendly (no extra surcharge), smoke-free indoors, couples welcome with valid government photo ID. | **VERIFIED** ([rooms.ts](file:///d:/Devesh/Clooyzi/sky/src/content/rooms.ts); [facilities.ts](file:///d:/Devesh/Clooyzi/sky/src/content/facilities.ts); [hotel-info.json](file:///d:/Devesh/Clooyzi/sky/src/data/hotel-info.json)) |
| **Facts Requiring Confirmation** | • Base starting room tariff per night (e.g. ₹1,499 / night).<br>• Total physical keys and floors in building.<br>• Business registration / GSTIN / Trade License number.<br>• Google Business Profile CID / direct review URL. | **NEEDS DATA / [OWNER TO CONFIRM]** |

---

## 1. Customer Question Inventory

Every question listed below is drawn directly from first-party user interaction points within the hotel codebase (the conversational AI decision tree, guest portal, WhatsApp templates, and stay reservation forms). No competitor FAQs were scraped or copied.

### Stage 1: Awareness (Discovery, Location & Corridor Access)
1. **"Where is Hotel Sky Executive located on Pune–Nagar Road?"**  
   - **Tag:** **VERIFIED** ([chatbot-config.json:L42-L47](file:///d:/Devesh/Clooyzi/sky/src/data/chatbot-config.json#L42-L47))  
   - **Source:** Chatbot Location Tree & WhatsApp prefilled route inquiry.  
   - **Verified Fact:** Jaywant Towers, Pune–Nagar Road, near Jaywant Warehouse, Lonikand, Pune – 412216.
2. **"How far is Hotel Sky Executive from Pune International Airport and Pune Junction Railway Station?"**  
   - **Tag:** **VERIFIED** ([chatbot-config.json:L43](file:///d:/Devesh/Clooyzi/sky/src/data/chatbot-config.json#L43); [explore-places.json:L168-L174](file:///d:/Devesh/Clooyzi/sky/src/data/explore-places.json#L168-L174))  
   - **Source:** Chatbot Location Submenu & Transit data.  
   - **Verified Fact:** ~15 km (approx. 25 minutes) from Pune Airport; ~20 km (approx. 35 minutes) from Pune Railway Station.
3. **"Is the hotel easily accessible from Sanaswadi Industrial Belt, Wagholi, and Kharadi IT Corridor?"**  
   - **Tag:** **VERIFIED** ([contact.ts:L130-L136](file:///d:/Devesh/Clooyzi/sky/src/content/contact.ts#L130-L136); [explore-places.json:L44-L62](file:///d:/Devesh/Clooyzi/sky/src/data/explore-places.json#L44-L62))  
   - **Source:** Contact transit nodes & Explore places database.  
   - **Verified Fact:** Located right on SH-27 Pune–Nagar Road, 2 km from Wagholi, ~4–5 km from Kharadi/EON Free Zone, and on the direct route to Sanaswadi MIDC.

### Stage 2: Comparison (Room Specs, Capacity & On-Site Amenities)
4. **"What room types are available and what is the room size?"**  
   - **Tag:** **VERIFIED** ([rooms.ts:L38-L53](file:///d:/Devesh/Clooyzi/sky/src/content/rooms.ts#L38-L53); [chatbot-config.json:L20-L26](file:///d:/Devesh/Clooyzi/sky/src/data/chatbot-config.json#L20-L26))  
   - **Source:** Room catalog and chatbot room menu.  
   - **Verified Fact:** Executive Double Bed Room with Queen bed, measuring 200 sq. ft., featuring en-suite hot water bath, AC, smart TV, Wi-Fi, and work desk.
5. **"Can three adults or a couple with a child stay in one room?"**  
   - **Tag:** **VERIFIED** ([rooms.ts:L52-L53](file:///d:/Devesh/Clooyzi/sky/src/content/rooms.ts#L52-L53); [hotel-info.json:L37](file:///d:/Devesh/Clooyzi/sky/src/data/hotel-info.json#L37))  
   - **Source:** Room occupancy specifications & hotel policies.  
   - **Verified Fact:** Maximum occupancy is 2 Adults + 1 Extra Guest; a complimentary extra bed is provided upon request without additional room surcharges.
6. **"Is secure vehicle parking available on-site, and is it free?"**  
   - **Tag:** **VERIFIED** ([facilities.ts:L39-L47](file:///d:/Devesh/Clooyzi/sky/src/content/facilities.ts#L39-L47); [guest-portal.json:L45-L48](file:///d:/Devesh/Clooyzi/sky/src/data/guest-portal.json#L45-L48))  
   - **Source:** Facilities inventory and digital guest portal.  
   - **Verified Fact:** Free 24/7 on-premises secure parking is provided for cars and two-wheelers for all registered guests.
7. **"Is there an elevator / lift to access guest floors?"**  
   - **Tag:** **VERIFIED** ([facilities.ts:L59-L67](file:///d:/Devesh/Clooyzi/sky/src/content/facilities.ts#L59-L67); [guest-portal.json:L50-L53](file:///d:/Devesh/Clooyzi/sky/src/data/guest-portal.json#L50-L53))  
   - **Source:** Facilities inventory.  
   - **Verified Fact:** Fully operational passenger elevator servicing all accommodation levels.
8. **"Is there power backup for air conditioning and Wi-Fi during local outages?"**  
   - **Tag:** **VERIFIED** ([facilities.ts:L69-L77](file:///d:/Devesh/Clooyzi/sky/src/content/facilities.ts#L69-L77); [guest-portal.json:L25](file:///d:/Devesh/Clooyzi/sky/src/data/guest-portal.json#L25))  
   - **Source:** Facilities inventory.  
   - **Verified Fact:** 100% full generator power backup ensuring uninterrupted lighting, climate control (AC), and Wi-Fi.

### Stage 3: Objection (Policies, Trust, Dining & Safety)
9. **"Is Hotel Sky Executive couple-friendly and do you accept local Pune IDs?"**  
   - **Tag:** **VERIFIED** ([strings.ts:L660](file:///d:/Devesh/Clooyzi/sky/src/config/strings.ts#L660); [hotel-info.json:L34](file:///d:/Devesh/Clooyzi/sky/src/data/hotel-info.json#L34))  
   - **Source:** Brand strings and hotel policy data.  
   - **Verified Fact:** The hotel is couple-friendly and welcomes couples and families. Valid government-issued photo IDs (Aadhaar, Passport, Driving License, Voter ID) are required at check-in; local IDs are accepted.
10. **"Does the property allow pets, and is there an extra pet deposit or cleaning charge?"**  
    - **Tag:** **VERIFIED** ([facilities.ts:L89-L97](file:///d:/Devesh/Clooyzi/sky/src/content/facilities.ts#L89-L97); [guest-portal.json:L55-L58](file:///d:/Devesh/Clooyzi/sky/src/data/guest-portal.json#L55-L58))  
    - **Source:** Pet policy configuration.  
    - **Verified Fact:** 100% pet-friendly accommodation; pets stay completely free with zero additional surcharge or pet deposit.
11. **"Is there an in-house restaurant or how are meals served?"**  
    - **Tag:** **VERIFIED** ([facilities.ts:L49-L57](file:///d:/Devesh/Clooyzi/sky/src/content/facilities.ts#L49-L57); [guest-portal.json:L40-L43](file:///d:/Devesh/Clooyzi/sky/src/data/guest-portal.json#L40-L43))  
    - **Source:** Dining specifications.  
    - **Verified Fact:** There is an in-house cloud kitchen preparing fresh Vegetarian and Non-Vegetarian meals delivered directly to guest rooms. There is no walk-in public dining hall.
12. **"Is the hotel staffed for late-night check-in and is it secure?"**  
    - **Tag:** **VERIFIED** ([facilities.ts:L79-L87](file:///d:/Devesh/Clooyzi/sky/src/content/facilities.ts#L79-L87); [guest-portal.json:L37](file:///d:/Devesh/Clooyzi/sky/src/data/guest-portal.json#L37))  
    - **Source:** Front desk operational specs.  
    - **Verified Fact:** The reception desk operates 24 hours a day, 7 days a week, supported by round-the-clock CCTV surveillance and on-site night security.

### Stage 4: Purchase (Tariffs, Confirmation & Payment)
13. **"What is the room tariff per night and are rates inclusive of taxes?"**  
    - **Tag:** **NEEDS DATA / [OWNER TO CONFIRM]** (Currently listed as "Confirmed upon enquiry" in [rooms.ts:L79](file:///d:/Devesh/Clooyzi/sky/src/content/rooms.ts#L79))  
    - **Source:** Room tariff disclaimer.  
    - **Proposal:** State starting baseline: `[OWNER TO CONFIRM: e.g. Executive Double Rooms from ₹1,499 / night + applicable GST]`.
14. **"What payment methods are accepted for room bookings and food bills?"**  
    - **Tag:** **VERIFIED** ([guest-portal.json:L65-L68](file:///d:/Devesh/Clooyzi/sky/src/data/guest-portal.json#L65-L68); [hotel-info.json:L36](file:///d:/Devesh/Clooyzi/sky/src/data/hotel-info.json#L36))  
    - **Source:** Guest portal payment guidelines.  
    - **Verified Fact:** UPI (Google Pay, PhonePe, Paytm), Credit & Debit Cards, Net Banking, and Cash.
15. **"How can I reserve a room immediately or check same-day availability?"**  
    - **Tag:** **VERIFIED** ([contact.ts:L72-L86](file:///d:/Devesh/Clooyzi/sky/src/content/contact.ts#L72-L86); [strings.ts:L50-L63](file:///d:/Devesh/Clooyzi/sky/src/config/strings.ts#L50-L63))  
    - **Source:** Direct contact channels.  
    - **Verified Fact:** Call the 24/7 reception desk at `+91 80077 24646`, message on WhatsApp at `+91 80077 24646`, or submit the online stay enquiry form.

### Stage 5: Support & In-Stay (Arrival, Wi-Fi & Guidelines)
16. **"What are the check-in and check-out timings?"**  
    - **Tag:** **VERIFIED** ([hotel.ts:L77-L79](file:///d:/Devesh/Clooyzi/sky/src/content/hotel.ts#L77-L79); [guest-portal.json:L27-L29](file:///d:/Devesh/Clooyzi/sky/src/data/guest-portal.json#L27-L29))  
    - **Source:** House policies.  
    - **Verified Fact:** Check-in starts at 11:00 AM; Check-out is by 10:00 AM. 24/7 front desk accommodates early/late arrivals subject to advance notice and room readiness.
17. **"How do staying guests access the high-speed Wi-Fi network?"**  
    - **Tag:** **VERIFIED** ([guest-portal.json:L8-L16](file:///d:/Devesh/Clooyzi/sky/src/data/guest-portal.json#L8-L16))  
    - **Source:** Digital guest portal Wi-Fi guide.  
    - **Verified Fact:** Complimentary high-speed Wi-Fi covers all guest rooms and common areas; network security credentials are provided directly by reception at check-in.
18. **"What are the cloud kitchen meal serving hours?"**  
    - **Tag:** **VERIFIED** ([chatbot-config.json:L36](file:///d:/Devesh/Clooyzi/sky/src/data/chatbot-config.json#L36))  
    - **Source:** Chatbot dining timings.  
    - **Verified Fact:** Breakfast: 7:30 AM – 10:30 AM | Lunch: 12:00 PM – 3:00 PM | Dinner: 7:00 PM – 10:30 PM (Veg & Non-Veg delivered to room).

---

## 2. Page-by-Page AEO Audit & Quality Evaluation

Evaluating the 5 pages in scope against Google's published Search Quality Rater Guidelines (E-E-A-T, Needs Met, Uniqueness, Quality Demotion Triggers) and Answer Engine Optimization (AEO) direct-answering criteria.

### Page 1: Homepage (`/`)

| Audit Dimension | Evaluation & Findings | Tag |
| :--- | :--- | :--- |
| **Direct Answer Near Top** | **PARTIAL.** Hero introduces the hotel with cycling value words (`Comfort / Elegance / Prestige / Serenity / Excellence`), but does not provide an immediate 2–3 sentence direct factual answer defining what the property is, its physical location, room specifications, and primary amenities. | **VERIFIED** ([Hero.tsx:L138-L150](file:///d:/Devesh/Clooyzi/sky/src/components/home/Hero.tsx#L138-L150)) |
| **Specifics Provided** | • *What:* Executive boutique hotel.<br>• *Who For:* Corporate engineers, highway transit drivers, couples, families.<br>• *Process:* Book via phone/WhatsApp/form; check-in at 11 AM.<br>• *Timeline:* 24/7 reception availability.<br>• *Cost Factors:* Missing base tariff on homepage (`[OWNER TO CONFIRM]`).<br>• *Limits:* In-room dining only (no public restaurant); max 3 per room.<br>• *Next Step:* Call front desk or enquire on WhatsApp. | **VERIFIED** (Codebase facts)<br>**NEEDS DATA** (Pricing) |
| **Experience & Expertise Evidence** | Real verified photos of building exterior, lobby corridor, and double bed room; real telephone hotline and physical address; verified amenities list. Lacks author / manager credentials or business registration display. | **VERIFIED** (Assets)<br>**NEEDS DATA** (Management bio / GSTIN) |
| **Google Quality Rater Assessment** | • **O (Offsite):** **THIN**. Small independent property; active on Google Maps, but minimal external press or citations.<br>• **U (Uniqueness):** **SOME UNIQUE INPUT**. Real physical photography, verified room specs and cloud kitchen model. Slogan text ("Crafted for Unmatched...") is commodity restatement.<br>• **R (Needs Met):** **MODERATELY MEETS** for `Hotel Sky Executive` brand and `hotel in lonikand pune`. Needs a structured answer block and visible FAQs to achieve **HIGHLY MEETS**.<br>• **Quality Demotion Check:** **CLEAR**. No deceptive titles, no intrusive ads, real contact numbers. | **EVALUATION** |
| **AEO Status** | AI crawlers must parse 6 different sections to synthesize answers about parking, dining, and check-in. Needs a consolidated Answer Block. | **AEO GAP** |

### Page 2: Rooms Page (`/rooms`)

| Audit Dimension | Evaluation & Findings | Tag |
| :--- | :--- | :--- |
| **Direct Answer Near Top** | **WEAK.** Currently features a generic badge ("Accommodation • Pune, Maharashtra") and heading "Premium Rooms" with a 1-sentence subtitle. It does not answer the user's primary pre-booking question upfront: "What room do you offer, how big is it, who fits, what does it include, and how much is it?" | **VERIFIED** ([rooms/page.tsx:L52-L60](file:///d:/Devesh/Clooyzi/sky/src/app/rooms/page.tsx#L52-L60)) |
| **Specifics Provided** | • *What:* Executive Double Bed Room.<br>• *Who For:* Solo corporate travelers, couples, small families (2 adults + 1 guest).<br>• *Process:* Direct enquiry -> front desk confirms availability -> reservation.<br>• *Timeline:* Check-in 11:00 AM, Check-out 10:00 AM.<br>• *Cost Factors:* "Rates confirmed upon enquiry" — no baseline tariff given.<br>• *Limits:* 200 sq. ft room size; complimentary extra bed requires advance notice.<br>• *Next Step:* "Enquire Now" modal or WhatsApp chat. | **VERIFIED** (Catalog facts)<br>**NEEDS DATA** (Tariff baseline) |
| **Experience & Expertise Evidence** | Explicit 200 sq. ft room size measurement, detailed Queen bed setup, en-suite bathroom photo, verified list of 8 room amenities. | **VERIFIED** ([rooms.ts](file:///d:/Devesh/Clooyzi/sky/src/content/rooms.ts)) |
| **Google Quality Rater Assessment** | • **O (Offsite):** **THIN** (Typical for independent single-property hotel).<br>• **U (Uniqueness):** **ORIGINAL SOURCE** for room layout, extra bed policy, and cloud kitchen in-room service.<br>• **R (Needs Met):** **MODERATELY MEETS** for `hotel rooms in lonikand pune`. Adding direct answer block, transparent tariff guidance, and visible FAQs lifts it to **HIGHLY MEETS**.<br>• **Quality Demotion Check:** **CLEAR**. | **EVALUATION** |
| **AEO Status** | LLMs searching for "room size at Hotel Sky Executive" find 200 sq. ft, but questions regarding extra bed cost and check-in schedule are scattered across different pages. | **AEO GAP** |

### Page 3: Location Page (`/location`)

| Audit Dimension | Evaluation & Findings | Tag |
| :--- | :--- | :--- |
| **Direct Answer Near Top** | **MODERATE.** Header declares "Location & Connectivity" and shows address card, but lacks a concise synthesized summary directly answering: "Where is Hotel Sky Executive, what are the primary highway landmarks, and how far is it from Pune Airport / Station / Sanaswadi?" | **VERIFIED** ([location/page.tsx:L60-L80](file:///d:/Devesh/Clooyzi/sky/src/app/location/page.tsx#L60-L80)) |
| **Specifics Provided** | • *What:* Physical highway hotel location.<br>• *Who For:* Drivers along Pune–Nagar Road, transit travelers from airport/station, corporate visitors to Sanaswadi/Kharadi.<br>• *Process:* Navigate via SH-27; landmark is Jaywant Warehouse in Lonikand.<br>• *Timeline:* ~25 mins from airport, ~35 mins from railway station.<br>• *Cost Factors:* Free parking on-site; cab booking assistance at desk.<br>• *Limits:* Highway speeds require taking early service lane ingress.<br>• *Next Step:* "Open in Google Maps" or call front desk for driving guidance. | **VERIFIED** ([explore-places.json](file:///d:/Devesh/Clooyzi/sky/src/data/explore-places.json); [contact.ts](file:///d:/Devesh/Clooyzi/sky/src/content/contact.ts)) |
| **Experience & Expertise Evidence** | Embedded interactive Google Map, exact geo-coordinates (`18.6082, 74.01528`), specific distance markers to 12 Pune landmarks across IT, transit, medical, and education sectors. | **VERIFIED** ([location/page.tsx:L196-L206](file:///d:/Devesh/Clooyzi/sky/src/app/location/page.tsx#L196-L206)) |
| **Google Quality Rater Assessment** | • **O (Offsite):** **PASS** (Matches Google Maps entity).<br>• **U (Uniqueness):** **ORIGINAL SOURCE** for exact landmark ingress advice (Jaywant Warehouse) and verified distances.<br>• **R (Needs Met):** **HIGHLY MEETS** for `hotel location lonikand pune` and `transit hotel near pune nagar road`.<br>• **Quality Demotion Check:** **CLEAR**. | **EVALUATION** |
| **AEO Status** | High potential for Answer Engines (Perplexity, Google AI Overviews) if a clean 4-bullet distance and landmark summary is front-loaded in an Answer Block. | **AEO OPPORTUNITY** |

### Page 4: Contact Page (`/contact`)

| Audit Dimension | Evaluation & Findings | Tag |
| :--- | :--- | :--- |
| **Direct Answer Near Top** | **MODERATE.** Displays 4 contact cards (Phone, WhatsApp, Email, Address) and a form, but lacks a top direct answer block stating front desk operating hours, direct booking response times, and check-in ID policies. | **VERIFIED** ([contact/page.tsx:L36-L70](file:///d:/Devesh/Clooyzi/sky/src/app/contact/page.tsx#L36-L70)) |
| **Specifics Provided** | • *What:* Direct communication channels with hotel management.<br>• *Who For:* Prospective guests, corporate booking coordinators, arriving travelers.<br>• *Process:* Phone call (instant), WhatsApp (fast), Web Form (inquiry confirmation).<br>• *Timeline:* Front desk available 24/7/365.<br>• *Cost Factors:* Direct booking eliminates third-party OTA commissions.<br>• *Limits:* Web form does not instantly confirm room; requires staff verification.<br>• *Next Step:* Call `+91 80077 24646` or tap WhatsApp. | **VERIFIED** ([contact.ts](file:///d:/Devesh/Clooyzi/sky/src/content/contact.ts); [ContactForm.tsx](file:///d:/Devesh/Clooyzi/sky/src/components/contact/ContactForm.tsx)) |
| **Experience & Expertise Evidence** | Real callable telephone number (`+91 80077 24646`), active WhatsApp API link, monitored Gmail inbox, verified street address at Jaywant Towers. | **VERIFIED** |
| **Google Quality Rater Assessment** | • **O (Offsite):** **PASS** (Phone and address match registered local listings).<br>• **U (Uniqueness):** **ORIGINAL SOURCE** (Only Hotel Sky Executive can publish their direct contact credentials).<br>• **R (Needs Met):** **HIGHLY MEETS** for `hotel sky executive contact number` and `hotel sky executive phone number`.<br>• **Quality Demotion Check:** **CLEAR**. Highly trustworthy E-E-A-T signals. | **EVALUATION** |
| **AEO Status** | Perplexity and AI Overviews easily extract phone and address. Adding an Answer Block with response times and payment methods completes all user intents. | **AEO STRENGTH** |

### Page 5: Guest Information Portal (`/guest-information`)

| Audit Dimension | Evaluation & Findings | Tag |
| :--- | :--- | :--- |
| **Direct Answer Near Top** | **STRONG.** Front desk hotline banner is prominent at the top, followed by verified check-in/check-out timing badges (11:00 AM / 10:00 AM). | **VERIFIED** ([guest-information/page.tsx:L60-L134](file:///d:/Devesh/Clooyzi/sky/src/app/guest-information/page.tsx#L60-L134)) |
| **Specifics Provided** | • *What:* Complete guest operational guide and house rules.<br>• *Who For:* Checked-in guests (via in-room QR code) and confirmed pre-arrival travelers.<br>• *Process:* Check-in with photo ID -> receive Wi-Fi credentials -> order in-room meals -> check out by 10 AM.<br>• *Timeline:* Reception 24/7; quiet hours 10:00 PM – 7:00 AM.<br>• *Cost Factors:* Free Wi-Fi, free parking, free pet stays.<br>• *Limits:* 100% smoke-free indoors; no public restaurant dining hall.<br>• *Next Step:* Call reception hotline for assistance. | **VERIFIED** ([guest-portal.json](file:///d:/Devesh/Clooyzi/sky/src/data/guest-portal.json)) |
| **Experience & Expertise Evidence** | High first-party operational fidelity: authentic in-stay rules, Wi-Fi onboarding instructions, verified emergency services numbers (Reception, Police 100, Ambulance 108, Fire 101, Women Helpline 1091). | **VERIFIED** ([hotel-info.json:L55-L64](file:///d:/Devesh/Clooyzi/sky/src/data/hotel-info.json#L55-L64)) |
| **Google Quality Rater Assessment** | • **O (Offsite):** **THIN** (Internal guest portal utility).<br>• **U (Uniqueness):** **ORIGINAL SOURCE** (100% proprietary operational guidance).<br>• **R (Needs Met):** **FULLY MEETS** for staying guests and travelers checking house rules.<br>• **Quality Demotion Check:** **CLEAR**. Exemplary utility page. | **EVALUATION** |
| **AEO Status** | Prime source for Answer Engines answering niche operational questions: "What is Hotel Sky Executive check in time?", "Does Hotel Sky Executive charge for pets?", "How to get Wi-Fi at Hotel Sky Executive?". | **AEO BENCHMARK** |

---

## 3. Information Gain Analysis

Following `information-gain.md`, pages are scored on the ratio between **Consensus Restatement** (generic text that appears on hundreds of other hotel websites) vs. **Original Information Gain** (first-party data, physical specifics, proprietary policies, and verified local knowledge).

### 3.1 Line-by-Line / Section Analysis across Pages in Scope

```
+----------------------------------------------------------------------------------------------------------------+
| PAGE                   | CONSENSUS (0% GAIN)           | PARTIAL GAIN                  | ORIGINAL FIRST-PARTY GAIN      |
+----------------------------------------------------------------------------------------------------------------+
| Homepage (/)           | 60% ("Luxury comfort",         | 20% (List of 20+ amenities,   | 20% (Jaywant Towers address,   |
|                        | "crafted for unmatched...",   | photos of room interior)      | in-house cloud kitchen room    |
|                        | "moments of excellence")      |                               | delivery, 24/7 parking facts)  |
+----------------------------------------------------------------------------------------------------------------+
| Rooms (/rooms)         | 30% ("Stay designed for your  | 25% (Queen bed, AC, Smart TV  | 45% (Exact 200 sq.ft size,     |
|                        | comfort", "modern amenities") | specifications)               | 2+1 free extra bed policy,     |
|                        |                               |                               | en-suite 24/7 hot water,       |
|                        |                               |                               | in-room meal delivery)         |
+----------------------------------------------------------------------------------------------------------------+
| Location (/location)   | 15% ("Conveniently located",  | 25% (Distance to Airport &    | 60% (Exact Jaywant Warehouse   |
|                        | "heart of the corridor")      | Pune Railway Station)         | landmark ingress, highway SH27 |
|                        |                               |                               | coordinates, Sanaswadi transit)|
+----------------------------------------------------------------------------------------------------------------+
| Contact (/contact)     | 10% ("Get in touch with us",  | 20% (Email address, standard  | 70% (Direct 24/7 mobile,       |
|                        | "we'd love to hear from you") | contact form)                 | WhatsApp pre-filled templates, |
|                        |                               |                               | payment modes, local ID note)  |
+----------------------------------------------------------------------------------------------------------------+
| Guest Info (/guest-info| 5% ("Welcome to our hotel")   | 15% (Standard quiet hours)    | 80% (Front desk Wi-Fi policy,  |
|                        |                               |                               | free pet rules, exact meal     |
|                        |                               |                               | hours, local emergency numbers)|
+----------------------------------------------------------------------------------------------------------------+
```

### 3.2 High-Value Information Gain Gaps to Fill
1. **Room Tariff Baseline:** Generic hotel competitors display starting rates; Hotel Sky Executive currently has a generic disclaimer. Providing an honest baseline (e.g., `From ₹1,499/night • Live seasonal tariffs confirmed upon enquiry`) eliminates a key friction point.
2. **Cloud Kitchen Operating Distinction:** Most competitors either claim a full multi-cuisine restaurant (which disappoints guests upon arrival) or say nothing. Explicitly detailing that freshly prepared meals are prepared in an in-house cloud kitchen and delivered to the room provides authentic, high-trust clarity.
3. **Highway Ingress Landmark:** Travelers along Pune–Nagar Road miss properties due to highway speeds. Providing the exact visual marker (*"Jaywant Towers, directly adjacent to Jaywant Warehouse in Lonikand with wide service lane vehicle ingress"*) gives immense first-party practical value.
4. **Pet Policy Specifics:** Most Pune hotels claim "pets allowed" but hide steep daily deposits or breed exclusions. Hotel Sky Executive's policy (*"Pets stay free with zero extra surcharge"*) is a major competitive differentiator.

---

## 4. Structured Data Audit (Existing JSON-LD vs. Visible Content)

### 4.1 Google Search Central Status & Regulatory Compliance Check

Before auditing specific schemas, we cross-reference current Google Search Central documentation and policy guidelines:

> [!WARNING]
> **Google Search Central Policy Update — FAQPage Structured Data:**
> In August 2023, Google officially restricted `FAQPage` rich results in Search Engine Result Pages (SERPs) exclusively to authoritative government and healthcare websites. Commercial websites (including hotels, local businesses, and travel publishers) are **no longer eligible for collapsible FAQ rich result snippets in Google Search**.  
> **Strategic Recommendation:** We do **NOT** promise FAQ rich snippets in Google SERPs. However, adding valid `FAQPage` markup that matches visible questions and answers is strongly recommended for **Answer Engine Optimization (AEO)**. Search engines and AI answer engines (Google AI Overviews, Perplexity AI, ChatGPT Search, Microsoft Copilot) actively ingest structured FAQ JSON-LD to understand entity facts and synthesize conversational answers.

> [!NOTE]
> **HowTo Schema Status:**
> Deprecated by Google for all rich results. Not recommended or implemented in this project.

> [!NOTE]
> **Hotel / LodgingBusiness & HotelRoom Schema:**
> Fully valid under Schema.org and recognized by Google for Knowledge Panels, Local Map Pack entity resolution, and local indexing.

> [!NOTE]
> **Self-Serving Reviews & Rating Markup Prohibition:**
> Google's guidelines explicitly prohibit adding review or rating markup (`AggregateRating`, `Review`) for a local business or hotel entity that is self-published on the business's own domain without third-party syndicated verification. We strictly omit fake or unverified rating markup.

### 4.2 Current Schema Scorecard & Mismatches

Currently, structured data is injected across scattered `<script>` tags:
- `src/app/layout.tsx`: Separate `WebSite` and `Organization` script tags.
- `src/app/page.tsx`: Standalone `Hotel` script tag.
- `src/app/rooms/page.tsx`: Standalone `BreadcrumbList` and `HotelRoom` script tags.
- `src/app/location/page.tsx`: Standalone `BreadcrumbList` and duplicate `Hotel` script tag.
- `src/app/contact/page.tsx`: Standalone `BreadcrumbList` script tag.
- `src/app/guest-information/page.tsx`: Standalone `BreadcrumbList` script tag.

| Schema Type | Current Location | Grade | Identified Gaps / Mismatches / Risks | Recommended Fix |
| :--- | :--- | :--- | :--- | :--- |
| **`WebSite`** | `src/app/layout.tsx` | **WEAK** | Rendered as a separate script block without cross-link to `Organization` or `Hotel` via `@id`. | Consolidate into unified `@graph` tied to `https://hotelskyexecutive.in/#website`. |
| **`Organization`** | `src/app/layout.tsx` | **WEAK** | Scattered script tag. Missing `contactPoint` for customer service. `sameAs` array includes an empty string if Instagram is unconfigured. | Add structured `ContactPoint` with telephone and available languages; clean up `sameAs`. |
| **`Hotel`** | `src/app/page.tsx` & `src/app/location/page.tsx` | **WEAK / DUPLICATE** | • Injected twice across different URLs (`/` and `/location`), creating duplicate floating entities.<br>• `priceRange: '₹₹'` is hardcoded, but no price symbols appear on visible page.<br>• `paymentAccepted` is marked in schema, but currently not visibly stated on homepage.<br>• Not linked to `Organization` via `@id`. | Move primary `Hotel` definition to Homepage `@graph` with `@id: "https://hotelskyexecutive.in/#hotel"`. On inner pages, link via reference. Ensure visible page content mentions accepted payments. |
| **`HotelRoom`** | `src/app/rooms/page.tsx` | **WEAK** | Disconnected from `Hotel` entity (uses inline unlinked `isPartOf`). Missing `offers` node explaining how tariffs are confirmed upon enquiry. | Cross-link via `@id` to `https://hotelskyexecutive.in/#hotel`. Add `Offer` with `priceSpecification` indicating inquiry model. |
| **`BreadcrumbList`** | `rooms`, `location`, `contact`, `guest-info` | **PASS** | Valid breadcrumb trail generated via `breadcrumbJsonLd()`. | Keep; fold into the single `@graph` on each page for cleaner DOM rendering. |
| **`FAQPage`** | None currently present | **MISSING** | 18 verified customer questions exist across data files, but zero structured Q&A schema is exposed to search crawlers. | Add visible FAQ sections to all 5 pages and generate corresponding `FAQPage` schema nodes in the `@graph`. |

---

## 5. Proposals Per Page (Answer Blocks, Visible FAQs & Schema)

All proposed content is formulated strictly from verified codebase facts and adheres to the project's light ivory/champagne design standards ([Rules.md:L21-L69](file:///d:/Devesh/Clooyzi/sky/Rules.md#L21-L69)).

### Page 1: Homepage (`/`)

#### 1. Proposed Answer Block (Add above Timeline Services)
- **Placement:** Positioned immediately below the Hero section, styled as an elegant ivory card with gold accent border.
- **Direct Answer (Short & Direct First):**  
  > **Hotel Sky Executive is an executive boutique hotel situated at Jaywant Towers on Pune–Nagar Road, Lonikand.** We provide modern air-conditioned Executive Double Bed Rooms (200 sq. ft), an in-house cloud kitchen delivering fresh meals directly to guest rooms, free 24/7 on-site parking, an elevator, and 100% generator power backup. Our 24-hour reception desk welcomes corporate travelers, highway transit guests, couples, and pet owners.
- **Supporting Detail (Bullet Points):**
  - **Location & Transit:** Jaywant Towers, Lonikand — ~15 km from Pune Airport, 2 km from Wagholi, and direct highway access to Sanaswadi MIDC.
  - **In-Room Comforts:** Plush Queen bed, en-suite bathroom with 24/7 hot water, high-speed Wi-Fi, smart TV, and dedicated work desk.
  - **Guest Inquiries:** Live room availability and seasonal tariffs confirmed instantly via front desk phone (`+91 80077 24646`) or WhatsApp.

#### 2. Visible FAQ Items (Curated for Homepage)
1. **Q: What amenities are provided at Hotel Sky Executive Pune?**  
   *A:* Our verified property amenities include free high-speed Wi-Fi across all floors, 24/7 on-site secure parking, an elevator serving all rooms, 100% full generator power backup, 24-hour front desk reception, CCTV security, in-room cloud kitchen dining, and complimentary pet-friendly accommodation.
2. **Q: Where is Hotel Sky Executive located and how do I reach it?**  
   *A:* Hotel Sky Executive is located at Jaywant Towers, Pune–Nagar Road, near Jaywant Warehouse, Lonikand, Pune (Pin: 412216). We are approximately 15 km (25 minutes) from Pune International Airport and 2 km past Wagholi along State Highway 27.
3. **Q: Does the hotel have an in-house restaurant?**  
   *A:* We operate a dedicated in-house cloud kitchen that prepares freshly cooked Vegetarian and Non-Vegetarian meals (Breakfast, Lunch, and Dinner) delivered directly to your room. There is no public walk-in dining hall.
4. **Q: Are couples and families welcome at Hotel Sky Executive?**  
   *A:* Yes. Hotel Sky Executive is couple-friendly and family-friendly. All adult guests must present a valid government-issued photo ID (Aadhaar, Passport, Driving License, or Voter ID) at check-in. Local Pune IDs are accepted.

#### 3. Structured Data Schema (`@graph` for `/`)
- **Types in `@graph`:** `WebSite`, `Organization`, `Hotel`, `FAQPage`.
- **Eligibility Note:** `FAQPage` will not receive SERP rich snippets (per Google's Aug 2023 policy), but will be parsed by Answer Engines and AI Overviews. `Hotel` and `Organization` provide local knowledge panel entity signals.

---

### Page 2: Rooms Page (`/rooms`)

#### 1. Proposed Answer Block (Add below page header, before room grid)
- **Placement:** Directly below the accommodation header badge and description.
- **Direct Answer (Short & Direct First):**  
  > **Our Executive Double Bed Room provides 200 sq. ft of private, air-conditioned living space equipped with a plush Queen-size bed, attached en-suite bathroom with 24/7 hot water, high-speed Wi-Fi, and a dedicated executive work desk.** Stays accommodate up to 3 guests (2 adults + 1 extra guest with a complimentary extra bed provided on request). Fresh meals from our in-house cloud kitchen are delivered directly to your room.
- **Supporting Detail (Bullet Points):**
  - **Room Dimensions & Capacity:** 200 sq. ft | Queen Bed | Max 2 Adults + 1 Extra Guest.
  - **In-Room Technology:** Wall-mounted Smart TV with streaming capabilities, individual climate control AC, and bedside charging ports.
  - **Tariffs & Direct Booking:** [OWNER TO CONFIRM: e.g. "Starting from ₹1,499/night."] Current availability and corporate group rates are confirmed directly via our 24/7 front desk hotline.

#### 2. Visible FAQ Items (Curated for `/rooms`)
1. **Q: What is the size and bed setup of the Executive Double Bed Room?**  
   *A:* The Executive Double Bed Room measures 200 sq. ft and features a comfortable Queen-size double bed with fresh premium linen, individual air conditioning, and a tranquil nature view.
2. **Q: Can an extra guest or child stay in the room?**  
   *A:* Yes. Rooms comfortably accommodate up to 3 guests (2 adults + 1 extra guest). A complimentary extra bed is available upon request at no additional room surcharge (advance notice recommended).
3. **Q: What are the check-in and check-out timings for rooms?**  
   *A:* Standard check-in begins at 11:00 AM and check-out is at 10:00 AM. Our reception desk is open 24/7 to accommodate late-night arrivals.
4. **Q: Is room service available for breakfast, lunch, and dinner?**  
   *A:* Yes. Fresh meals from our in-house cloud kitchen are served directly to your room. Breakfast is served from 7:30 AM to 10:30 AM, lunch from 12:00 PM to 3:00 PM, and dinner from 7:00 PM to 10:30 PM (both Veg and Non-Veg).

#### 3. Structured Data Schema (`@graph` for `/rooms`)
- **Types in `@graph`:** `BreadcrumbList`, `HotelRoom` (linked via `isPartOf` to `https://hotelskyexecutive.in/#hotel`), `FAQPage`.
- **Eligibility Note:** `BreadcrumbList` is fully eligible for SERP breadcrumbs. `HotelRoom` describes room dimensions and bed specifications for knowledge graphs.

---

### Page 3: Location Page (`/location`)

#### 1. Proposed Answer Block (Add above Google Map card)
- **Placement:** Directly below the Location header.
- **Direct Answer (Short & Direct First):**  
  > **Hotel Sky Executive is located directly on State Highway 27 (Pune–Nagar Road) at Jaywant Towers, adjacent to Jaywant Warehouse in Lonikand, Pune (Pin: 412216).** We are situated 15 km (~25 minutes) from Pune International Airport, 20 km from Pune Junction Railway Station, 2 km from Wagholi, and within easy commuting distance of Sanaswadi MIDC and Kharadi IT Park.
- **Supporting Detail (Bullet Points):**
  - **Highway Driving Landmark:** Jaywant Towers sits on the main Pune–Nagar carriageway with a wide roadside entrance allowing smooth vehicle access into our free 24/7 on-site parking lot.
  - **Transit Assistance:** Our 24/7 front desk team assists guests with local taxi, cab, and auto-rickshaw arrangements round the clock.
  - **Key Hub Proximity:** Sanaswadi Industrial Area (~10–12 km) | Kharadi EON IT Park (~4–5 km) | Wagholi Market (~2 km).

#### 2. Visible FAQ Items (Curated for `/location`)
1. **Q: How far is Hotel Sky Executive from Pune International Airport?**  
   *A:* Hotel Sky Executive is approximately 15 km from Pune International Airport (Lohegaon), taking about 20 to 25 minutes via the Pune–Nagar Road corridor depending on traffic.
2. **Q: What is the nearest landmark to locate the hotel on Pune–Nagar Road?**  
   *A:* The hotel is situated in Jaywant Towers, directly next to Jaywant Warehouse on the main Pune–Nagar Road in Lonikand.
3. **Q: Is secure on-site parking available for private cars and two-wheelers?**  
   *A:* Yes. We provide free, 24-hour on-premises secure parking with CCTV surveillance for all staying guests.
4. **Q: How far is Hotel Sky Executive from the Sanaswadi Industrial Area and Kharadi IT Park?**  
   *A:* The Sanaswadi MIDC industrial manufacturing belt is approximately 10 to 12 km further down the Pune–Nagar Highway, while the Kharadi IT Park and EON Free Zone are roughly 4 to 5 km towards Pune city.

#### 3. Structured Data Schema (`@graph` for `/location`)
- **Types in `@graph`:** `BreadcrumbList`, `Place` / reference to `Hotel` (`geo`, `hasMap`, `address`), `FAQPage`.
- **Eligibility Note:** `BreadcrumbList` earns breadcrumb rich snippets. `FAQPage` powers voice search and AI Overviews.

---

### Page 4: Contact Page (`/contact`)

#### 1. Proposed Answer Block (Add above contact channels grid)
- **Placement:** Immediately beneath the header banner on `/contact`.
- **Direct Answer (Short & Direct First):**  
  > **To contact Hotel Sky Executive for room reservations, corporate bookings, or immediate assistance, call our 24/7 front desk at +91 80077 24646 or message us on WhatsApp at +91 80077 24646.** You can also email help.skyexecutive@gmail.com or submit our online stay enquiry form. Reception is staffed 24 hours a day at Jaywant Towers, Pune–Nagar Road, Lonikand.
- **Supporting Detail (Bullet Points):**
  - **Instant Assistance:** Phone calls and WhatsApp messages are answered 24/7 by on-duty front desk staff.
  - **Accepted Payment Modes:** UPI (Google Pay, PhonePe, Paytm), Credit/Debit Cards, Net Banking, and Cash.
  - **Check-in Requirement:** Government-issued photo ID required at check-in (Aadhaar, Driving License, Passport, Voter ID).

#### 2. Visible FAQ Items (Curated for `/contact`)
1. **Q: What is the direct phone number and WhatsApp number for Hotel Sky Executive?**  
   *A:* You can reach our front desk 24 hours a day by phone at +91 80077 24646 and via WhatsApp at +91 80077 24646.
2. **Q: How quickly does the hotel respond to online stay enquiries?**  
   *A:* Web enquiry forms are reviewed by our reservations team promptly. For instant same-day confirmation, we recommend calling or messaging on WhatsApp directly.
3. **Q: What payment methods are accepted at Hotel Sky Executive?**  
   *A:* We accept UPI (Google Pay, PhonePe, Paytm), Visa/Mastercard Credit and Debit Cards, Net Banking, and Cash.
4. **Q: Can I check in late at night if my flight or drive is delayed?**  
   *A:* Yes. Our reception desk is staffed 24/7. Please notify us of your estimated arrival time via phone or WhatsApp so our night team can keep your room ready.

#### 3. Structured Data Schema (`@graph` for `/contact`)
- **Types in `@graph`:** `BreadcrumbList`, `ContactPage` (linked to `Organization` with `ContactPoint`), `FAQPage`.
- **Eligibility Note:** `ContactPoint` feeds Google's official customer support Knowledge Graph cards.

---

### Page 5: Guest Information Portal (`/guest-information`)

#### 1. Proposed Answer Block (Add below hotline card)
- **Placement:** Below the 24/7 Hotline card, before the timing grid.
- **Direct Answer (Short & Direct First):**  
  > **Hotel Sky Executive operates a 24-hour reception desk at Jaywant Towers, Lonikand. Standard check-in begins at 11:00 AM and check-out is by 10:00 AM.** Staying guests enjoy complimentary high-speed Wi-Fi (credentials provided at front desk), free 24/7 on-site parking, an elevator, 100% generator power backup, and in-room meal service from our cloud kitchen. A valid government photo ID is required for all adult guests at check-in.
- **Supporting Detail (Bullet Points):**
  - **Wi-Fi Credentials:** Network access details are issued upon registration at reception for guest data privacy.
  - **Dining Hours:** Breakfast 7:30–10:30 AM | Lunch 12:00–3:00 PM | Dinner 7:00–10:30 PM (Veg & Non-Veg delivered to room).
  - **House Policies:** 100% smoke-free property indoors | Quiet hours observed after 10:00 PM | Pets stay free with zero extra surcharge.

#### 2. Visible FAQ Items (Curated for `/guest-information`)
1. **Q: How do staying guests connect to the complimentary hotel Wi-Fi?**  
   *A:* High-speed Wi-Fi is complimentary throughout the property. For network security, your unique Wi-Fi network credentials are provided directly at the front desk upon check-in.
2. **Q: What is the pet policy at Hotel Sky Executive?**  
   *A:* Hotel Sky Executive is 100% pet-friendly. Pets stay completely free of charge with no additional deposit or cleaning fee.
3. **Q: What are the in-room cloud kitchen delivery hours?**  
   *A:* Fresh meals are delivered to your room during three service windows: Breakfast from 7:30 AM to 10:30 AM, Lunch from 12:00 PM to 3:00 PM, and Dinner from 7:00 PM to 10:30 PM.
4. **Q: What is the hotel's smoking and quiet hours policy?**  
   *A:* Hotel Sky Executive is a 100% smoke-free indoor facility. To ensure restful sleep for all guests, quiet hours are observed from 10:00 PM to 7:00 AM.

#### 3. Structured Data Schema (`@graph` for `/guest-information`)
- **Types in `@graph`:** `BreadcrumbList`, `WebPage`, `FAQPage`.
- **Eligibility Note:** `BreadcrumbList` eligible for breadcrumb rich snippet; `FAQPage` powers AEO extraction for specific in-stay and house policy queries.

---

## 6. Owner Input List (Facts & Proof Assets to Confirm)

Before content and schema can be permanently deployed in Part B, please confirm or provide the following factual parameters:

1. **Starting Room Tariff Baseline:**
   - *Current Status:* Listed as "Confirmed upon enquiry" in data files.
   - *Owner to Confirm:* What is the baseline starting tariff for the Executive Double Bed Room? (e.g., `₹1,499 / night` or `₹1,799 / night` plus applicable taxes).
2. **Physical Room & Floor Inventory:**
   - *Current Status:* Hardcoded as `0` in `src/content/hotel.ts`.
   - *Owner to Confirm:* Total number of guest rooms and total floors at Jaywant Towers.
3. **Official Business Identity / GSTIN:**
   - *Current Status:* Legal entity name is listed as "Hotel Sky Executive".
   - *Owner to Confirm:* GSTIN or Trade License registration number to include in footer/Organization schema for heightened Google Trust/E-E-A-T.
4. **Google Business Profile CID / Review Link:**
   - *Current Status:* `googleMapsUrl` points to search query `Jaywant+Towers+Pune+Nagar+Road`.
   - *Owner to Confirm:* Exact Google Business Profile short link (e.g. `https://g.page/r/...` or `https://maps.app.goo.gl/...`) for verified `sameAs` entity linkage.
5. **Early Check-in / Late Check-out Policy:**
   - *Current Status:* Check-in is 11:00 AM, Check-out is 10:00 AM.
   - *Owner to Confirm:* Is early check-in (e.g., 8:00 AM) complimentary if rooms are vacant, or subject to a half-day charge?

---

## Part A Sign-Off: Next Steps & Client Confirmation

This concludes **Part A** of Milestone 4.

### Approval Checkpoints Required from You:
1. **Approve Customer Question Inventory:** Do you approve the 18 real customer questions categorized by user journey stage?
2. **Approve Visible Answer Blocks:** Do you approve adding the short direct-answer blocks at the top of the 5 pages (`/`, `/rooms`, `/location`, `/contact`, `/guest-information`)?
3. **Approve Visible FAQ Sections:** Do you approve rendering 4 visible, collapsible FAQ items on each of the 5 pages?
4. **Approve Schema Consolidation Strategy:** Do you approve migrating the scattered `<script>` tags into consolidated `@graph` JSON-LD blocks on each page, incorporating `FAQPage`, `HotelRoom`, `Hotel`, `Organization`, `ContactPoint`, and `BreadcrumbList`?
5. **Provide Owner Inputs:** Please provide any of the 5 facts listed above that are ready for inclusion.

**Awaiting your approval before executing Part B (Implementation).**
