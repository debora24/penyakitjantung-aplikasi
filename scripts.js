// scripts.js

function handleLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const correctUsername = 'admin';  // Hardcoded correct username
    const correctPassword = 'password';  // Hardcoded correct password

    if (username === correctUsername && password === correctPassword) {
        window.location.href = 'dashboard.html';  // Redirect to dashboard page
    } else {
        document.getElementById('errorMessage').textContent = 'Invalid username or password';
    }

    return false;  // Prevent form submission
}
