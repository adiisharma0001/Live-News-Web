
// app.js
// JavaScript code for form submission
document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault();
  // Get form data
  var formData = new FormData(event.target);
  var name = formData.get("name");
  var email = formData.get("email");
  var message = formData.get("message");
  // Validate form data (e.g., check for empty fields)
  if (!name || !email || !message) {
    alert("Please fill in all fields");
    return;
  }
  // Perform form submission (e.g., send data to server)
  // You can customize this part to suit your needs
  // ...
  // Reset form
  event.target.reset();
  alert("Message sent successfully!");
});
