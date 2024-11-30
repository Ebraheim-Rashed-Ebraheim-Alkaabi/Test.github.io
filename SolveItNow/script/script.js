document.addEventListener("DOMContentLoaded", function () {
    // Toggle between login and signup forms
    document.getElementById("signupLink")?.addEventListener("click", function(event) {
        event.preventDefault();
        document.getElementById("loginForm").classList.add("hidden");
        document.getElementById("signupForm").classList.remove("hidden");
    });

    document.getElementById("loginLink")?.addEventListener("click", function(event) {
        event.preventDefault();
        document.getElementById("signupForm").classList.add("hidden");
        document.getElementById("loginForm").classList.remove("hidden");
    });

    // Login form submission handler
    document.getElementById("loginForm")?.addEventListener("submit", function(event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username && password) {
            // Store username and password in sessionStorage for profile page
            sessionStorage.setItem("username", username);
            sessionStorage.setItem("password", password);
            sessionStorage.setItem("email", "user@email.com");  // Default email
            window.location.href = "../screens/home-page.html";
        } else {
            alert("Please fill in all fields.");
        }
    });

    // Signup form submission handler
    document.getElementById("signupForm")?.addEventListener("submit", function(event) {
        event.preventDefault();
        const newUsername = document.getElementById("newUsername").value;
        const email = document.getElementById("email").value;
        const newPassword = document.getElementById("newPassword").value;

        if (newUsername && email && newPassword) {
            sessionStorage.setItem("username", newUsername);
            sessionStorage.setItem("password", newPassword);
            sessionStorage.setItem("email", email);
            alert("Signup successful!");
            window.location.href = "../screens/home-page.html";
        } else {
            alert("Please fill in all fields.");
        }
    });

    // Load profile data
    const profileUsername = document.getElementById("profileUsername");
    const profileEmail = document.getElementById("profileEmail");
    const profilePassword = document.getElementById("profilePassword");

    if (profileUsername && profileEmail && profilePassword) {
        profileUsername.value = sessionStorage.getItem("username") || "user";
        profileEmail.value = sessionStorage.getItem("email") || "user@email.com";
        profilePassword.value = sessionStorage.getItem("password") || "password";
    }

    // Toggle password visibility
    const togglePasswordButton = document.getElementById("togglePassword");
    togglePasswordButton?.addEventListener("click", function() {
        const passwordField = document.getElementById("profilePassword");
        if (passwordField.type === "password") {
            passwordField.type = "text";
            togglePasswordButton.textContent = "Hide";
        } else {
            passwordField.type = "password";
            togglePasswordButton.textContent = "Show";
        }
    });
});
