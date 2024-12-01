document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal-gallery");
    const modalImage = modal.querySelector(".modal-image");
    const modalPrev = modal.querySelector(".modal-prev");
    const modalNext = modal.querySelector(".modal-next");
    const closeModal = modal.querySelector(".close-modal");
    let currentIndex = 0;
    let currentGallery = [];

    const openModal = (gallery, index) => {
        currentGallery = gallery;
        currentIndex = index;
        modalImage.src = currentGallery[currentIndex].src;
        modal.classList.add("show");
    };

    const closeModalGallery = () => {
        modal.classList.remove("show");
    };

    const showNextImage = () => {
        currentIndex = (currentIndex + 1) % currentGallery.length;
        modalImage.src = currentGallery[currentIndex].src;
    };

    const showPrevImage = () => {
        currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
        modalImage.src = currentGallery[currentIndex].src;
    };

    document.querySelectorAll(".gallery").forEach((gallery) => {
        const images = gallery.querySelectorAll(".gallery-image");
        images.forEach((image, index) => {
            image.addEventListener("click", () => openModal(images, index));
        });
    });

    closeModal.addEventListener("click", closeModalGallery);
    modalNext.addEventListener("click", showNextImage);
    modalPrev.addEventListener("click", showPrevImage);

    modal.addEventListener("click", (e) => {
        if (e.target === modal) closeModalGallery();
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeModalGallery();
        if (e.key === "ArrowRight") showNextImage();
        if (e.key === "ArrowLeft") showPrevImage();
    });
});
