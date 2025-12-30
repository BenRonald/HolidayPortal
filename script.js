/* --- Variables & Reset --- */
:root {
    --primary: #3b82f6; /* A cleaner, "Stripe" blue */
    --primary-dark: #2563eb;
    --bg-page: #ffffff;
    --bg-subtle: #f8fafc;
    --text-head: #0f172a; /* Slate 900 */
    --text-body: #475569; /* Slate 600 - softer than black */
    --border: #e2e8f0;
    --white: #ffffff;
    --shadow-subtle: 0 4px 6px -1px rgba(0,0,0,0.05);
    --shadow-card: 0 10px 15px -3px rgba(0,0,0,0.05), 0 4px 6px -2px rgba(0,0,0,0.025);
    --radius: 12px;
}

* { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; -webkit-font-smoothing: antialiased; }

body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    color: var(--text-body);
    line-height: 1.65;
    background: var(--bg-page);
    font-size: 16px;
}

h1, h2, h3, h4 { color: var(--text-head); font-weight: 700; letter-spacing: -0.025em; margin-bottom: 0.75em; line-height: 1.2; }
h1 { font-size: 2.5rem; }
h2 { font-size: 2rem; }
p { margin-bottom: 1.5rem; }

.container { max-width: 1024px; margin: 0 auto; padding: 0 1.5rem; }
.btn { display: inline-flex; justify-content: center; align-items: center; padding: 0.6rem 1.2rem; border-radius: 6px; font-weight: 600; text-decoration: none; cursor: pointer; border: none; transition: all 0.2s; font-size: 0.95rem; }
.btn-primary { background: var(--text-head); color: white; } /* Dark button = premium feel */
.btn-primary:hover { background: #000; transform: translateY(-1px); }
.btn-secondary { background: white; color: var(--text-head); border: 1px solid var(--border); }
.btn-secondary:hover { background: var(--bg-subtle); }
.btn-lg { padding: 0.8rem 1.6rem; font-size: 1.05rem; }
.btn-xl { padding: 1rem 2.5rem; font-size: 1.2rem; }
.w-full { width: 100%; }

/* --- Header --- */
.site-header { position: sticky; top: 0; background: rgba(255,255,255,0.9); backdrop-filter: blur(8px); border-bottom: 1px solid var(--border); z-index: 100; padding: 1rem 0; }
.header-container { display: flex; justify-content: space-between; align-items: center; }
.logo { font-weight: 800; color: var(--text-head); text-decoration: none; display: flex; align-items: center; gap: 8px; font-size: 1.2rem; }
.nav-links { display: none; gap: 2rem; }
.nav-links a { text-decoration: none; color: var(--text-body); font-weight: 500; font-size: 0.9rem; }
.nav-links a:hover { color: var(--primary); }
@media(min-width: 768px) { .nav-links { display: flex; } .btn-sm { display: none; } }

/* --- Hero --- */
.hero { padding: 4rem 0 6rem; background: radial-gradient(circle at top right, #f1f5f9 0%, transparent 40%); overflow: hidden; }
.hero-grid { display: grid; gap: 3rem; align-items: center; }
.badge { background: #eff6ff; color: var(--primary); padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 600; display: inline-block; margin-bottom: 1.5rem; }
.subheadline { font-size: 1.2rem; max-width: 500px; color: var(--text-body); }
.hero-actions { display: flex; gap: 1rem; margin-bottom: 1.5rem; flex-wrap: wrap; }
.hero-trust-note { font-size: 0.85rem; display: flex; align-items: center; gap: 6px; color: var(--text-body); opacity: 0.8; }

/* CSS-Only Mock Browser */
.mock-browser { background: white; border-radius: 8px; box-shadow: 0 20px 40px -10px rgba(0,0,0,0.15); border: 1px solid var(--border); overflow: hidden; }
.mock-header { background: #f8fafc; padding: 10px 15px; border-bottom: 1px solid var(--border); display: flex; align-items: center; }
.dots { display: flex; gap: 6px; margin-right: 15px; }
.dot { width: 10px; height: 10px; border-radius: 50%; }
.red { background: #ef4444; } .yellow { background: #fbbf24; } .green { background: #22c55e; }
.bar { background: white; flex: 1; height: 20px; border-radius: 4px; font-size: 10px; color: #94a3b8; display: flex; align-items: center; padding-left: 10px; }
.mock-body { padding: 20px; display: flex; gap: 20px; height: 240px; background: #fcfcfc; }
.ui-sidebar { width: 50px; background: #f1f5f9; border-radius: 4px; }
.ui-content { flex: 1; display: flex; flex-direction: column; gap: 10px; }
.ui-row-1 { height: 30px; background: #e2e8f0; width: 60%; border-radius: 4px; }
.ui-card-grid { display: flex; gap: 10px; }
.ui-card { flex: 1; height: 60px; background: white; border: 1px solid #e2e8f0; border-radius: 4px; }
.ui-list { margin-top: 10px; display: flex; flex-direction: column; gap: 8px; }
.ui-list-item { height: 40px; background: white; border: 1px solid #e2e8f0; border-radius: 4px; display: flex; align-items: center; padding: 0 10px; gap: 10px; }
.ui-avatar { width: 24px; height: 24px; border-radius: 50%; background: #cbd5e1; }
.ui-lines span { display: block; height: 6px; background: #e2e8f0; border-radius: 2px; margin-bottom: 4px; width: 80px; }

@media(min-width: 900px) { .hero-grid { grid-template-columns: 1fr 1fr; } h1 { font-size: 3.5rem; } }
@media(max-width: 899px) { .hero-visual { display: none; } /* Hide complicated UI on mobile */ }

/* --- Trust Bar --- */
.trust-bar { padding: 2rem 0; background: var(--bg-subtle); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
.trust-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; }
.trust-item { display: flex; align-items: center; gap: 8px; font-size: 0.9rem; font-weight: 500; color: var(--text-body); }
.trust-item .icon { width: 20px; height: 20px; color: var(--text-head); opacity: 0.7; }
@media(min-width: 768px) { .trust-grid { grid-template-columns: repeat(4, 1fr); } }

/* --- Features --- */
.features { padding: 6rem 0; }
.section-title { text-align: center; margin-bottom: 1rem; }
.section-header p { text-align: center; max-width: 600px; margin: 0 auto 4rem; opacity: 0.8; }
.features-grid { display: grid; gap: 1.5rem; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); }
.card { padding: 2rem; background: white; border: 1px solid var(--border); border-radius: var(--radius); transition: transform 0.2s; }
.card:hover { transform: translateY(-4px); box-shadow: var(--shadow-card); border-color: var(--primary); }
.card-icon { color: var(--primary); margin-bottom: 1rem; width: 40px; height: 40px; background: #eff6ff; display: flex; align-items: center; justify-content: center; border-radius: 8px; }

/* --- Pricing --- */
.pricing { padding: 5rem 0; }
.pricing-card { max-width: 500px; margin: 0 auto; text-align: center; border: 1px solid var(--border); padding: 3rem; border-radius: 16px; background: white; box-shadow: var(--shadow-card); }
.price-lockup { margin: 2rem 0; }
.amount { font-size: 4rem; font-weight: 800; color: var(--text-head); line-height: 1; }
.currency { font-size: 2rem; vertical-align: top; margin-right: 4px; }
.period { display: block; font-size: 0.9rem; color: #94a3b8; margin-top: 5px; }

.calculator-wrapper { background: var(--bg-subtle); padding: 1.5rem; border-radius: 8px; text-align: left; margin-bottom: 2rem; }
.calc-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; font-weight: 500; font-size: 0.9rem; }
.user-pill { background: white; padding: 2px 8px; border-radius: 4px; border: 1px solid var(--border); font-size: 0.85rem; }
.total-row { margin-top: 1rem; padding-top: 1rem; border-top: 1px solid var(--border); font-size: 1.1rem; }
.custom-slider { width: 100%; -webkit-appearance: none; height: 6px; background: #cbd5e1; border-radius: 3px; outline: none; margin: 10px 0; }
.custom-slider::-webkit-slider-thumb { -webkit-appearance: none; width: 22px; height: 22px; background: var(--primary); border-radius: 50%; cursor: pointer; border: 3px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.2); }

/* --- Security & FAQ --- */
.security { background: var(--text-head); color: white; padding: 6rem 0; }
.security h2 { color: white; } .security p { color: #94a3b8; }
.badge-outline { border: 1px solid rgba(255,255,255,0.2); color: white; padding: 4px 10px; border-radius: 20px; font-size: 0.75rem; display: inline-block; margin-bottom: 1rem; }
.security-checkmarks { list-style: none; margin-top: 2rem; }
.security-checkmarks li { padding-left: 1.5rem; position: relative; margin-bottom: 0.8rem; font-size: 0.95rem; }
.security-checkmarks li::before { content: "✓"; position: absolute; left: 0; color: #4ade80; }
.security-visual { display: flex; justify-content: center; align-items: center; }
.lock-circle { width: 120px; height: 120px; border-radius: 50%; border: 2px solid rgba(255,255,255,0.1); display: flex; align-items: center; justify-content: center; color: white; }

.faq-list { max-width: 700px; margin: 0 auto; }
.faq-item { border-bottom: 1px solid var(--border); }
.faq-question { width: 100%; text-align: left; background: none; border: none; padding: 1.5rem 0; font-size: 1.1rem; font-weight: 600; color: var(--text-head); cursor: pointer; display: flex; justify-content: space-between; align-items: center; }
.plus-icon::after { content: "+"; font-size: 1.4rem; font-weight: 400; color: var(--primary); }
.faq-question[aria-expanded="true"] .plus-icon::after { content: "−"; }
.faq-answer { padding-bottom: 1.5rem; color: var(--text-body); font-size: 0.95rem; line-height: 1.6; }

/* --- Footer & Modal --- */
.site-footer { padding: 4rem 0; border-top: 1px solid var(--border); margin-top: 4rem; font-size: 0.9rem; }
.footer-flex { display: flex; flex-direction: column; align-items: center; gap: 1.5rem; }
.footer-links a { color: var(--text-body); margin: 0 10px; text-decoration: none; }
.final-cta { text-align: center; padding: 6rem 1.5rem; background: var(--bg-subtle); }

.modal { position: fixed; inset: 0; z-index: 999; display: flex; align-items: center; justify-content: center; visibility: hidden; opacity: 0; transition: 0.2s; }
.modal.active { visibility: visible; opacity: 1; }
.modal-overlay { position: absolute; inset: 0; background: rgba(15,23,42,0.6); backdrop-filter: blur(4px); }
.modal-box { position: relative; background: white; padding: 2.5rem; width: 90%; max-width: 420px; border-radius: 12px; box-shadow: var(--shadow-card); transform: translateY(10px); transition: 0.2s; }
.modal.active .modal-box { transform: translateY(0); }
.modal-close { position: absolute; top: 1rem; right: 1rem; border: none; background: none; font-size: 1.5rem; cursor: pointer; color: var(--text-body); }
.input-group { margin-bottom: 1rem; }
.input-group label { display: block; margin-bottom: 0.4rem; font-size: 0.85rem; font-weight: 600; }
.input-group input { width: 100%; padding: 0.75rem; border: 1px solid var(--border); border-radius: 6px; font-size: 1rem; transition: border 0.2s; }
.input-group input:focus { outline: none; border-color: var(--text-head); }
.hidden { display: none; }
.check-circle { width: 50px; height: 50px; background: #dcfce7; color: #15803d; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; margin: 0 auto 1rem; }
#success-msg { text-align: center; padding: 2rem 0; }

@media(min-width: 768px) { .footer-flex { flex-direction: row; justify-content: space-between; } }
/* Animation classes */
.reveal { opacity: 0; transform: translateY(20px); transition: 0.6s ease-out; }
.reveal.visible { opacity: 1; transform: translateY(0); }
