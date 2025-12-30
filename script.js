document.addEventListener('DOMContentLoaded', () => {
    
    // --- Scroll Reveal Logic ---
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // --- Pricing Calculator ---
    const userSlider = document.getElementById('user-slider');
    const userCountDisplay = document.getElementById('user-count');
    const totalPriceDisplay = document.getElementById('total-price');
    const pricingCta = document.getElementById('pricing-cta');

    const updatePricing = (val) => {
        const users = parseInt(val);
        
        if (users > 100) {
            userCountDisplay.textContent = "100+";
            totalPriceDisplay.textContent = "Contact Us";
            pricingCta.textContent = "Contact sales";
        } else {
            userCountDisplay.textContent = users;
            totalPriceDisplay.textContent = `£${users * 12}`;
            pricingCta.textContent = "Request account";
        }
    };

    userSlider.addEventListener('input', (e) => updatePricing(e.target.value));

    // --- FAQ Accordion ---
    document.querySelectorAll('.faq-question').forEach(button => {
        button.addEventListener('click', () => {
            const isExpanded = button.getAttribute('aria-expanded') === 'true';
            const answer = document.getElementById(button.getAttribute('aria-controls'));
            
            // Close others for focus
            document.querySelectorAll('.faq-question').forEach(other => {
                if (other !== button) {
                    other.setAttribute('aria-expanded', 'false');
                    document.getElementById(other.getAttribute('aria-controls')).hidden = true;
                }
            });

            button.setAttribute('aria-expanded', !isExpanded);
            answer.hidden = isExpanded;
        });
    });

    // --- Modal Logic ---
    const modal = document.getElementById('modal');
    const openModal = () => {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        document.getElementById('name').focus();
    };
    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    };

    document.querySelectorAll('.cta-trigger').forEach(btn => btn.addEventListener('click', openModal));
    document.querySelector('.modal-close').addEventListener('click', closeModal);
    document.querySelector('.modal-overlay').addEventListener('click', closeModal);
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
    });

    // --- Form Handling ---
    const form = document.getElementById('request-form');
    const successState = document.getElementById('success-state');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const payload = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            company: document.getElementById('company').value,
            users: document.getElementById('users').value,
            timestamp: new Date().toISOString()
        };

        console.log('SaaS Lead Captured:', payload);

        // Visual Feedback
        const btn = form.querySelector('button');
        btn.disabled = true;
        btn.textContent = "Sending...";

        setTimeout(() => {
            form.classList.add('hidden');
            successState.classList.remove('hidden');
            
            setTimeout(() => {
                closeModal();
                form.reset();
                form.classList.remove('hidden');
                successState.classList.add('hidden');
                btn.disabled = false;
                btn.textContent = "Request account";
            }, 4000);
        }, 8000); // Mimic server work
    });
});
