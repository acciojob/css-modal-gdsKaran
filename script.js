//your JS code here. If required.
// Get modal, button, and close span
const modal = document.getElementById("myModal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.querySelector(".close-modal");

// Open modal
openBtn.onclick = function() {
  modal.style.display = "block";
}

// Close modal (X button)
closeBtn.onclick = function() {
  modal.style.display = "none";
}

// Close modal when clicking outside content
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}
