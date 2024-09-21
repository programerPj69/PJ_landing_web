
const loginForm = document.querySelector('.login-box form');
loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = loginForm.querySelector('input[type="email"]').value;
    const password = loginForm.querySelector('input[type="password"]').value;

    if (email === '' || password === '') {
        alert('Please fill in both fields.');
    } else {
        // Here you can add actual authentication logic
        alert('Login successful!');
    }
});

// Register Form Validation
const registerForm = document.querySelector('.register-box form');
if (registerForm) {
    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = registerForm.querySelector('input[type="text"]').value;
        const email = registerForm.querySelector('input[type="email"]').value;
        const password = registerForm.querySelector('input[type="password"]').value;
        const confirmPassword = registerForm.querySelector('input[type="password"]:nth-of-type(2)').value;

        if (name === '' || email === '' || password === '' || confirmPassword === '') {
            alert('Please fill in all fields.');
        } else if (password !== confirmPassword) {
            alert('Passwords do not match.');
        } else {
            // You can add registration logic here (e.g., send data to a server)
            alert('Registration successful!');
        }
    });
}
