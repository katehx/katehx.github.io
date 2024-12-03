// reference - https://www.w3schools.com/howto/howto_css_modal_images.asp\
// referemce = https://stackoverflow.com/questions/67189798/i-have-an-image-gallery-and-i-want-to-open-each-image-using-modal-when-click-on
// wait for DOM to load to run script
document.addEventListener("DOMContentLoaded", () => {
    // get elements for modal
    const modal = document.getElementById("modal-gallery");
    const modalImage = modal.querySelector(".modal-image");
    const modalPrev = modal.querySelector(".modal-prev");
    const modalNext = modal.querySelector(".modal-next");
    const closeModal = modal.querySelector(".close-modal");
    let currentIndex = 0;
    let currentGallery = [];

    // open modal after image is clicked within gallery
    const openModal = (gallery, index) => {
        currentGallery = gallery;
        currentIndex = index;
        modalImage.src = currentGallery[currentIndex].src; //set modal image to image clicked
        modal.classList.add("active-modal"); //display through CSS by adding active-modal class
    };

    // remove active-modal class which will go through CSS and remove visibility for modal elements
    const closeModalGallery = () => {
        modal.classList.remove("active-modal");
    };

    // function to show next image by going to the next index
    const showNextImage = () => {
        currentIndex = (currentIndex + 1) % currentGallery.length; //loop to start if at the end
        modalImage.src = currentGallery[currentIndex].src; //update to new index
    };

     // function to show next image by going to the previous index
    const showPrevImage = () => {
        currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length; //loop to end if at the start
        modalImage.src = currentGallery[currentIndex].src; //update to new index
    };

    // create click event listener for each image within the specified gallery
    document.querySelectorAll(".gallery").forEach((gallery) => {
        const images = gallery.querySelectorAll(".gallery-image");
        images.forEach((image, index) => {
            image.addEventListener("click", () => openModal(images, index)); //click event for each image to open modal if specific image is clicked
        });
    });

    // click event listener for closing the gallery using the buttons
    closeModal.addEventListener("click", closeModalGallery);
    // click event listener for navigating to the next image using the buttons
    modalNext.addEventListener("click", showNextImage);
    // click event listener for navigating to the previous image using the buttons
    modalPrev.addEventListener("click", showPrevImage);
    // click event listener for exiting modal if user clicks outside of the image
    modal.addEventListener("click", (e) => {
        if (e.target === modal) closeModalGallery();
    });
    // link key inputs to functions for additional navigation options
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeModalGallery();
        if (e.key === "ArrowRight") showNextImage();
        if (e.key === "ArrowLeft") showPrevImage();
    });
});
