// Dark mode toggle
const toggleDarkMode = () => {
    const body = document.body;
    const isDarkMode = body.classList.toggle('dark-mode');

    // Save user preference in localStorage
    localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
};

// Load user preference on page load
window.addEventListener('DOMContentLoaded', () => {
    const darkModePreference = localStorage.getItem('darkMode');
    if (darkModePreference === 'enabled') {
        document.body.classList.add('dark-mode');
    }
});

// Attach event listener to the toggle button
const darkModeToggle = document.getElementById('darkModeToggle');
if (darkModeToggle) {
    darkModeToggle.addEventListener('click', toggleDarkMode);
}


