// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    
    // Handle SOS Button click
    const sosButton = document.querySelector('#sos-button');
    if (sosButton) {
        sosButton.addEventListener('click', () => {
            handleSOSButtonClick();
        });
    }

    // Handle Emergency Mode Button click
    const emergencyModeButton = document.querySelector('#emergency-mode-button');
    if (emergencyModeButton) {
        emergencyModeButton.addEventListener('click', () => {
            handleEmergencyModeClick();
        });
    }

    // SOS Button Action
    function handleSOSButtonClick() {
        alert("SOS Alert Activated! Sending location to your trusted contacts...");

        // Simulate sending SOS alert (you can integrate real APIs here)
        sendSOSAlert();
    }

    function sendSOSAlert() {
        // Simulate an API request to send the SOS alert
        console.log("Sending SOS alert to contacts...");
        
        // Example of success/failure response after 2 seconds
        setTimeout(() => {
            alert("Your SOS alert has been successfully sent!");
        }, 2000);
    }

    // Emergency Mode Action
    function handleEmergencyModeClick() {
        alert("Emergency Mode Activated! Location sharing with trusted contacts started.");
        // Simulate starting Emergency Mode
        sendEmergencyModeAlert();
    }

    function sendEmergencyModeAlert() {
        console.log("Emergency Mode started. Location sharing ongoing...");
        setTimeout(() => {
            alert("Emergency Mode is active and sharing your location!");
        }, 2000);
    }

    // Dynamic Content Loading for sections (for single-page feel)
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const page = event.target.getAttribute('href').replace('.html', '');
            loadPageContent(page);
        });
    });

    function loadPageContent(page) {
        const contentDiv = document.querySelector('.container');
        fetch(`${page}.html`)
            .then(response => response.text())
            .then(html => {
                // Load the new content into the container
                contentDiv.innerHTML = html;

                // Rebind the SOS button after loading new content
                const sosButton = document.querySelector('.cta-button');
                if (sosButton) {
                    sosButton.addEventListener('click', () => {
                        handleSOSButtonClick();
                    });
                }
            })
            .catch(error => {
                console.error('Error loading page:', error);
                contentDiv.innerHTML = `<p>Sorry, the ${page} page could not be loaded.</p>`;
            });
    }

    // Form Validation (for the Contact page or future form integrations)
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent form submission
            validateForm();
        });
    }

    function validateForm() {
        const emailField = document.querySelector('#email');
        const phoneField = document.querySelector('#phone');
        let isValid = true;

        // Validate Email
        if (!validateEmail(emailField.value)) {
            alert("Please enter a valid email address.");
            isValid = false;
        }

        // Validate Phone (Simple numeric check, customize for your need)
        if (!validatePhone(phoneField.value)) {
            alert("Please enter a valid phone number.");
            isValid = false;
        }

        if (isValid) {
            alert("Form submitted successfully!");
            contactForm.submit(); // Submit the form if valid
        }
    }

    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    function validatePhone(phone) {
        const phonePattern = /^\d{10}$/; // Simple 10 digit validation
        return phonePattern.test(phone);
    }

});


//impact page
const slides = document.querySelectorAll('.testimonial-slide');
const dots = document.querySelectorAll('.testimonial-indicators .dot');
let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

setInterval(nextSlide, 3000); // Change slide every 3 seconds
