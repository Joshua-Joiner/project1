// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
  // Get the form element
  const form = document.getElementById('signup-form');

  // Add a submit event listener to the form
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Show an alert or any other interactive feedback
    alert("Thank you for signing up! We'll keep you updated.");
    
    // Optionally, you could then submit the form after the alert, if desired
    // form.submit(); 
  });
});
