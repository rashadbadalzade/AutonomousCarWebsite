document.addEventListener("DOMContentLoaded", function() {
    const styleSelector = document.getElementById('styleSelector');
    const themeStylesheet = document.getElementById('themeStylesheet');

    const savedStyle = localStorage.getItem('selectedStyle');
    if (savedStyle) {
        themeStylesheet.setAttribute('href', savedStyle);
        if (styleSelector) {
            styleSelector.value = savedStyle;
        }
    }

    if (styleSelector) {
        styleSelector.addEventListener('change', function() {
            const selectedStyle = this.value;
            themeStylesheet.setAttribute('href', selectedStyle);
            localStorage.setItem('selectedStyle', selectedStyle);
        });
    }
});
