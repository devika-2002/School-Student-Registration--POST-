const studentForm = document.getElementById("studentForm");

const name = document.getElementById("name");
const age = document.getElementById("age");
const grade = document.getElementById("grade");
const scholarship = document.getElementById("scholarship");

const error = document.getElementById("error");
const confirmation = document.getElementById("confirmation");

studentForm.addEventListener("submit", function (event) {
    event.preventDefault();

    error.textContent = "";
    confirmation.textContent = "";

    confirmation.textContent = "Form submitted successfully!";
});

