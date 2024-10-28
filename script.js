// Get the modal
var modal = document.getElementById("newsletterPopup");

// Get the button that opens the modal
var btn = document.getElementById("subscribeBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Function to show the newsletter pop-up
function showNewsletterPopup() {
    modal.style.display = "block";
}

// Show the pop-up after 10 seconds
setTimeout(showNewsletterPopup, 10000); // 10000 milliseconds = 10 seconds

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Prevent the form from submitting for demonstration purposes
document.getElementById("newsletterForm").onsubmit = function(event) {
    event.preventDefault();
    alert("Thank you for subscribing!");
}