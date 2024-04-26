


document.addEventListener('DOMContentLoaded', () => {
    const element = document.body;

    // Retrieve dark mode preference from localStorage
    const isDarkMode = localStorage.getItem("darkMode") === "true";

    // Apply dark mode class based on the stored preference
    if (isDarkMode) {
        element.classList.add("dark-mode");
    } else {
        element.classList.remove("dark-mode");
    }
    console.log(isDarkMode);
});