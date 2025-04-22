(function () {
    'use strict';

    
    const form = document.getElementById('signupForm');

  
    form.addEventListener('submit', function (event) {
        let isValid = true; 

      
        event.preventDefault();
        event.stopPropagation();

        
        form.classList.add('was-validated');

      
        const firstNameInput = document.getElementById('firstName');
        const lastNameInput = document.getElementById('lastName');
        const genderSelect = document.getElementById('gender');
        const phoneInput = document.getElementById('phone');
        const addressTextarea = document.getElementById('address');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const confirmPasswordInput = document.getElementById('confirmPassword');

     
        const firstNameFeedback = firstNameInput.nextElementSibling;
        const lastNameFeedback = lastNameInput.nextElementSibling;
        const genderFeedback = genderSelect.nextElementSibling;
        const phoneFeedback = phoneInput.nextElementSibling;
        const addressFeedback = addressTextarea.nextElementSibling;
        const emailFeedback = emailInput.nextElementSibling;
        const passwordFeedback = document.getElementById('passwordFeedback');
        const confirmPasswordFeedback = document.getElementById('confirmPasswordFeedback');


     
        const inputs = [firstNameInput, lastNameInput, genderSelect, phoneInput, addressTextarea, emailInput, passwordInput, confirmPasswordInput];
        inputs.forEach(input => {
            input.classList.remove('is-invalid', 'is-valid');
        });
      
        if (passwordFeedback) passwordFeedback.textContent = 'Please enter a password (at least 8 characters).';
        if (confirmPasswordFeedback) confirmPasswordFeedback.textContent = 'Please confirm your password.';


        

     
        if (firstNameInput.value.trim() === '') {
            firstNameInput.classList.add('is-invalid');
           
            isValid = false;
        } else {
            firstNameInput.classList.add('is-valid');
        }

       
        if (lastNameInput.value.trim() === '') {
            lastNameInput.classList.add('is-invalid');
           
            isValid = false;
        } else {
            lastNameInput.classList.add('is-valid');
        }

       
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailInput.value.trim() === '' || !emailRegex.test(emailInput.value.trim())) {
            emailInput.classList.add('is-invalid');
             if(emailInput.value.trim() !== '') emailFeedback.textContent = 'Please enter a valid email address.';
            isValid = false;
        } else {
            emailInput.classList.add('is-valid');
        }

       
        const phoneRegex = /^[0-9]{10}$/;
        if (phoneInput.value.trim() === '' || !phoneRegex.test(phoneInput.value.trim())) {
            phoneInput.classList.add('is-invalid');
             if(phoneInput.value.trim() !== '') phoneFeedback.textContent = 'Please enter a valid 10-digit phone number.';
            isValid = false;
        } else {
            phoneInput.classList.add('is-valid');
        }


      
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; 
        if (passwordInput.value === '' || !passwordRegex.test(passwordInput.value)) {
            passwordInput.classList.add('is-invalid');
             if(passwordInput.value !== '') passwordFeedback.textContent = 'Password must be at least 8 characters long and contain at least one letter and one number.';
            isValid = false;
        } else {
            passwordInput.classList.add('is-valid');
        }

       
        if (confirmPasswordInput.value.trim() === '') {
             confirmPasswordInput.classList.add('is-invalid');
            
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
        
            isValid = false;
        } else {
            genderSelect.classList.add('is-valid');
        }

        // Address validation
        if (addressTextarea.value.trim() === '') {
            addressTextarea.classList.add('is-invalid');
        
            isValid = false;
        } else {
            addressTextarea.classList.add('is-valid');
        }


      
        if (isValid) {
  
            console.log('Form submitted successfully (client-side validation passed)!');
           
        } else {
            console.log('Form validation failed.');
        }
    });
})();
