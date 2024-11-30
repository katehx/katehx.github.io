let slideIndex = 0;
let autoSlide; // Global variable for the auto slide timer
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("slides");
    const dots = document.querySelectorAll(".dot");

    // Hide all slides and deactivate all dots
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    dots.forEach(dot => dot.classList.remove("active"));

    // Increment the slideIndex and loop back if necessary
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Display the current slide and activate the corresponding dot
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");

    // Automatically switch slides every 6 seconds
    autoSlide = setTimeout(showSlides, 6000);
}

function showSlide(index) {
    const slides = document.getElementsByClassName("slides");
    const dots = document.querySelectorAll(".dot");

    // Clear the auto slide timer
    clearTimeout(autoSlide);

    // Set the current slide index and loop if necessary
    slideIndex = index;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    } else if (slideIndex < 1) {
        slideIndex = slides.length;
    }

    // Hide all slides and deactivate all dots
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    dots.forEach(dot => dot.classList.remove("active"));

    // Display the current slide and activate the corresponding dot
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");

    // Restart the auto slide timer
    autoSlide = setTimeout(showSlides, 6000);
}

// Event listeners for next/prev buttons
document.querySelector(".prev").addEventListener("click", () => {
    showSlide(slideIndex - 1); // Move to the previous slide
});

document.querySelector(".next").addEventListener("click", () => {
    showSlide(slideIndex + 1); // Move to the next slide
});

// Event listeners for dots
const dots = document.querySelectorAll(".dot");
dots.forEach((dot, index) => {
    dot.addEventListener("click", () => showSlide(index + 1));
});
