(function () {
  'use strict';

  const form = document.getElementById('loginForm');

  form.addEventListener('submit', function (event) {
      let isValid = true; // Flag to track overall form validity

      // Prevent default form submission to handle validation manually
      event.preventDefault();
      event.stopPropagation();

      // Add the 'was-validated' class to show validation feedback after first submission attempt
      form.classList.add('was-validated');

      // --- Get references to input fields and feedback elements ---
      const emailInput = document.getElementById('email');
      const passwordInput = document.getElementById('password');

      // Get feedback elements (assuming invalid-feedback is the next sibling unless specified by ID)
      const emailFeedback = emailInput.nextElementSibling;
      const passwordFeedback = document.getElementById('passwordFeedback');


      // --- Reset previous validation feedback (optional, Bootstrap handles this with was-validated) ---
      // const inputs = [emailInput, passwordInput];
      // inputs.forEach(input => {
      //   input.classList.remove('is-invalid', 'is-valid');
      // });
      // if (passwordFeedback) passwordFeedback.textContent = 'Please enter your password (at least 8 characters).';


      // --- Perform Validation Checks ---

      // Email validation (basic format check) - Relying on Bootstrap's 'required' and type='email' validation primarily
      // You can add custom regex here if needed, but Bootstrap's built-in check is usually sufficient for basic format
      if (!form.checkValidity()) { // Check all built-in validation constraints first
           isValid = false;
      } else {
           // If Bootstrap's built-in validation passes, you can add custom checks here
           // For example, a more strict email regex if needed
           const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
           if (!emailRegex.test(emailInput.value.trim())) {
                emailInput.classList.add('is-invalid');
                emailFeedback.textContent = 'Please enter a valid email address.';
                isValid = false;
           } else {
                emailInput.classList.add('is-valid'); // Add is-valid if all checks pass
           }
      }


      // Password validation (basic strength) - Custom check alongside Bootstrap's 'required' and minlength
      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // At least 8 characters, one letter, one number
      if (passwordInput.value === '' || !passwordRegex.test(passwordInput.value)) {
          passwordInput.classList.add('is-invalid');
          // Update feedback message only if the field is not just empty (Bootstrap handles empty required fields)
          if (passwordInput.value !== '') {
              passwordFeedback.textContent = 'Password must be at least 8 characters long and contain at least one letter and one number.';
          } else {
               passwordFeedback.textContent = 'Please enter your password.'; // Default message for empty required field
          }
          isValid = false;
      } else {
          passwordInput.classList.add('is-valid'); // Add is-valid if all checks pass
      }


      // --- Final Submission Handling ---
      if (isValid) {
          // If all validation passes, you would typically send the form data to a server here
          console.log('Login form submitted successfully (client-side validation passed)!');
          // In a real application, use fetch() or XMLHttpRequest to send data
          /*
          const formData = new FormData(form);
          fetch('/login', {
              method: 'POST',
              body: formData
          })
          .then(response => response.json())
          .then(data => {
              console.log('Server response:', data);
              // Handle server response (e.g., redirect, show success message)
          })
          .catch(error => {
              console.error('Error:', error);
              // Handle errors (e.g., show error message to user)
          });
          */

          // For this example, we'll just prevent default submission and log success
          // event.target.submit(); // Uncomment this line to allow actual form submission if not using fetch
      } else {
          console.log('Login form validation failed.');
      }
  }, false);
})();