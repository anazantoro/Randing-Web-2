/** @format */

// Get form elements
const signupForm = document.querySelector(".form-signup");
const emailInput = document.querySelector("#signup-email");
const usernameInput = document.querySelector("#signup-username");
const passwordInput = document.querySelector("#signup-password");
const confirmPasswordInput = document.querySelector("#signup-password-confirm");
const signupButton = document.querySelector("#continue");

const loginForm = document.querySelector(".form-login");
const loginUsernameInput = document.querySelector("#login-username");
const loginPasswordInput = document.querySelector("#login-password");
const loginButton = document.querySelector("#submit");

// Handle registration form submission
signupForm.addEventListener("submit", event => {
    event.preventDefault(); // Prevent form from submitting

    const email = emailInput.value;
    const username = usernameInput.value;
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    // Validate form data
    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    // Check if user already exists
    const existingUser = localStorage.getItem("user");
    if (existingUser) {
        alert("User already exists. Please login instead.");
        return;
    }

    // Save user data to localStorage
    const user = {
        email,
        username,
        password
    };
    localStorage.setItem("user", JSON.stringify(user));

    // Redirect to success page or do other things
    alert("Registration successful!");
});

// Handle login form submission
loginForm.addEventListener("submit", event => {
    event.preventDefault(); // Prevent form from submitting

    const username = loginUsernameInput.value;
    const password = loginPasswordInput.value;

    // Retrieve user data from localStorage
    const user = localStorage.getItem("user");
    if (!user) {
        alert("User does not exist. Please register first.");
        return;
    }

    // Parse user data from JSON
    const parsedUser = JSON.parse(user);

    // Validate login credentials
    if (parsedUser.username !== username || parsedUser.password !== password) {
        alert("Invalid username or password.");
        return;
    }

    // Redirect to dashboard or do other things
    window.location.href = "dashboard.html";
});

// ctrl + k + c = block comment
//  ctrl + k + u = unblock comment

// Untuk Menghandle Logout
// const logoutButton = document.getElementById('logout-button');
// logoutButton.addEventListener('click', function(event) {
//   event.preventDefault();
//   localStorage.clear();
//   window.location.href = 'login.html';
// });

const messageList = document.getElementById("messageList");

// Get the stored form data from session storage
const storedData = sessionStorage.getItem("formData");

if (storedData) {
    const data = JSON.parse(storedData);

    // Display the form data on the new HTML page
    messageList.innerHTML = `
    <p>Name: ${data["name"]}</p>
    <p>Email: ${data["email"]}</p>
    <p>Subject: ${data["subject"]}</p>
    <p>Experience: ${data["experience"]}</p>
    <p>Gender: ${data["gender"]}</p>
    <p>Option: ${data["option"]}</p>
    <p>Message: ${data["message"]}</p>
  `;
}
