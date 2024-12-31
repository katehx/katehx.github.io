// reference - https://www.w3schools.com/howto/howto_js_accordion.asp
// wait for DOM to load to run script
document.addEventListener("DOMContentLoaded", function () {
    // get elements with accordion class
    const acc = document.getElementsByClassName("accordion");

    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            // toggle active class which will activate CSS to display accordion content
            this.classList.toggle("active-accordion");

            // get sibling of accordion which is panel that will open when initial element is clicked
            const panel = this.nextElementSibling;

            //checks if panel is already open
            if (panel.style.maxHeight) {
                // close panel by setting maxHeight to null
                panel.style.maxHeight = null;
            } else {
                // open panel by setting maxHeight to scrollHeight which coresponds to full height
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }
});
