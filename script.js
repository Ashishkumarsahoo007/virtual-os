// Toggle password visibility
document.getElementById('togglePassword').addEventListener('click', function () {
    const passwordInput = document.getElementById('password');
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);

    // Change the toggle icon
    this.textContent = type === 'password' ? '👁️' : '🙈';
});

// Handle form submission
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMessage = document.getElementById('errorMessage');

    if (!email || !password) {
        errorMessage.textContent = 'Please fill in all fields.';
        errorMessage.style.display = 'block';
        return;
    }

    if (email === 'admin@example.com' && password === 'password123') {
        alert('Login successful!');
        errorMessage.style.display = 'none';
    } else {
        errorMessage.textContent = 'Invalid email or password.';
        errorMessage.style.display = 'block';
    }
});
