function showAlert() {
    alert("Hello! Welcome to our website.");
}

window.addEventListener('load', function() {
    setTimeout(function() {
        document.getElementById('graduated-image').style.opacity = 1;
    }, 1000); // Delay of 1 second before showing the image
});

window.addEventListener('scroll', function() {
    const image = document.getElementById('graduated-image');
    const imagePosition = image.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;

    if (imagePosition < screenPosition) {
        image.style.opacity = 1;
    }
});
