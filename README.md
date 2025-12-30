# Holiday | Leave Management Portal

A world-class, conversion-focused landing page for **Holiday**, a streamlined leave management tool for modern teams. Designed for speed, accessibility, and a premium "SaaS" aesthetic.

**Live Demo:** [https://holiday-portal.com](https://holiday-portal.com)

## 🛠 Tech Stack

This project follows a "No-Framework" philosophy to ensure maximum performance and zero build-step dependencies:

* **Frontend:** Semantic HTML5, CSS3 (Variables, Flexbox, Grid), Vanilla JavaScript.
* **Hosting:** GitHub Pages (Static hosting).
* **Backend (API):** Vercel Serverless Functions (Node.js).
* **Email Service:** Resend API.
* **Assets:** Inline SVGs (No external image requests).

## ✨ Key Features

* **Zero-Dependency:** No React, Vue, or Tailwind. Just raw, optimized web standards.
* **High Performance:** Near-instant load times with `content-visibility` optimizations and native lazy loading.
* **Accessibility:** Full ARIA support for modals, accordions, and keyboard navigation.
* **Lead Capture:** Working "Request Account" form connected to Resend via a secure serverless backend.
* **Responsive:** "Mobile-First" design with fluid typography and layout.

## 🚀 Local Development

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/BenRonald/HolidayPortal.git](https://github.com/BenRonald/HolidayPortal.git)
    cd HolidayPortal
    ```

2.  **Open the site:**
    Simply open `index.html` in your browser. No `npm install` or build server is required for the frontend.

3.  **Test the API (Optional):**
    To test the email function locally, you need the Vercel CLI:
    ```bash
    npm i -g vercel
    vercel dev
    ```

## 🌍 Deployment Guide

### 1. Frontend (GitHub Pages)
The site is hosted automatically via GitHub Pages.
1.  Go to **Settings > Pages**.
2.  Source: **Deploy from a branch**.
3.  Branch: **main** / **(root)**.
4.  Custom Domain: `holiday-portal.com`.
5.  **Enforce HTTPS**: Checked.

### 2. Backend (Vercel)
The `api/` folder contains the serverless function to hide the API keys.
1.  Connect this repo to a new project on **Vercel**.
2.  In Vercel Project Settings, go to **Environment Variables**.
3.  Add `RESEND_API_KEY` with your key starting with `re_...`.
4.  Deploy.

## ⚙️ Configuration

### DNS Settings
* **A Records (@):**
    * 185.199.108.153
    * 185.199.109.153
    * 185.199.110.153
    * 185.199.111.153
* **CNAME (www):** `BenRonald.github.io`

### Form Logic
The form in `script.js` points to the Vercel backend. Ensure the `fetch` URL matches your Vercel project domain:
```javascript
const response = await fetch('[https://holiday-portal.vercel.app/api/send](https://holiday-portal.vercel.app/api/send)', ...);
