const studentForm = document.getElementById("studentForm");

const name = document.getElementById("name");
const age = document.getElementById("age");
const grade = document.getElementById("grade");
const scholarship = document.getElementById("scholarship");

const error = document.getElementById("error");
const confirmation = document.getElementById("confirmation");

studentForm.addEventListener("submit", function (event) {
    event.preventDefault(); // stop reload

    // clear messages
    error.textContent = "";
    confirmation.textContent = "";

    // test output
    confirmation.textContent = "Form submitted successfully!";
});

