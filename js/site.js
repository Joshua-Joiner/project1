// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
  // Get the form element
  const form = document.getElementById('signup-form');

  // Add a submit event listener to the form
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Get the email input field
    const emailField = document.getElementById('email');
    const emailValue = emailField.value;
    
    // Define a regular expression for basic email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;

    // Check if the email is valid
    if (!emailPattern.test(emailValue)) {
      alert("Please enter a valid email address.");
      return; // Stop the form submission
    }

    // If email is valid, proceed with submission
    alert("Thank you for signing up! We'll keep you updated.");
    
    // Optionally, you could then submit the form after the alert, if desired
    // form.submit(); 
  });
});
