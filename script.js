// JavaScript for SecurTone Landing Page

// Define SVG icons
const icons = {
    lock: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>`,
    phone: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`,
    wifiOff: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><line x1="1" y1="1" x2="23" y2="23"></line><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"></path><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"></path><path d="M10.71 5.05A16 16 0 0 1 22.58 9"></path><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.95"></path><path d="M4.7 17a5 5 0 0 1 7.1-3.55"></path><path d="M12 20v-5"></path></svg>`,
    shield: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`
};

// Insert icons when the document is loaded
document.addEventListener("DOMContentLoaded", function() {
    const phoneIconEl = document.getElementById('icon-phone');
    if (phoneIconEl) {
        phoneIconEl.innerHTML = icons.phone;
    }

    const wifiOffIconEl = document.getElementById('icon-wifiOff');
    if (wifiOffIconEl) {
        wifiOffIconEl.innerHTML = icons.wifiOff;
    }

    const shieldIconEl = document.getElementById('icon-shield');
    if (shieldIconEl) {
        shieldIconEl.innerHTML = icons.shield;
    }

    // Handle form submission
    const form = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Simple validation
            if (!name || !email || !message) {
                formMessage.textContent = 'Please fill out all fields.';
                formMessage.classList.remove('text-green-600');
                formMessage.classList.add('text-red-600');
                return;
            }

            // Simulate form submission
            console.log('Form submitted:', { name, email, message });
            
            formMessage.textContent = 'Thank you! Your message has been sent.';
            formMessage.classList.remove('text-red-600');
            formMessage.classList.add('text-green-600');
            
            form.reset();

            // Remove message after 5 seconds
            setTimeout(() => {
                formMessage.textContent = '';
            }, 5000);
        });
    }
});