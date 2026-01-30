const studentForm = document.getElementById("studentForm");

const studentName = document.getElementById("name");
const studentAge = document.getElementById("age");
const studentGrade = document.getElementById("grade");
const studentScholarship = document.getElementById("scholarship");

const error = document.getElementById("error");
const confirmation = document.getElementById("confirmation");

studentForm.addEventListener("submit", function (event) {
    event.preventDefault();

    error.textContent = "";
    confirmation.textContent = "";

    const name = studentName.value;
    const age = Number(studentAge.value);
    const grade = Number(studentGrade.value);
    const hasScholarship = studentScholarship.checked;

    const allSubjects = document.getElementsByClassName("subject");
    const favoriteSubjects = [];

    for (let i = 0; i < allSubjects.length; i++) {
        if (allSubjects[i].checked) {
            favoriteSubjects.push(allSubjects[i].value);
        }
    }

    if (name === "") {
        error.textContent = "Name is required";
        return;
    }

    if (age <= 0) {
        error.textContent = "Age must be a positive number";
        return;
    }

    if (favoriteSubjects.length === 0) {
        error.textContent = "Select at least one subject";
        return;
    }

    const studentData = {
        name: name,
        age: age,
        grade: grade,
        favoriteSubjects: favoriteSubjects,
        hasScholarship: hasScholarship
    };

    fetch("https://httpbin.org/post", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(studentData)
    })
        .then(function (response) {
            if (!response.ok) {
                throw new Error("Could not save student. Please try again.");
            }
            return response.json();
        })
        .then(function (responseData) {
            const data = responseData.json;

            let scholarshipText;

            if (data.hasScholarship) {
                scholarshipText = "Yes";
            } else {
                scholarshipText = "No";
            }

            confirmation.innerHTML = `
                <strong>Student Registered Successfully!</strong><br>
                Name: ${data.name}<br>
                Grade: ${data.grade}<br>
                Favorite Subjects: ${data.favoriteSubjects.join(", ")}<br>
                Scholarship: ${scholarshipText}
            `;
        })
        .catch(function (err) {
            error.textContent = err.message;
            confirmation.textContent = "";
        });
});

