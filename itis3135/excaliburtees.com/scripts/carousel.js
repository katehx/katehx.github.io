let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelector('.carousel-images');
    const totalSlides = slides.children.length;

    // Ensure the index wraps around
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    // Update the transform property to show the correct slide
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Auto-play (optional)
// Uncomment this block if you want the carousel to play automatically
// setInterval(() => {
//     nextSlide();
// }, 3000); // Change slide every 3 seconds
