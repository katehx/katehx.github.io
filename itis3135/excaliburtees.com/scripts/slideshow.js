// reference - https://www.w3schools.com/howto/howto_js_slideshow.asp
// initial variable setup
let slideIndex = 0;
let autoSlide;

// automatic slideshow
function showSlides() {
    const slides = document.getElementsByClassName("slides"); // get all slides
    const dots = document.querySelectorAll(".dot"); //get all nav dots

    //hide all slides initially
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    dots.forEach((dot) => dot.classList.remove("active")); //remove active class from all dots

    //go to next slide
    slideIndex++;
    //if last slide is reached loop back to the first
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // have highlighted dot match the current slide
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active-dot");

    // automatically change the slide every 3 seconds
    autoSlide = setTimeout(showSlides, 3000);
}

// slideshow with specific image selected
function showSlide(index) {
    const slides = document.getElementsByClassName("slides"); //get all slides
    const dots = document.querySelectorAll(".dot"); //get all nav dots

    clearTimeout(autoSlide); // clear automatic timer for next slide

    slideIndex = index; 
    if (slideIndex > slides.length) {
        slideIndex = 1; //wrap around to first slide if needed
    } else if (slideIndex < 1) {
        slideIndex = slides.length; // wrap around to last slide if needed
    }

    //hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    dots.forEach((dot) => dot.classList.remove("active-dot")); //remove active class from all dots

    slides[slideIndex - 1].style.display = "block"; //display desired slide
    dots[slideIndex - 1].classList.add("active-dot"); // corresponding dot for active slide

    //resume automatic slide timer
    autoSlide = setTimeout(showSlides, 3000);
}

// event listener to go to previous slide when arrow clicked
document.querySelector(".prev").addEventListener("click", () => {
    showSlide(slideIndex - 1);
});

// event listener to go to next slide when arrow clicked
document.querySelector(".next").addEventListener("click", () => {
    showSlide(slideIndex + 1); 
});

// event listener for each dot to go to matching image when clicked
const dots = document.querySelectorAll(".dot");
dots.forEach((dot, index) => {
    dot.addEventListener("click", () => showSlide(index + 1));
});

showSlides();
