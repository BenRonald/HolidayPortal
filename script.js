document.addEventListener('DOMContentLoaded', () => {
    
    // --- Pricing Calculator ---
    const userSlider = document.getElementById('user-slider');
    const userCountDisplay = document.getElementById('user-count');
    const totalPriceDisplay = document.getElementById('total-price');
    const perYearLabel = document.getElementById('per-year');
    const pricingCta = document.getElementById('pricing-cta');

    const updatePricing = (val) => {
        const users = parseInt(val);
        
        if (users > 100) {
            userCountDisplay.textContent = "100+";
            totalPriceDisplay.textContent = "Contact us";
            perYearLabel.textContent = "";
            pricingCta.textContent = "Contact sales";
            pricingCta.disabled = true;
            pricingCta.style.opacity = "0.5";
        } else {
            userCountDisplay.textContent = users;
            totalPriceDisplay.textContent = `£${users * 12}`;
            perYearLabel.textContent = "/ year";
            pricingCta.textContent = "Request account";
            pricingCta.disabled = false;
            pricingCta.style.opacity = "1";
        }
    };

    userSlider.addEventListener('input', (e) => updatePricing(e.target.value));

    // --- FAQ Accordion ---
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const isExpanded = question.getAttribute('aria-expanded') === 'true';
            const answer = document.getElementById(question.getAttribute('aria-controls'));
            
            // Close others
            faqQuestions.forEach(q => {
                if (q !== question) {
                    q.setAttribute('aria-expanded', 'false');
                    document.getElementById(q.getAttribute('aria-controls')).hidden = true;
                }
            });

            // Toggle current
            question.setAttribute('aria-expanded', !isExpanded);
            answer.hidden = isExpanded;
        });
    });

    // --- Modal Logic ---
    const modal = document.getElementById('modal');
    const ctaTriggers = document.querySelectorAll('.cta-trigger');
    const modalClose = document.querySelector('.modal-close');
    const modalOverlay = document.querySelector('.modal-overlay');

    const openModal = () => {
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden'; // Prevent scroll
        document.getElementById('name').focus();
    };

    const closeModal = () => {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    };

    ctaTriggers.forEach(trigger => trigger.addEventListener('click', openModal));
    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);

    // Escape key to close modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
    });

    // --- Form Validation & Submission ---
    const form = document.getElementById('request-form');
    const successState = document.getElementById('success-state');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value.trim(),
            email: document.getElementById('email').value.trim(),
            company: document.getElementById('company').value.trim(),
            users: document.getElementById('users').value
        };

        // Simple validation check
        let hasError = false;
        if (formData.name.length < 2) {
            showError('name', 'Please enter your full name');
            hasError = true;
        }
        if (!formData.email.includes('@')) {
            showError('email', 'Please enter a valid work email');
            hasError = true;
        }

        if (hasError) return;

        // Log payload as requested
        console.log('Form Payload:', formData);

        // Show success state
        form.classList.add('hidden');
        successState.classList.remove('hidden');
        
        // Auto-close modal after delay
        setTimeout(() => {
            closeModal();
            // Reset form for future use
            setTimeout(() => {
                form.reset();
                form.classList.remove('hidden');
                successState.classList.add('hidden');
            }, 500);
        }, 3000);
    });

    const showError = (fieldId, msg) => {
        const field = document.getElementById(fieldId);
        const errorSpan = field.nextElementSibling;
        errorSpan.textContent = msg;
        field.style.borderColor = '#dc2626';
        
        setTimeout(() => {
            errorSpan.textContent = '';
            field.style.borderColor = '';
        }, 3000);
    };

    // --- Smooth Scroll for nav links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
