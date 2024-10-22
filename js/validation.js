// Form validation function
document.querySelector(".login-form").addEventListener("submit", function(event) {
    // Get the input fields
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Regular expression for email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    // Error messages container
    let errorMessage = "";

    // Validate email field
    if (email === "") {
        errorMessage += "Email is required.\n";
    } else if (!emailPattern.test(email)) {
        errorMessage += "Please enter a valid email address.\n";
    }

    // Validate password field
    if (password === "") {
        errorMessage += "Password is required.\n";
    }

    // Check if there are any validation errors
    if (errorMessage !== "") {
        // Prevent form submission
        event.preventDefault();
        // Display the error message
        alert(errorMessage);
    }
});
