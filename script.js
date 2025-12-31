// ============================================
// Holiday Landing Page - JavaScript
// ============================================

(function() {
    'use strict';

    // ============================================
    // Pricing Calculator
    // ============================================
    const userSlider = document.getElementById('user-slider');
    const userCount = document.getElementById('user-count');
    const totalPrice = document.getElementById('total-price');
    const PRICE_PER_USER = 1; // £1 per user per month

    if (userSlider && userCount && totalPrice) {
        function updatePricing() {
            const count = parseInt(userSlider.value, 10);
            const total = count * PRICE_PER_USER;
            
            userCount.textContent = count;
            totalPrice.textContent = `£${total.toLocaleString('en-GB')}`;
        }

        userSlider.addEventListener('input', updatePricing);
        updatePricing(); // Initial calculation
    }

    // ============================================
    // FAQ Accordion
    // ============================================
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            const answerId = this.getAttribute('aria-controls');
            const answer = document.getElementById(answerId);
            
            // Close all other FAQs
            faqQuestions.forEach(q => {
                if (q !== this) {
                    q.setAttribute('aria-expanded', 'false');
                    const otherAnswerId = q.getAttribute('aria-controls');
                    const otherAnswer = document.getElementById(otherAnswerId);
                    if (otherAnswer) {
                        otherAnswer.hidden = true;
                    }
                }
            });
            
            // Toggle current FAQ
            this.setAttribute('aria-expanded', !isExpanded);
            if (answer) {
                answer.hidden = isExpanded;
            }
        });
    });

    // ============================================
    // Modal Functionality
    // ============================================
    const modal = document.getElementById('request-modal');
    const modalOverlay = modal?.querySelector('.modal-overlay');
    const modalClose = modal?.querySelector('.modal-close');
    const ctaTriggers = document.querySelectorAll('.cta-trigger');
    const requestForm = document.getElementById('request-form');
    const formContainer = document.getElementById('form-container');
    const successMsg = document.getElementById('success-msg');
    const teamSizeInput = document.getElementById('team-size');
    const userSliderForForm = document.getElementById('user-slider');

    function openModal() {
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
            
            // Set team size from slider if available
            if (teamSizeInput && userSliderForForm) {
                teamSizeInput.value = userSliderForForm.value;
            }
            
            // Focus first input
            const firstInput = modal.querySelector('input');
            if (firstInput) {
                setTimeout(() => firstInput.focus(), 100);
            }
        }
    }

    function closeModal() {
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
            
            // Reset form after delay
            setTimeout(() => {
                if (requestForm) {
                    requestForm.reset();
                }
                if (formContainer) {
                    formContainer.classList.remove('hidden');
                }
                if (successMsg) {
                    successMsg.classList.add('hidden');
                }
            }, 300);
        }
    }

    // Open modal triggers
    ctaTriggers.forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            openModal();
        });
    });

    // Close modal triggers
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }

    if (modalOverlay) {
        modalOverlay.addEventListener('click', closeModal);
    }

    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal?.classList.contains('active')) {
            closeModal();
        }
    });

    // ============================================
    // Form Submission
    // ============================================
    if (requestForm) {
        requestForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton?.textContent;
            
            // Disable button and show loading state
            if (submitButton) {
                submitButton.disabled = true;
                submitButton.textContent = 'Sending...';
            }
            
            const formData = {
                name: document.getElementById('name').value.trim(),
                email: document.getElementById('email').value.trim(),
                company: document.getElementById('company').value.trim(),
                teamSize: parseInt(document.getElementById('team-size').value, 10)
            };
            
            try {
                const response = await fetch('https://holiday-portal.vercel.app/api/send', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData)
                });
                
                if (response.ok) {
                    // Show success message
                    if (formContainer) {
                        formContainer.classList.add('hidden');
                    }
                    if (successMsg) {
                        successMsg.classList.remove('hidden');
                    }
                    
                    // Track conversion (if analytics available)
                    if (typeof gtag !== 'undefined') {
                        gtag('event', 'conversion', {
                            'send_to': 'AW-CONVERSION_ID/CONVERSION_LABEL',
                            'value': formData.teamSize * 1,
                            'currency': 'GBP'
                        });
                    }
                } else {
                    throw new Error('Submission failed');
                }
            } catch (error) {
                console.error('Error submitting form:', error);
                alert('Sorry, there was an error submitting your request. Please try again or contact us directly.');
                
                // Re-enable button
                if (submitButton) {
                    submitButton.disabled = false;
                    submitButton.textContent = originalText;
                }
            }
        });
    }

    // ============================================
    // Scroll Animations
    // ============================================
    const revealElements = document.querySelectorAll('.reveal');
    
    function checkReveal() {
        const windowHeight = window.innerHeight;
        const revealPoint = 150;
        
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < windowHeight - revealPoint) {
                element.classList.add('visible');
            }
        });
    }
    
    // Initial check
    checkReveal();
    
    // Check on scroll (throttled)
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                checkReveal();
                ticking = false;
            });
            ticking = true;
        }
    });

    // ============================================
    // Smooth Scroll for Anchor Links
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ============================================
    // Header Scroll Effect
    // ============================================
    const header = document.querySelector('.site-header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (header) {
            if (currentScroll > 100) {
                header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
            } else {
                header.style.boxShadow = 'none';
            }
        }
        
        lastScroll = currentScroll;
    }, { passive: true });

    // ============================================
    // Mobile Menu
    // ============================================
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
            navLinks.classList.toggle('active');
        });
        
        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
                navLinks.classList.remove('active');
            });
        });
        
        // Close menu on outside click
        document.addEventListener('click', function(e) {
            if (!mobileMenuBtn.contains(e.target) && !navLinks.contains(e.target)) {
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
                navLinks.classList.remove('active');
            }
        });
    }

    // ============================================
    // Performance: Lazy load images (if any added)
    // ============================================
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        observer.unobserve(img);
                    }
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // ============================================
    // Analytics (placeholder - add your tracking code)
    // ============================================
    // Add Google Analytics, Plausible, or other analytics here

})();
