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
        
        // Update the script content
        updateJsonPaths('/jsons_plotly/sum_99/scatter.json');
    } else if (buttonId === 'WSYs') {
        // Change the text content to the new text
        waveClimateText.textContent = 'WAVE CLIMATE SYSTEMS';
        // Update button styles
        swwsysButton.classList.remove('btn-active_sys');
        wsysButton.classList.add('btn-active_sys');
        
        // Update the script content
        updateJsonPaths('/jsons_plotly_WS/sum_99/scatter.json');
    }
}

function updateJsonPaths(path) {
    // Clear the card-body
    var cardBody = document.getElementById('card-body');
    cardBody.innerHTML = '';
    
    // Create a new script element
    var script = document.createElement('script');
    script.innerHTML = `
        loadJSONAndStore('${path}');
        myFunction_reset_view('${path}', {});
    `;
    
    // Append the new script to the card-body
    cardBody.appendChild(script);
}
