const navToggle = document.getElementById("navToggle");
const navWrapper = document.getElementById("navWrapper");

// Open / sluit menu
navToggle.addEventListener("click", () => {
    navWrapper.classList.toggle("active");
});

// Sluiten bij click buiten menu
document.addEventListener("click", (e) => {
    if (!navWrapper.contains(e.target) && !navToggle.contains(e.target)) {
        navWrapper.classList.remove("active");
    }
});



