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

let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.itemss')
    document.querySelector('.slide1').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.itemss')
    document.querySelector('.slide1').prepend(items[items.length - 1])
})

document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const emailInput = document.querySelector('.tbox');
    const email = emailInput.value;
    const responseElement = document.getElementById('newsletter-response');

    fetch('/subscribe', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email })
    })
    .then(response => response.text())
    .then(message => {
        responseElement.textContent = message;
        emailInput.value = '';
    })
    .catch(error => {
        responseElement.textContent = 'An error occurred. Please try again.';
        console.error('Error:', error);
    });
});
