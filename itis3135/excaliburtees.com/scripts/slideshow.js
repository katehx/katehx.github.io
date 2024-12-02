let slideIndex = 0;
let autoSlide;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("slides");
    const dots = document.querySelectorAll(".dot");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    dots.forEach(dot => dot.classList.remove("active"));

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active-dot");

    autoSlide = setTimeout(showSlides, 4000);
}

function showSlide(index) {
    const slides = document.getElementsByClassName("slides");
    const dots = document.querySelectorAll(".dot");

    clearTimeout(autoSlide);

    slideIndex = index;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    } else if (slideIndex < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    dots.forEach(dot => dot.classList.remove("active-dot"));

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active-dot");

    autoSlide = setTimeout(showSlides, 4000);
}

document.querySelector(".prev").addEventListener("click", () => {
    showSlide(slideIndex - 1);
});

document.querySelector(".next").addEventListener("click", () => {
    showSlide(slideIndex + 1); 
});

const dots = document.querySelectorAll(".dot");
dots.forEach((dot, index) => {
    dot.addEventListener("click", () => showSlide(index + 1));
});
