// MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "✕" : "☰";
});

// CLOSE MENU AFTER CLICKING A LINK

document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});

// AUTOMATIC COPYRIGHT YEAR

document.getElementById("year").textContent =
    new Date().getFullYear();

// CONTACT FORM

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("visitorName").value.trim();

    const email = document.getElementById("visitorEmail").value.trim();

    const course = document.getElementById("visitorCourse").value;

    const message = document.getElementById("visitorMessage").value.trim();

    const phoneNumber = "254723155125";

    const whatsappMessage =
        "Hello VELMA University.%0A%0A" +
        "My name is " + encodeURIComponent(name) + ".%0A" +
        "My email is " + encodeURIComponent(email) + ".%0A" +
        "Course of interest: " + encodeURIComponent(course) + ".%0A" +
        "My enquiry: " + encodeURIComponent(message);

    const whatsappURL =
        "https://wa.me/" + phoneNumber + "?text=" + whatsappMessage;

    document.getElementById("formMessage").textContent =
        "Opening WhatsApp. Please press Send there to submit your enquiry.";

    window.open(whatsappURL, "_blank");

});
