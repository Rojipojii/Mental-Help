// Form validation function
document.querySelector(".signup-form").addEventListener("submit", function(event) {
    // Get the input field values
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirm-password").value.trim();

    // Regular expression for email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    // Error message container
    let errorMessage = "";

    // Validate username field
    if (username === "") {
        errorMessage += "Username is required.\n";
    }

    // Validate email field
    if (email === "") {
        errorMessage += "Email is required.\n";
    } else if (!emailPattern.test(email)) {
        errorMessage += "Please enter a valid email address.\n";
    }

    // Validate password field
    if (password === "") {
        errorMessage += "Password is required.\n";
    } else if (password.length < 6) {
        errorMessage += "Password must be at least 6 characters long.\n";
    }

    // Validate confirm password field
    if (confirmPassword === "") {
        errorMessage += "Please confirm your password.\n";
    } else if (password !== confirmPassword) {
        errorMessage += "Passwords do not match.\n";
    }

    // Check if there are any validation errors
    if (errorMessage !== "") {
        // Prevent form submission
        event.preventDefault();
        // Display the error message
        alert(errorMessage);
    }
});
