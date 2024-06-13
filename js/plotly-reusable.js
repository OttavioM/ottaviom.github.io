// Function to add the "holding" class to existing buttons
function addHoldingClassToButtons() {
    const existingButtons = document.querySelectorAll('.existing-button');
    existingButtons.forEach(button => {
        button.classList.add('holding');
    });
}

// Function to remove the "holding" class from existing buttons
function removeHoldingClassFromButtons() {
    const existingButtons = document.querySelectorAll('.existing-button');
    existingButtons.forEach(button => {
        button.classList.remove('holding');
    });
}

// Function to toggle the "holding" class based on the switch state
function toggleHoldingClass() {
    const switchCheckbox = document.getElementById('holdSwitch');
    
    if (switchCheckbox.checked) {
        addHoldingClassToButtons();
    } else {
        removeHoldingClassFromButtons();
    }
}

// Attach the toggleHoldingClass function to the checkbox change event
document.addEventListener('DOMContentLoaded', function () {
    const switchCheckbox = document.getElementById('holdSwitch');
    if (switchCheckbox) {
        switchCheckbox.addEventListener('change', toggleHoldingClass);
    }
});

// Asynchronous function to load JSON file
function loadJSONFile(filePath) {
    return fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load JSON file: ${response.status} ${response.statusText}`);
            }
            return response.json();
        })
        .catch(error => {
            console.error('Error loading JSON file:', error);
        });
}

let graphs1;
function loadJSONAndStore(filePath) {
    return loadJSONFile(filePath)
        .then(data => {
            graphs1 = data; // Assign the JSON data to the global variable
            return data; // Return the JSON data
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

let activeButton = null;
function myFunction(jsonFilePath, buttonElement) {
    // Remove the active class from the previously active button
    if (activeButton) {
        activeButton.classList.remove('active');
    }
    
    // If a buttonElement is provided, add the active class to it
    if (buttonElement) {
        buttonElement.classList.add('active');
        activeButton = buttonElement;
    }

    const switchCheckbox = document.getElementById('holdSwitch');
    if (!switchCheckbox.checked) { // Use ! to check if it's not checked
        loadJSONAndStore('./jsons_plotly/sum_99/scatter.json');
    }
    let dataj;
    loadJSONFile(jsonFilePath)
        .then(data => {
            if (data) {
                dataj = data;
                console.log('JSON data loaded:', dataj);
            }
            Plotly.purge(chart1);
            Plotly.newPlot("chart1", graphs1.data, dataj.layout);
            Plotly.plot("chart1", dataj.data, dataj.layout);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function myFunction_reset_view(jsonFilePath, buttonElement) {
    // Remove the active class from the previously active button
    if (activeButton) {
        activeButton.classList.remove('active');
    }
    loadJSONFile(jsonFilePath)
        .then(data => {
            if (data) {
                dataj = data;
                console.log('JSON data loaded:', dataj);
            }
            Plotly.purge(chart1);
            Plotly.newPlot("chart1", dataj, {});
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
