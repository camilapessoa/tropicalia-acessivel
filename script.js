document.addEventListener('DOMContentLoaded', () => {
    const accessibilityBtn = document.getElementById('accessibility-btn');
    const accessibilityOptions = document.getElementById('accessibility-options');
    const increaseFontBtn = document.getElementById('increase-font');
    const resetFontBtn = document.getElementById('reset-font');
    const decreaseFontBtn = document.getElementById('decrease-font');
    const toggleContrastBtn = document.getElementById('toggle-contrast');

    accessibilityBtn.addEventListener('click', () => {
        accessibilityOptions.classList.toggle('show');
    });

    increaseFontBtn.addEventListener('click', () => {
        document.body.style.fontSize = '1.25rem';
    });

    resetFontBtn.addEventListener('click', () => {
        document.body.style.fontSize = '1rem';
    });

    decreaseFontBtn.addEventListener('click', () => {
        document.body.style.fontSize = '0.875rem';
    });

    toggleContrastBtn.addEventListener('click', () => {
        document.body.classList.toggle('high-contrast');
    });
});


