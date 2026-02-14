/* ========================================
   Mountain View Coffee Co. - JavaScript
   Form Validation & Interactivity
   ======================================== */

/* ========================================
   Hamburger Menu Toggle
   Handles mobile navigation menu
   ======================================== */

document.addEventListener('DOMContentLoaded', function () {
    // Get the hamburger button and nav links
    const hamburgerButton = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    // Check if these elements exist (they exist on all pages)
    if (hamburgerButton && navLinks) {
        // Add click event listener to hamburger button
        hamburgerButton.addEventListener('click', function () {
            // Toggle the 'active' class on the button (for animation)
            hamburgerButton.classList.toggle('active');

            // Toggle the 'active' class on nav links (for showing/hiding menu)
            navLinks.classList.toggle('active');
        });

        // Close menu when a link is clicked
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', function () {
                hamburgerButton.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // Initialize form validation if contact form exists
    initializeFormValidation();
});

/* ========================================
   Form Validation
   Handles the contact form on contact.html
   ======================================== */

function initializeFormValidation() {
    // Get the contact form (only exists on contact page)
    const contactForm = document.getElementById('contactForm');

    if (!contactForm) {
        // Form doesn't exist on this page, so skip validation setup
        return;
    }

    // Get form elements
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const subjectSelect = document.getElementById('subject');
    const messageInput = document.getElementById('message');
    const formMessage = document.getElementById('formMessage');

    // Add submit event listener
    contactForm.addEventListener('submit', function (event) {
        // Prevent default form submission
        event.preventDefault();

        // Clear any previous messages
        formMessage.className = 'form-message';
        formMessage.textContent = '';

        // Run validation
        const isValid = validateForm(nameInput, emailInput, phoneInput, subjectSelect, messageInput);

        // If form is valid, show success message
        if (isValid) {
            // Show success message
            formMessage.className = 'form-message success';
            formMessage.textContent = 'Thank you! Your message has been sent successfully. We will respond within 24 hours.';

            // Reset the form
            contactForm.reset();

            // Clear any error messages
            clearErrorMessages();

            // Scroll to message
            formMessage.scrollIntoView({ behavior: 'smooth' });

            // In a real website, you would send this data to a server here
            // For now, we just show a success message
        }
    });

    // Add real-time validation as user types
    nameInput.addEventListener('blur', () => validateName(nameInput));
    emailInput.addEventListener('blur', () => validateEmail(emailInput));
    phoneInput.addEventListener('blur', () => validatePhone(phoneInput));
    subjectSelect.addEventListener('change', () => validateSubject(subjectSelect));
    messageInput.addEventListener('blur', () => validateMessage(messageInput));
}

/* ========================================
   Validation Functions
   ======================================== */

/**
 * Validate entire form
 * Returns true if all fields are valid, false otherwise
 */
function validateForm(nameInput, emailInput, phoneInput, subjectSelect, messageInput) {
    // Validate each field
    const isNameValid = validateName(nameInput);
    const isEmailValid = validateEmail(emailInput);
    const isPhoneValid = validatePhone(phoneInput);
    const isSubjectValid = validateSubject(subjectSelect);
    const isMessageValid = validateMessage(messageInput);

    // Return true only if ALL fields are valid
    return isNameValid && isEmailValid && isPhoneValid && isSubjectValid && isMessageValid;
}

/**
 * Validate name field
 * Rule: Must not be empty and must be at least 2 characters
 */
function validateName(nameInput) {
    const nameError = document.getElementById('nameError');
    const name = nameInput.value.trim();

    if (name === '') {
        // Name is empty
        nameError.textContent = 'Please enter your name';
        nameError.classList.add('show');
        nameInput.classList.add('invalid');
        return false;
    } else if (name.length < 2) {
        // Name is too short
        nameError.textContent = 'Name must be at least 2 characters';
        nameError.classList.add('show');
        nameInput.classList.add('invalid');
        return false;
    } else {
        // Name is valid
        nameError.textContent = '';
        nameError.classList.remove('show');
        nameInput.classList.remove('invalid');
        return true;
    }
}

/**
 * Validate email field
 * Rule: Must be a valid email format
 */
function validateEmail(emailInput) {
    const emailError = document.getElementById('emailError');
    const email = emailInput.value.trim();

    // Regular expression for email validation
    // This is a basic check - real email validation should happen on the server
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === '') {
        // Email is empty
        emailError.textContent = 'Please enter your email address';
        emailError.classList.add('show');
        emailInput.classList.add('invalid');
        return false;
    } else if (!emailRegex.test(email)) {
        // Email format is invalid
        emailError.textContent = 'Please enter a valid email address (example@domain.com)';
        emailError.classList.add('show');
        emailInput.classList.add('invalid');
        return false;
    } else {
        // Email is valid
        emailError.textContent = '';
        emailError.classList.remove('show');
        emailInput.classList.remove('invalid');
        return true;
    }
}

/**
 * Validate phone field (optional field, but if filled, must be valid)
 * Rule: If provided, must be 10 digits (basic validation)
 */
function validatePhone(phoneInput) {
    const phoneError = document.getElementById('phoneError');
    const phone = phoneInput.value.trim();

    // If phone field is empty, it's optional, so return true
    if (phone === '') {
        phoneError.textContent = '';
        phoneError.classList.remove('show');
        phoneInput.classList.remove('invalid');
        return true;
    }

    // If phone is provided, check if it's valid
    // Remove any non-digit characters
    const phoneDigits = phone.replace(/\D/g, '');

    if (phoneDigits.length < 10) {
        // Phone number is too short
        phoneError.textContent = 'Please enter a valid phone number (at least 10 digits)';
        phoneError.classList.add('show');
        phoneInput.classList.add('invalid');
        return false;
    } else {
        // Phone is valid
        phoneError.textContent = '';
        phoneError.classList.remove('show');
        phoneInput.classList.remove('invalid');
        return true;
    }
}

/**
 * Validate subject field
 * Rule: A subject must be selected
 */
function validateSubject(subjectSelect) {
    const subjectError = document.getElementById('subjectError');
    const subject = subjectSelect.value;

    if (subject === '') {
        // No subject selected
        subjectError.textContent = 'Please select a reason for contacting us';
        subjectError.classList.add('show');
        subjectSelect.classList.add('invalid');
        return false;
    } else {
        // Subject is valid
        subjectError.textContent = '';
        subjectError.classList.remove('show');
        subjectSelect.classList.remove('invalid');
        return true;
    }
}

/**
 * Validate message field
 * Rule: Must not be empty and must be at least 10 characters
 */
function validateMessage(messageInput) {
    const messageError = document.getElementById('messageError');
    const message = messageInput.value.trim();

    if (message === '') {
        // Message is empty
        messageError.textContent = 'Please enter your message';
        messageError.classList.add('show');
        messageInput.classList.add('invalid');
        return false;
    } else if (message.length < 10) {
        // Message is too short
        messageError.textContent = 'Message must be at least 10 characters';
        messageError.classList.add('show');
        messageInput.classList.add('invalid');
        return false;
    } else {
        // Message is valid
        messageError.textContent = '';
        messageError.classList.remove('show');
        messageInput.classList.remove('invalid');
        return true;
    }
}

/**
 * Clear all error messages and invalid classes
 */
function clearErrorMessages() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(msg => {
        msg.textContent = '';
        msg.classList.remove('show');
    });

    const invalidInputs = document.querySelectorAll('input.invalid, select.invalid, textarea.invalid');
    invalidInputs.forEach(input => {
        input.classList.remove('invalid');
    });
}

/* ========================================
   Additional Interactivity
   ======================================== */

/**
 * Smooth scrolling for anchor links
 * When you click a link to #section, it smoothly scrolls there
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        // Only smooth scroll if the target exists
        const targetId = this.getAttribute('href');
        if (targetId === '#') {
            return; // Skip if href is just '#'
        }

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            event.preventDefault();
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

/* ========================================
   Accessibility Enhancement
   Skip to main content link
   ======================================== */

// This script enhances keyboard navigation
// Users can press Tab to navigate through links and buttons
// The focus outline is handled by CSS

document.addEventListener('keydown', function (event) {
    // If user presses Escape, close the mobile menu
    if (event.key === 'Escape') {
        const hamburgerButton = document.getElementById('hamburger');
        const navLinks = document.getElementById('navLinks');

        if (hamburgerButton && navLinks) {
            hamburgerButton.classList.remove('active');
            navLinks.classList.remove('active');
        }
    }
});

/* ========================================
   Page Load Event
   Log that page has loaded (useful for debugging)
   ======================================== */

window.addEventListener('load', function () {
    console.log('Mountain View Coffee Co. website loaded successfully!');
    console.log('JavaScript is working properly.');
});

// End of script
