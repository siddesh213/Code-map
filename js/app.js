// Helper function to validate email
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
}

// Show signup form when user clicks "Sign Up" link
const signupLink = document.getElementById("signup-link");
if (signupLink) {
    signupLink.addEventListener("click", function () {
        document.getElementById("login-form").style.display = "none";
        document.getElementById("signup-form").style.display = "block";
    });
}

// Sign-Up Logic
const signupButton = document.getElementById('signup-button');
if (signupButton) {
    signupButton.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent form from submitting

        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;

        // Validate Email
        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Validate Password Length
        if (password.length < 6) {
            alert('Password should be at least 6 characters long.');
            return;
        }

        // Store the user credentials in localStorage after sign-up
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userPassword', password);

        // Display a success message and switch to login form
        alert('Sign up successful! Please login to continue.');
        document.getElementById("signup-form").style.display = "none";
        document.getElementById("login-form").style.display = "block";
    });
}

// Login Logic
const loginButton = document.getElementById('login-button');
if (loginButton) {
    loginButton.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent form from submitting

        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        // Validate Email
        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Validate Password Length
        if (password.length < 6) {
            alert('Password should be at least 6 characters long.');
            return;
        }

        // Check if the user exists in localStorage
        const storedEmail = localStorage.getItem('userEmail');
        const storedPassword = localStorage.getItem('userPassword');

        if (email === storedEmail && password === storedPassword) {
            // If both fields match, log the user in and redirect to home page
            localStorage.setItem("isLoggedIn", "true");
            alert('Login successful!');
            window.location.href = "home.html"; // Redirect to homepage
        } else {
            // If credentials don't match
            alert('Invalid email or password. Please sign up first.');
        }
    });
}
