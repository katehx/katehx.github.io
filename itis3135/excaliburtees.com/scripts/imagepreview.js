document.addEventListener("DOMContentLoaded", () => {
    const fileInput = document.getElementById('file');
    const previewImg = document.getElementById('preview-img');

    fileInput.addEventListener('change', function (event) {
        const file = event.target.files[0]; // Get the uploaded file

        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                previewImg.src = e.target.result; // Set the preview image source
                previewImg.style.display = 'block'; // Make the image visible
            };
            reader.readAsDataURL(file); // Read the file as a data URL
        } else {
            previewImg.style.display = 'none'; // Hide the image if no file is selected
        }
    });
});
