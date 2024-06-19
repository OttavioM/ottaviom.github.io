document.addEventListener("DOMContentLoaded", function() {
    // Set initial state
    document.getElementById('SWWSYs').classList.add('btn-active_sys');
});

function handleButtonClick(buttonId) {
    var waveClimateText = document.getElementById('waveClimateText');
    var swwsysButton = document.getElementById('SWWSYs');
    var wsysButton = document.getElementById('WSYs');

    if (buttonId === 'SWWSYs') {
        // Change the text content to the original
        waveClimateText.textContent = 'WAVE CLIMATE SWELL SYSTEMS';
        // Update button styles
        swwsysButton.classList.add('btn-active_sys');
        wsysButton.classList.remove('btn-active_sys');
    } else if (buttonId === 'WSYs') {
        // Change the text content to the new text
        waveClimateText.textContent = 'WAVE CLIMATE SYSTEMS';
        // Update button styles
        swwsysButton.classList.remove('btn-active_sys');
        wsysButton.classList.add('btn-active_sys');
    }
}
