(function () {
    'use strict';

    // Get the form element
    const form = document.getElementById('signupForm');

    // Add an event listener for the form submission
    form.addEventListener('submit', function (event) {
        let isValid = true; // Flag to track overall form validity

        // Prevent default form submission to handle validation manually
        event.preventDefault();
        event.stopPropagation();

        // Add the 'was-validated' class to show validation feedback after first submission attempt
        form.classList.add('was-validated');

        // --- Get references to all input fields and feedback elements ---
        const firstNameInput = document.getElementById('firstName');
        const lastNameInput = document.getElementById('lastName');
        const genderSelect = document.getElementById('gender');
        const phoneInput = document.getElementById('phone');
        const addressTextarea = document.getElementById('address');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const confirmPasswordInput = document.getElementById('confirmPassword');

        // Get feedback elements (assuming invalid-feedback is the next sibling unless specified by ID)
        const firstNameFeedback = firstNameInput.nextElementSibling;
        const lastNameFeedback = lastNameInput.nextElementSibling;
        const genderFeedback = genderSelect.nextElementSibling;
        const phoneFeedback = phoneInput.nextElementSibling;
        const addressFeedback = addressTextarea.nextElementSibling;
        const emailFeedback = emailInput.nextElementSibling;
        const passwordFeedback = document.getElementById('passwordFeedback');
        const confirmPasswordFeedback = document.getElementById('confirmPasswordFeedback');


        // --- Reset previous validation feedback ---
        const inputs = [firstNameInput, lastNameInput, genderSelect, phoneInput, addressTextarea, emailInput, passwordInput, confirmPasswordInput];
        inputs.forEach(input => {
            input.classList.remove('is-invalid', 'is-valid');
        });
        // Reset specific feedback messages
        if (passwordFeedback) passwordFeedback.textContent = 'Please enter a password (at least 8 characters).';
        if (confirmPasswordFeedback) confirmPasswordFeedback.textContent = 'Please confirm your password.';


        // --- Perform Validation Checks for each field ---

        // First Name validation
        if (firstNameInput.value.trim() === '') {
            firstNameInput.classList.add('is-invalid');
            // firstNameFeedback.textContent = 'Please enter your first name.'; // Using default Bootstrap message
            isValid = false;
        } else {
            firstNameInput.classList.add('is-valid');
        }

        // Last Name validation
        if (lastNameInput.value.trim() === '') {
            lastNameInput.classList.add('is-invalid');
            // lastNameFeedback.textContent = 'Please enter your last name.'; // Using default Bootstrap message
            isValid = false;
        } else {
            lastNameInput.classList.add('is-valid');
        }

        // Email validation (basic format check)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailInput.value.trim() === '' || !emailRegex.test(emailInput.value.trim())) {
            emailInput.classList.add('is-invalid');
             if(emailInput.value.trim() !== '') emailFeedback.textContent = 'Please enter a valid email address.';
            isValid = false;
        } else {
            emailInput.classList.add('is-valid');
        }

        // Phone Number validation (basic 10-digit check)
        const phoneRegex = /^[0-9]{10}$/;
        if (phoneInput.value.trim() === '' || !phoneRegex.test(phoneInput.value.trim())) {
            phoneInput.classList.add('is-invalid');
             if(phoneInput.value.trim() !== '') phoneFeedback.textContent = 'Please enter a valid 10-digit phone number.';
            isValid = false;
        } else {
            phoneInput.classList.add('is-valid');
        }


        // Password validation (basic strength)
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // At least 8 characters, one letter, one number
        if (passwordInput.value === '' || !passwordRegex.test(passwordInput.value)) {
            passwordInput.classList.add('is-invalid');
             if(passwordInput.value !== '') passwordFeedback.textContent = 'Password must be at least 8 characters long and contain at least one letter and one number.';
            isValid = false;
        } else {
            passwordInput.classList.add('is-valid');
        }

        // Confirm Password validation and Password Match check
        if (confirmPasswordInput.value.trim() === '') {
             confirmPasswordInput.classList.add('is-invalid');
             // confirmPasswordFeedback.textContent = 'Please confirm your password.'; // Using default Bootstrap message
             isValid = false;
        } else if (passwordInput.value !== confirmPasswordInput.value) {
            confirmPasswordInput.classList.add('is-invalid');
            confirmPasswordFeedback.textContent = 'Passwords do not match.';
            isValid = false;
        } else {
            confirmPasswordInput.classList.add('is-valid');
        }

        // Gender validation
        if (genderSelect.value === '') {
            genderSelect.classList.add('is-invalid');
            // genderFeedback.textContent = 'Please select your gender.'; // Using default Bootstrap message
            isValid = false;
        } else {
            genderSelect.classList.add('is-valid');
        }

        // Address validation
        if (addressTextarea.value.trim() === '') {
            addressTextarea.classList.add('is-invalid');
            // addressFeedback.textContent = 'Please enter your address.'; // Using default Bootstrap message
            isValid = false;
        } else {
            addressTextarea.classList.add('is-valid');
        }


        // --- Final Submission Handling ---
        if (isValid) {
            // If all validation passes, you would typically send the form data to a server here
            console.log('Form submitted successfully (client-side validation passed)!');
            // In a real application, use fetch() or XMLHttpRequest to send data
            /*
            const formData = new FormData(form);
            fetch('/signup', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                console.log('Server response:', data);
                // Handle server response (e.g., redirect, show success message)
            })
            })
            .catch(error => {
                console.error('Error:', error);
                // Handle errors (e.g., show error message to user)
            });
            */

            // For this example, we'll just prevent default submission and log success
            // event.target.submit(); // Uncomment this line to allow actual form submission if not using fetch
        } else {
            console.log('Form validation failed.');
        }
    });
})();
