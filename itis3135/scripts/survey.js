document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("byo-intro");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        // get input from form
        const name = document.getElementById("name").value;
        const mascot = document.getElementById("mascot").value;
        const image = document.getElementById("image").files[0];
        const caption = document.getElementById("caption").value;
        const personalBackground = document.getElementById("personal-background").value;
        const professionalBackground = document.getElementById("professional-background").value;
        const academicBackground = document.getElementById("academic-background").value;
        const webDevBackground = document.getElementById("webdev-background").value;
        const computerPlatform = document.getElementById("computer-platform").value;
        const funnyThing = document.getElementById("funny-thing").value || "N/A";
        const anythingElse = document.getElementById("anything-else").value || "N/A";

        // get input for potentially multiple courses
        const courseElements = document.querySelectorAll(".course");
        const courses = [];
        courseElements.forEach((course) => {
            const courseName = course.querySelector(".course-name").value;
            const courseReason = course.querySelector(".course-reason").value;
            if (courseName && courseReason) {
                courses.push({ name: courseName, reason: courseReason });
            }
        });

        // format the collected content and place it within the main element
        const main = document.querySelector("main");
        main.innerHTML = `
            <h3>${name}</h3>
            <figure>
                <img src="${URL.createObjectURL(image)}" alt="${caption}" height="275px">
                <figcaption>${caption}</figcaption>
            </figure>
            <ul>
                <li><strong>Personal Background:</strong> ${personalBackground}</li>
                <li><strong>Professional Background:</strong> ${professionalBackground}</li>
                <li><strong>Academic Background:</strong> ${academicBackground}</li>
                <li><strong>Background in this Subject:</strong> ${webDevBackground}</li>
                <li><strong>Primary Computer Platform:</strong> ${computerPlatform}</li>
                <li><strong>Courses I'm Taking &amp; Why:</strong>
                    <ul> 
                        ${courses // go through all of the courses added and make one a li
                            .map(
                                (course) =>
                                    `<li><strong>${course.name}:</strong> ${course.reason}</li>`
                            )
                            .join("")}
                    </ul>
                </li>
                <li><strong>Funny/Interesting Item to Remember me by:</strong> ${funnyThing}</li>
                <li><strong>I'd also like to Share:</strong> ${anythingElse}</li>
            </ul>
            <button id="fill-again" class="button">Fill Out the Form Again</button>
        `;

        //event listener to fill out the form a second time
        document.getElementById("fill-again").addEventListener("click", function () {
            // clear the main content and show the form again
            main.innerHTML = "";
            main.appendChild(form);
            form.reset(); // reset the form fields
        });
    });

    // add new course fields when more are requested
    document.getElementById("add-course").addEventListener("click", function () {
        const coursesDiv = document.getElementById("courses");
        const newCourse = document.createElement("div");
        newCourse.classList.add("course");
        newCourse.innerHTML = `
            <input type="text" class="course-name" placeholder="Course Name" required>
            <input type="text" class="course-reason" placeholder="Reason for taking" required>
            <button type="button" class="remove-course">Remove</button>
        `;
        coursesDiv.appendChild(newCourse);

        // add event listener for remvoing a course
        newCourse.querySelector(".remove-course").addEventListener("click", function () {
            newCourse.remove();
        });
    });
});
