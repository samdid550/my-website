function showAlert() {
    alert("Hello! Welcome to our website.");
}

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted! Thank you for your message.');
    this.reset();
});
