// Login Form Submission
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  if (email && password) {
    alert("Login successful!");
    // Redirect to the home page
    window.location.href = "index.html"; // Replace 'index.html' with your home page URL
  } else {
    alert("Please fill in all fields.");
  }
});


 // Signup Form Submission
document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("signupName").value;
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (!name || !email || !password || !confirmPassword) {
    alert("Please fill in all fields.");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  alert("Signup successful!");
  // Redirect to the home page
  window.location.href = "index.html"; // Replace 'index.html' with your home page URL
});

// Contact Form Submission Handling
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all required fields (Name, Email, Message).");
    return;
  }

  if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  alert("Your message has been sent successfully!");
  document.getElementById("contactForm").reset(); // Clear the form
});

// Email Validation Function
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
