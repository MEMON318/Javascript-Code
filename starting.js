const form = document.getElementById("registrationForm");
const message = document.getElementById("message");

form.addEventListener("submit", function (event) {

    // Prevent page reload
    event.preventDefault();

    // Get input values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const country = document.getElementById("country").value;
    const agree = document.getElementById("agree").checked;

    // Validate name
    if (name === "") {
        showMessage("Please enter your name.", "red");
        return;
    }

    // Validate email
    if (email === "") {
        showMessage("Please enter your email.", "red");
        return;
    }

    // Validate password
    if (password.length < 6) {
        showMessage(
            "Password must be at least 6 characters.",
            "red"
        );
        return;
    }

    // Validate country
    if (country === "") {
        showMessage("Please select your country.", "red");
        return;
    }

    // Validate checkbox
    if (!agree) {
        showMessage(
            "Please agree to the terms and conditions.",
            "red"
        );
        return;
    }

    // Successful validation
    showMessage(
        "Registration successful! Welcome, " + name + "!",
        "green"
    );

    // Clear form fields
    form.reset();
});

// Display message
function showMessage(text, color) {
    message.textContent = text;
    message.style.color = color;
}