document.addEventListener('DOMContentLoaded', () => {
    const whatsappLink = document.getElementById('whatsapp-link');
    if (whatsappLink) {
        const number = ['62', '856', '9233', '3896'].join('');
        whatsappLink.href = `https://api.whatsapp.com/send?phone=${number}`;
        whatsappLink.addEventListener('click', (event) => {
            event.preventDefault();
            window.open(whatsappLink.href, '_blank', 'noopener,noreferrer');
        });
    }

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            const name = contactForm.querySelector('#name');
            const email = contactForm.querySelector('#email');
            const phone = contactForm.querySelector('#phone');

            const isValid = [name, email, phone].every((field) => field && field.value.trim());
            if (!isValid) {
                event.preventDefault();
                alert('Mohon lengkapi nama, email, dan nomor telepon sebelum mengirim.');
                return;
            }

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email.value.trim())) {
                event.preventDefault();
                alert('Format email tidak valid.');
                return;
            }

            const submitButton = contactForm.querySelector('button[type="submit"]');
            if (submitButton) {
                submitButton.textContent = 'Mengirim...';
            }
        });
    }

    // Smooth Scrolling for in-page navigation links only.
    // Links to other pages (*.html or absolute URLs) are left untouched
    // so cross-page navigation works normally.
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (!href || href.startsWith('http') || href.includes('.html')) {
                return; // allow normal page navigation
            }
            const targetSection = document.querySelector(href);

            if (targetSection) {
                e.preventDefault();
                window.scrollTo({
                    top: targetSection.offsetTop - 80, // Adjust for sticky header
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll Animation for sections
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    const sections = document.querySelectorAll('.container');
    sections.forEach(section => {
        section.style.opacity = '1';
        section.style.transform = 'none';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';

        if ('IntersectionObserver' in window) {
            observer.observe(section);
        } else {
            section.classList.add('fade-in');
        }
    });

    // Add fade-in class style dynamically
    const style = document.createElement('style');
    style.innerHTML = `
        .fade-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
});
