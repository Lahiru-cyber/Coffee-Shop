document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    if (email && password) {
      alert(`Welcome back, ${email}!`); // Replace with actual login logic
    } else {
      alert('Please enter valid credentials.');
    }
  });