document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("BYO-intro");
    const addCourseButton = document.getElementById("addCourse");
    const coursesDiv = document.getElementById("courses");

    addCourseButton.addEventListener("click", () => {
        const courseInput = document.createElement("input");
        courseInput.type = "text";
        courseInput.name = "courses";
        courseInput.placeholder = "Enter a course";
        coursesDiv.appendChild(courseInput);

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.type = "button";
        deleteButton.addEventListener("click", () => {
            coursesDiv.removeChild(courseInput);
            coursesDiv.removeChild(deleteButton);
        });
        coursesDiv.appendChild(deleteButton);
    });

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        const output = document.createElement("div");

        for (const [key, value] of formData.entries()) {
            if (key === "image") {
                const img = document.createElement("img");
                img.src = URL.createObjectURL(value);
                img.alt = formData.get("caption");
                output.appendChild(img);
            } else {
                const p = document.createElement("p");
                p.textContent = `${key}: ${value}`;
                output.appendChild(p);
            }
        }

        form.replaceWith(output);
    });

    form.addEventListener("reset", () => {
        const output = document.querySelector("main > div");
        if (output) output.remove();
    });
});
