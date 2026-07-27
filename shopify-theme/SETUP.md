# Career Resume Lift — Shopify Theme Setup Guide

This theme is hand-built to match the Career Resume Lift brand (Next.js site) as closely as
Shopify's platform allows. Because Shopify is a **commerce platform** and your business sells
**services**, a few pieces of content live in Shopify Admin (products, pages, blog posts,
navigation) rather than in the theme code — that's intentional and is what lets you edit copy
and pricing later without touching a single file.

Follow this guide top to bottom and your store will match the reference design.

---

## 1. Upload the theme

1. In Shopify Admin, go to **Online Store → Themes**.
2. Click **Add theme → Upload ZIP file** and select `career-resume-lift-theme.zip`.
3. Once uploaded, click **Actions → Publish** to make it your live theme (or preview it first).

---

## 2. Create navigation menus

Go to **Online Store → Navigation** and create these menus (the **handle** in parentheses must
match exactly — Shopify generates it from the menu title automatically):

### Main menu (`main-menu`)
This one already exists by default — edit it:
- **Services** → link to `/collections/all` (or leave blank URL "#") — then add nested links for
  each service product once created (Resume Writing, Executive Resume, Federal Resume, Military
  Resume, Graduate Resume, LinkedIn Optimization, Cover Letter, Career Coaching, Interview Coaching)
- **Industries** → `/pages/industries`
- **Pricing** → `/collections/all`
- **Success Stories** → `/pages/success-stories`
- **Resources** → add nested links: Blog (`/blogs/news`), Free Resources (`/pages/resources`), FAQ (`/pages/faq`)
- **About** → `/pages/about`

### Footer menus
Create three separate menus:
- **Footer Services** (`footer-services`) — links to each service product
- **Footer Company** (`footer-company`) — About, Industries, Success Stories, Pricing, Contact
- **Footer Resources** (`footer-resources`) — Blog, Free Resources, FAQ
- **Footer Legal** (`footer-legal`) — Privacy Policy, Terms of Service, Refund Policy

The footer section pulls **Footer Services / Footer Company / Footer Resources** in automatically
via its block settings — adjust in **Theme Editor → Footer** if you name them differently.

---

## 3. Create the 9 service products

Go to **Products → Add product** for each row below. Set **Product type** to the value shown
(used as the eyebrow label on the product page). For each product, add the listed **variants**
under "This product has multiple options" → Option name: `Package`.

| Product Title | Product Type | Variants (Package / Price) | Body (paste into description) |
|---|---|---|---|
| Resume Writing | Resume Writing | Professional Resume — $249 · Resume + Cover Letter — $329 · Complete Career Package — $449 | See §3a |
| Executive Resume | Leadership Branding | Executive Resume — $549 · C-Suite Package — $799 | See §3b |
| Federal Resume | Government Careers | Federal Resume — $399 · Federal Resume + Cover Letter — $479 | See §3c |
| Military Resume | Military Transition | Military Transition Resume — $279 · Military + LinkedIn — $369 · Complete Transition Package — $479 | See §3d |
| Graduate Resume | Early Career | Entry-Level Resume — $179 · Graduate + LinkedIn — $249 · Career Launch Package — $349 | See §3e |
| LinkedIn Optimization | Personal Branding | LinkedIn Makeover — $179 · Complete LinkedIn Profile — $249 · Resume + LinkedIn Bundle — $399 | See §3f |
| Cover Letter | Application Materials | Standalone Cover Letter — $99 · Cover Letter + Follow-Up Note — $149 | See §3g |
| Career Coaching | 1:1 Coaching | Single Session — $149 · 3-Session Package — $399 · 6-Session Transition — $699 | See §3h |
| Interview Coaching | Interview Preparation | Single Mock Interview — $149 · Interview Prep Package — $349 · Executive Interview & Negotiation — $549 | See §3i |

> **Enterprise / custom-quote tiers** (e.g. Executive "Enterprise Leadership", Federal "SES / Senior
> Federal") aren't included as variants since they're quote-based, not fixed-price. Mention them in
> the product description and direct interested clients to `/pages/contact`.

After creating all 9 products, **set a featured image** for each (optional — the theme shows a
clean placeholder icon if none is set) and assign every product to a collection called
**"All Packages"** (handle `all`) — this collection page becomes your **Pricing page**.

### 3a. Resume Writing — description to paste
```html
<p>Work one-on-one with a Certified Professional Resume Writer to build a keyword-optimized, achievement-driven resume tailored to your target role and industry.</p>
<h3>What's included</h3>
<ul>
  <li>1:1 Certified Professional Resume Writer</li>
  <li>ATS-optimized resume (Word + PDF)</li>
  <li>Keyword & industry research</li>
  <li>2–3 rounds of revisions depending on package</li>
  <li>Strategy call with your writer</li>
</ul>
<h3>Who this is for</h3>
<ul>
  <li>Mid-level & senior professionals</li>
  <li>Career changers switching industries</li>
  <li>Professionals re-entering the workforce</li>
  <li>Job seekers with outdated resumes</li>
</ul>
```

### 3b. Executive Resume
```html
<p>A powerful leadership narrative for VPs, Directors, and C-Suite executives — positioning your strategic impact, not just your job history.</p>
<h3>What's included</h3>
<ul>
  <li>1:1 executive resume strategist</li>
  <li>Executive summary & core competencies</li>
  <li>Board-ready formatting</li>
  <li>Executive LinkedIn rewrite (C-Suite package)</li>
</ul>
<h3>Who this is for</h3>
<ul>
  <li>C-Suite executives (CEO, CFO, COO, CTO, CMO)</li>
  <li>Vice Presidents & Senior Directors</li>
  <li>Board members & advisors</li>
</ul>
<p><em>Need a board bio, value proposition deck, or a multi-executive engagement? <a href="/pages/contact">Contact us</a> for Enterprise Leadership pricing.</em></p>
```

### 3c. Federal Resume
```html
<p>Federal resumes require a completely different format than private-sector resumes. We build detailed, compliant federal resumes aligned to specific job announcements.</p>
<h3>What's included</h3>
<ul>
  <li>USAJOBS-compliant multi-page format</li>
  <li>Job announcement alignment</li>
  <li>KSA & specialized experience statements</li>
  <li>Veterans' preference documentation guidance</li>
</ul>
<h3>Who this is for</h3>
<ul>
  <li>Federal job applicants (GS-5 through SES)</li>
  <li>Military members transitioning to federal service</li>
  <li>Current federal employees seeking promotion</li>
</ul>
<p><em>Pursuing SES or a senior GS role? <a href="/pages/contact">Contact us</a> for ECQ narrative support.</em></p>
```

### 3d. Military Resume
```html
<p>We convert military occupational specialties, rank, and leadership experience into the language civilian recruiters and hiring managers understand.</p>
<h3>What's included</h3>
<ul>
  <li>MOS/AFSC/rating civilian translation</li>
  <li>ATS-optimized civilian resume</li>
  <li>Civilian career mapping session (Complete package)</li>
</ul>
<h3>Who this is for</h3>
<ul>
  <li>Transitioning active-duty service members</li>
  <li>National Guard & Reserve members</li>
  <li>Veterans re-entering the civilian workforce</li>
</ul>
```

### 3e. Graduate Resume
```html
<p>No work history yet? We build a compelling resume around your education, internships, projects, and transferable skills to help you land your first role.</p>
<h3>What's included</h3>
<ul>
  <li>ATS-optimized entry-level resume</li>
  <li>Education & internship focus</li>
  <li>Interview coaching session (Career Launch package)</li>
</ul>
<h3>Who this is for</h3>
<ul>
  <li>Recent college & graduate school grads</li>
  <li>First-time job seekers</li>
  <li>Interns transitioning to full-time roles</li>
</ul>
```

### 3f. LinkedIn Optimization
```html
<p>We rewrite your headline, About section, experience, and skills to align with your resume and rank higher in recruiter searches.</p>
<h3>What's included</h3>
<ul>
  <li>Headline & About section rewrite</li>
  <li>Experience section optimization</li>
  <li>Keyword & skills strategy</li>
</ul>
<h3>Who this is for</h3>
<ul>
  <li>Professionals seeking recruiter visibility</li>
  <li>Executives building a personal brand</li>
  <li>Passive job seekers exploring the market</li>
</ul>
```

### 3g. Cover Letter
```html
<p>A tailored, persuasive cover letter that connects your experience directly to the role — without repeating your resume.</p>
<h3>What's included</h3>
<ul>
  <li>Custom-written cover letter</li>
  <li>Editable template format</li>
  <li>Post-interview thank-you note template (with Follow-Up Note tier)</li>
</ul>
<p><em>Already ordered a resume package? A cover letter may already be bundled in — check your package details or <a href="/pages/contact">contact us</a> to add one.</em></p>
```

### 3h. Career Coaching
```html
<p>One-on-one coaching sessions to clarify your goals, build a job search strategy, and navigate career transitions with a clear plan.</p>
<h3>What's included</h3>
<ul>
  <li>1:1 video coaching sessions</li>
  <li>Personalized job search plan</li>
  <li>Networking & LinkedIn strategy</li>
</ul>
<h3>Who this is for</h3>
<ul>
  <li>Professionals planning a career change</li>
  <li>Job seekers needing search strategy</li>
  <li>Professionals feeling stuck or unfulfilled</li>
</ul>
```

### 3i. Interview Coaching
```html
<p>Mock interviews, behavioral question prep, and offer negotiation coaching tailored to your target role and industry.</p>
<h3>What's included</h3>
<ul>
  <li>Realistic mock interview sessions</li>
  <li>STAR-method behavioral coaching</li>
  <li>Salary & offer negotiation strategy (Executive tier)</li>
</ul>
<h3>Who this is for</h3>
<ul>
  <li>Candidates with upcoming interviews</li>
  <li>Professionals weak on behavioral questions</li>
  <li>Candidates negotiating a job offer</li>
</ul>
```

---

## 4. Create pages

Go to **Online Store → Pages → Add page** and create each one below. Set the **Theme template**
in the right-hand sidebar to the value shown — this is what loads the matching custom section
layout with content already filled in.

| Page title | URL handle | Theme template |
|---|---|---|
| About | `about` | `page.about` |
| Industries | `industries` | `page.industries` |
| Success Stories | `success-stories` | `page.success-stories` |
| Resources | `resources` | `page.resources` |
| FAQ | `faq` | `page.faq` |
| Contact | `contact` | `page.contact` |
| Privacy Policy | `privacy-policy` | `page.legal` |
| Terms of Service | `terms` | `page.legal` |
| Refund Policy | `refund-policy` | `page.legal` |

For **About, Industries, Success Stories, Resources, FAQ, and Contact** — the content is already
built into the template's sections, so you can leave the page body empty and just save it with
the correct template assigned.

For **Privacy Policy, Terms of Service, and Refund Policy** — paste the corresponding text below
into the page content editor (switch to **Show HTML** in the editor to paste it as formatted HTML).

<details>
<summary>Privacy Policy HTML (click to expand)</summary>

```html
<p>Career Resume Lift ("we," "us," or "our") respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our resume writing and career services (collectively, the "Services").</p>
<h2>1. Information We Collect</h2>
<ul>
  <li><strong>Contact Information:</strong> name, email address, phone number, and mailing address.</li>
  <li><strong>Career Information:</strong> resume content, work history, education, certifications, job preferences, and related career details you provide to your writer.</li>
  <li><strong>Payment Information:</strong> billing details processed securely through Shopify's payment processors. We do not store full payment card numbers on our servers.</li>
  <li><strong>Usage Data:</strong> information about how you interact with our website, collected via cookies and similar technologies.</li>
</ul>
<h2>2. How We Use Your Information</h2>
<ul>
  <li>Provide, personalize, and deliver our resume writing and career services</li>
  <li>Communicate with you about your order, project status, and support requests</li>
  <li>Process payments and manage billing</li>
  <li>Send marketing communications, which you may opt out of at any time</li>
  <li>Improve our website, services, and customer experience</li>
  <li>Comply with legal obligations and protect against fraudulent activity</li>
</ul>
<h2>3. Confidentiality of Career Documents</h2>
<p>All client documents and information shared with your writer are treated as strictly confidential and used solely to provide your requested services.</p>
<h2>4. How We Share Your Information</h2>
<p>We do not sell your personal information. We may share information with trusted third-party service providers (payment processors, email providers, scheduling tools) who are contractually obligated to protect it, or as required by law.</p>
<h2>5. Cookies &amp; Tracking Technologies</h2>
<p>Our website uses cookies to improve functionality, analyze traffic, and personalize content. You can control cookie preferences through your browser settings.</p>
<h2>6. Data Security</h2>
<p>We implement reasonable safeguards to protect your information. No method of transmission over the internet is 100% secure.</p>
<h2>7. Data Retention</h2>
<p>We retain personal information as long as necessary to provide our Services and comply with legal obligations. You may request deletion at any time.</p>
<h2>8. Your Rights</h2>
<p>Depending on your location, you may have the right to access, correct, delete, or restrict use of your personal information. Contact us to exercise these rights.</p>
<h2>9. Children's Privacy</h2>
<p>Our Services are not directed to individuals under 16, and we do not knowingly collect information from children.</p>
<h2>10. Changes to This Policy</h2>
<p>We may update this Privacy Policy from time to time. Changes will be posted here with an updated date.</p>
<h2>11. Contact Us</h2>
<p>Questions about this Privacy Policy can be sent to our <a href="/pages/contact">contact page</a>.</p>
```
</details>

<details>
<summary>Terms of Service HTML (click to expand)</summary>

```html
<p>These Terms of Service ("Terms") govern your access to and use of the Career Resume Lift website and services. By accessing our website or purchasing our Services, you agree to be bound by these Terms.</p>
<h2>1. Services Provided</h2>
<p>Career Resume Lift provides professional resume writing, LinkedIn profile optimization, cover letter writing, career coaching, and interview coaching services. Deliverables, turnaround times, and revisions vary by package.</p>
<h2>2. Client Responsibilities</h2>
<ul>
  <li>Provide accurate and complete information about your work history and qualifications</li>
  <li>Respond to writer requests in a timely manner</li>
  <li>Review drafts and provide revision feedback promptly</li>
  <li>Not misrepresent your qualifications or work history</li>
</ul>
<h2>3. Payment Terms</h2>
<p>Full or partial payment is required before work begins, processed securely through Shopify. Prices are listed in U.S. dollars and may change without affecting orders already placed.</p>
<h2>4. Revisions</h2>
<p>Each package includes a specified number of revision rounds. Requests for substantially new documents outside original scope may incur additional fees.</p>
<h2>5. Turnaround Times</h2>
<p>Turnaround times are estimates that begin once we receive your completed intake questionnaire, and may vary based on project complexity.</p>
<h2>6. No Guarantee of Employment Outcomes</h2>
<p>We cannot guarantee specific employment outcomes, as these depend on factors outside our control including market conditions and employer decisions.</p>
<h2>7. Intellectual Property</h2>
<p>Upon final payment, you own the final career documents created for you.</p>
<h2>8. Refunds</h2>
<p>Refund eligibility is governed by our <a href="/pages/refund-policy">Refund Policy</a>.</p>
<h2>9. Limitation of Liability</h2>
<p>Career Resume Lift is not liable for indirect, incidental, or consequential damages arising from use of our Services.</p>
<h2>10. Governing Law</h2>
<p>These Terms are governed by the laws of the State of Delaware, United States.</p>
<h2>11. Contact Us</h2>
<p>Questions? Visit our <a href="/pages/contact">contact page</a>.</p>
```
</details>

<details>
<summary>Refund Policy HTML (click to expand)</summary>

```html
<p>At Career Resume Lift, we want every client to be satisfied with their finished career documents. This Refund Policy explains when refunds are available and how to request one.</p>
<h2>1. Satisfaction Guarantee</h2>
<p>Every package includes a set number of revision rounds. We work with you through your included revisions until your resume or other document meets professional standards.</p>
<h2>2. Refund Eligibility</h2>
<ul>
  <li><strong>Before work begins:</strong> full refund available</li>
  <li><strong>After first draft:</strong> we use your included revisions to address feedback first</li>
  <li><strong>After all revisions used:</strong> a partial refund may be considered case-by-case</li>
  <li><strong>Non-refundable:</strong> after final delivery and acceptance, or after 30 days of client unresponsiveness</li>
</ul>
<h2>3. How to Request a Refund</h2>
<p>Contact us via our <a href="/pages/contact">contact page</a> with your order details and reason for the request. We respond within 3–5 business days.</p>
<h2>4. Refund Processing</h2>
<p>Approved refunds are issued to your original payment method within 7–10 business days.</p>
<h2>5. Coaching Sessions</h2>
<p>Sessions may be rescheduled with 24 hours' notice. Missed sessions or late cancellations are non-refundable. Unused sessions in a multi-session package may be refunded pro-rata if requested before any session is used.</p>
<h2>6. Contact Us</h2>
<p>Questions about this policy? Visit our <a href="/pages/contact">contact page</a>.</p>
```
</details>

---

## 5. Set up the blog

1. Go to **Online Store → Blog posts → Manage blogs** and rename/create a blog (e.g. "Career Blog",
   handle `news` is Shopify's default — the theme works with any handle).
2. Add articles and **tag each one** with its category (e.g. `ATS`, `Interview Tips`, `LinkedIn`,
   `Salary`, `Career Advice`, `Remote Jobs`, `Resume Tips`, `Job Search`) — tags power the category
   filter pills on the blog page automatically.
3. Sample articles (title / tag / excerpt) to get you started — write full posts in the same voice,
   or reuse your existing content if migrating from another site:
   - **How to Beat the ATS in 2026: A Complete Guide** — tag `ATS`
   - **The STAR Method: How to Answer Behavioral Interview Questions** — tag `Interview Tips`
   - **20 LinkedIn Headline Examples That Get Recruiters to Click** — tag `LinkedIn`
   - **Salary Negotiation Scripts: What to Say When You Get an Offer** — tag `Salary`
   - **How to Write a Resume for a Career Change** — tag `Career Advice`
   - **The Remote Job Search Playbook** — tag `Remote Jobs`
   - **Resume Summary Examples That Actually Get Read** — tag `Resume Tips`
   - **How Long Should a Job Search Take? A Realistic Timeline** — tag `Job Search`

---

## 6. Theme settings

Open **Online Store → Themes → Customize**, then **Theme settings** in the left sidebar, and fill in:

- **Business info**: phone, email, address, business hours
- **Social media**: LinkedIn, X/Twitter, Facebook, Instagram, Trustpilot links
- **Trust & stats**: resumes written, interview success rate, average rating, industries served
- **Favicon**: upload a square logo image (the theme also ships a generated "CR" favicon by default)
- **Colors**: already pre-filled with the brand palette (`#0F172A` navy, `#2563EB` blue, `#06B6D4`
  cyan, `#22C55E` green) — only change if you're rebranding

---

## 7. Connect Calendly & Google Maps (optional)

The Contact page ships with placeholder boxes for a Calendly scheduler and a Google Map. To go
live with real embeds, edit `sections/contact.liquid` and replace the two placeholder `<div>`
blocks with your embed codes (Calendly's inline widget `<script>`, and a Google Maps `<iframe>`).

---

## 8. What's different from the original design, and why

- **Checkout & cart** are Shopify's native, secure checkout — not custom-built. This is what lets
  customers actually pay you.
- **Dark mode** is included and toggles via the sun/moon icon in the header, same as the original.
- **Service pages became products with variants** so each package tier is purchasable. Rich
  benefit/process copy for each service lives in the product description (§3 above) instead of
  hard-coded page sections, so you can edit it anytime from Shopify Admin without touching code.
- **Resource downloads** link to the Contact page instead of an automated email-gated download,
  since that requires a form-processing backend Shopify doesn't include natively. If you want true
  automated gated downloads, connect an email app (e.g. Klaviyo) from the Shopify App Store.
