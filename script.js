
// Get the registration form
const form = document.getElementById("registrationForm");

// Listen for form submission
form.addEventListener("submit", function (event) {

    // Prevent page from refreshing
    event.preventDefault();

    // Get student details
    let name = document.getElementById("fullname").value.trim();
    let email = document.getElementById("email").value.trim();
    let course = document.getElementById("course").value;

    let message = document.getElementById("message");

    // Check whether fields are empty
    if (name === "" || email === "" || course === "") {

        message.style.color = "red";
        message.innerHTML = "Please fill in all the required fields.";

    }

    // Validate email format
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {

        message.style.color = "red";
        message.innerHTML = "Please enter a valid email address.";

    }

    // Display success message
    else {

        message.style.color = "green";

        message.innerHTML =
            "Registration successful! Welcome " + name +
            ". Your selected course is " + course + ".";

        // Clear the form
        form.reset();

    }

});
