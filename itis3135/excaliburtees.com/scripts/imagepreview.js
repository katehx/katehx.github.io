// reference - https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded
// wait for DOM to load to run script
document.addEventListener("DOMContentLoaded", () => {
    // get user submitted file and image element to display the user file
    const fileInput = document.getElementById('file');
    const previewImg = document.getElementById('preview-img'); //div that holds img element for page placement
    const imgPreview = document.getElementById('image-preview'); //img element

    //event listener for when user uploads file
    fileInput.addEventListener('change', function (event) {
        // get file from input
        const file = event.target.files[0];

        // check if a file was properly selected
        if (file) {
            // FileReader object to read file
            const reader = new FileReader();
            // onload functino for when file is properly read by FileReader
            reader.onload = function (e) {
                previewImg.src = e.target.result; //set img src to the files url
                previewImg.style.display = 'block'; //show element
                imgPreview.style.display = 'block'; //show element
            };
            reader.readAsDataURL(file);
        } else {
            // hide preview image if no file
            previewImg.style.display = 'none';
        }
    });
});
