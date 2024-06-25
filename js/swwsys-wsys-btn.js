// Initialize state
var isSwellActive = true; // Assume Swell WSYs is initially active

document.addEventListener("DOMContentLoaded", function() {
    // Set initial state
    document.getElementById('SWWSYs').classList.add('btn-active_sys');
});

function handleButtonClick(buttonId) {
    var waveClimateText = document.getElementById('waveClimateText');
    var swwsysButton = document.getElementById('SWWSYs');
    var wsysButton = document.getElementById('WSYs');
    var wsysEnergyExplain = document.getElementById('wsysEnergyExplain');

    if (buttonId === 'SWWSYs') {
        // Update state
        isSwellActive = true;
        // Change the text content to the original
        waveClimateText.textContent = 'WAVE CLIMATE SWELL SYSTEMS';
        // Update button styles
        swwsysButton.classList.add('btn-active_sys');
        wsysButton.classList.remove('btn-active_sys');
        
        // Update the script content
        updateJsonPaths('/jsons_plotly/sum_99/scatter.json');
        updateButtonPaths('/jsons_plotly', '/jsons_plotly');
    } else if (buttonId === 'WSYs') {
        // Update state
        isSwellActive = false;
        // Change the text content to the new text
        waveClimateText.textContent = 'WAVE CLIMATE SYSTEMS';
        wsysEnergyExplain.innerHTML = '<b>Color</b>: identifies the relative energy (%) of each wave system related to the total energy, the colorbar show the intensity;';
        // Update button styles
        swwsysButton.classList.remove('btn-active_sys');
        wsysButton.classList.add('btn-active_sys');
        
        // Update the script content
        updateJsonPaths('/jsons_plotly_WS/sum_99/scatter.json');
        updateButtonPaths('/jsons_plotly_WS', '/jsons_plotly_WS');
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

function updateButtonPaths(defaultPath, altPath) {
    // Update each button's onclick function
    document.getElementById('btnAfr').setAttribute('onclick', `myFunction('${defaultPath}/sum_99/Africa.json', this)`);
    document.getElementById('btnEUr').setAttribute('onclick', `myFunction('${defaultPath}/sum_99/Europe.json', this)`);
    document.getElementById('btnAmN').setAttribute('onclick', `myFunction('${defaultPath}/sum_99/AmericaN.json', this)`);
    document.getElementById('btnAmS').setAttribute('onclick', `myFunction('${defaultPath}/sum_99/AmericaS.json', this)`);
    document.getElementById('btnAs1').setAttribute('onclick', `myFunction('${defaultPath}/sum_99/Asia1.json', this)`);
    document.getElementById('btnAs2').setAttribute('onclick', `myFunction('${defaultPath}/sum_99/Asia2.json', this)`);
    document.getElementById('btnAs3').setAttribute('onclick', `myFunction('${defaultPath}/sum_99/Asia3.json', this)`);
    document.getElementById('btnOc1').setAttribute('onclick', `myFunction('${defaultPath}/sum_99/Oceania1.json', this)`);
    document.getElementById('btnOc2').setAttribute('onclick', `myFunction('${defaultPath}/sum_99/Oceania2.json', this)`);

    // Reset View button
    document.getElementById('btnRset').setAttribute('onclick', `myFunction_reset_view('${defaultPath}/sum_99/scatter.json', this)`);
}