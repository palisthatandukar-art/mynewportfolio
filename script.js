
// DARK AND LIGHT MODE

const themeButton = document.getElementById("theme-toggle");

if (localStorage.getItem("portfolio-theme") === "dark") {
    document.body.classList.add("dark");
}

function updateThemeButton() {
    themeButton.textContent =
        document.body.classList.contains("dark") ? "☀️" : "🌙";
}

updateThemeButton();

themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    const theme = document.body.classList.contains("dark")
        ? "dark"
        : "light";

    localStorage.setItem("portfolio-theme", theme);
    updateThemeButton();
});


// MOBILE NAVIGATION

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("nav");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");

    menuButton.textContent =
        navigation.classList.contains("open") ? "✕" : "☰";
});

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        navigation.classList.remove("open");
        menuButton.textContent = "☰";
    });
});


// TYPING ANIMATION

const typingElement = document.getElementById("typing");

if (typingElement) {
    const words = [
        "Web Developer",
        "Designer",
        "Creative Learner",
        "Programmer"
    ];

    let wordIndex = 0;
    let letterIndex = 0;
    let deleting = false;

    function typeEffect() {
        const currentWord = words[wordIndex];

        typingElement.textContent = currentWord.substring(
            0,
            letterIndex
        );

        if (!deleting) {
            letterIndex++;

            if (letterIndex > currentWord.length) {
                deleting = true;
                setTimeout(typeEffect, 1200);
                return;
            }
        } else {
            letterIndex--;

            if (letterIndex < 0) {
                deleting = false;
                letterIndex = 0;
                wordIndex = (wordIndex + 1) % words.length;
            }
        }

        setTimeout(typeEffect, deleting ? 60 : 100);
    }

    typeEffect();
}


// SCROLL REVEAL ANIMATION

const revealElements = document.querySelectorAll(
    "section h2, section p, .skill, .project"
);

revealElements.forEach(element => {
    element.classList.add("reveal");
});

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

revealElements.forEach(element => observer.observe(element));


// BACK TO TOP BUTTON

const backTop = document.getElementById("back-top");

window.addEventListener("scroll", () => {
    backTop.classList.toggle("show", window.scrollY > 300);
});

backTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// AUTOMATIC FOOTER YEAR

document.querySelectorAll(".year").forEach(element => {
    element.textContent = new Date().getFullYear();
});
