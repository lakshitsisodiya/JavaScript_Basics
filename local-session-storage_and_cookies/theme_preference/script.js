
// Apply saved theme from localStorage, if any
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    document.body.classList.add(savedTheme);
} else {
    setDarkOrLight(); // Fallback to system theme
}

// Function to set theme based on system preference
function setDarkOrLight() {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add("dark");
        document.body.classList.remove("light");
    } else {
        document.body.classList.add("light");
        document.body.classList.remove("dark");
    }
}

// Listen to system theme change only if user hasn't set a custom theme
window.matchMedia('(prefers-color-scheme: dark)').addEventListener("change", function () {
    if (!localStorage.getItem("theme")) {
        setDarkOrLight();
    }
});

// Theme toggle button handler
const btn = document.querySelector("#toggleTheme");
btn.addEventListener("click", function () {
    if (document.body.classList.contains("dark")) {
        document.body.classList.remove("dark");
        document.body.classList.add("light");
        localStorage.setItem("theme", "light");
    } else {
        document.body.classList.remove("light");
        document.body.classList.add("dark");
        localStorage.setItem("theme", "dark");
    }
});
