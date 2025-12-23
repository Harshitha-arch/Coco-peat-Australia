document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you for your enquiry. Our team will respond shortly.");
  this.reset();
});
