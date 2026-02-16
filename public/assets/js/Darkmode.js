// Dark mode toggle: toggles body class and Bootstrap data-bs-theme attribute
(function () {
    const storageKey = 'theme'; // values: 'dark' | 'light'
    const toggleBtn = document.getElementById('darkModeToggle');
    const root = document.documentElement;
    const body = document.body;

    function applyTheme(theme) {
        if (theme === 'dark') {
            body.classList.add('dark-mode');
            root.setAttribute('data-bs-theme', 'dark');
            if (toggleBtn) toggleBtn.innerHTML = '<i class="bi bi-moon-fill"></i>';
        } else {
            body.classList.remove('dark-mode');
            root.setAttribute('data-bs-theme', 'light');
            if (toggleBtn) toggleBtn.innerHTML = '<i class="bi bi-sun-fill"></i>';
        }
    }

    function getStoredTheme() {
        return localStorage.getItem(storageKey);
    }

    function storeTheme(theme) {
        localStorage.setItem(storageKey, theme);
    }

    // Initialize theme on DOMContentLoaded
    window.addEventListener('DOMContentLoaded', () => {
        const stored = getStoredTheme();
        if (stored === 'dark' || stored === 'light') {
            applyTheme(stored);
            return;
        }

        // Fallback to prefers-color-scheme
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        applyTheme(prefersDark ? 'dark' : 'light');
    });

    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            const current = root.getAttribute('data-bs-theme') === 'dark' ? 'dark' : 'light';
            const next = current === 'dark' ? 'light' : 'dark';
            applyTheme(next);
            storeTheme(next);
        });
    }
})();


