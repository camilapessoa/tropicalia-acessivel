document.addEventListener('DOMContentLoaded', function() {
    const accessibilityBtn = document.getElementById('accessibility-btn');
    const accessibilityOptions = document.getElementById('accessibility-options');

    accessibilityBtn.addEventListener('click', function() {
        accessibilityOptions.classList.toggle('d-none');
        accessibilityOptions.classList.toggle('show');
    });

    const increaseFontBtn = document.getElementById('increase-font');
    const resetFontBtn = document.getElementById('reset-font');
    const decreaseFontBtn = document.getElementById('decrease-font');
    const toggleContrastBtn = document.getElementById('toggle-contrast');

    let currentFontSize = 1;

    increaseFontBtn.addEventListener('click', function() {
        currentFontSize += 0.1;
        document.body.style.fontSize = `${currentFontSize}rem`;
    });

    resetFontBtn.addEventListener('click', function() {
        currentFontSize = 1;
        document.body.style.fontSize = `${currentFontSize}rem`;
    });

    decreaseFontBtn.addEventListener('click', function() {
        currentFontSize -= 0.1;
        document.body.style.fontSize = `${currentFontSize}rem`;
    });

    toggleContrastBtn.addEventListener('click', function() {
        document.body.classList.toggle('high-contrast');
    });
});
