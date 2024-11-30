// Login Form Submission
document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    if (email && password) {
      alert("Login successful!");
      // You can replace this with actual backend login handling
    } else {
      alert("Please fill in all fields.");
    }
  });

  // Signup Form Submission
  document.getElementById("signupForm").addEventListener("submit", function(e) {
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
    // You can replace this with actual backend signup handling
  });