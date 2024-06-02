// JavaScript for the slider
let slideIndex = 0;
const slides = document.querySelectorAll('.slider img');
let slideInterval;

function showSlides() {
    slides.forEach(slide => slide.style.display = "none");
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
}

function startSlider() {
    slideInterval = setInterval(showSlides, 10000); // Change image every 10 seconds
}

function stopSlider() {
    clearInterval(slideInterval);
}

showSlides(); // Initial call to show the first slide
startSlider(); // Start the slider

// Click event to stop and start the slider
document.querySelector('.slider').addEventListener('click', function() {
    stopSlider();
    showSlides();
    startSlider();
});
