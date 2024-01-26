$(document).ready(function() {
    var contentContainer = '#content-placeholder';

    // Use the full path to layout.html
    var layoutPath = 'layout.html';

    // Load layout.html and inject it into the current page
    $(contentContainer).load(layoutPath + ' ' + contentContainer, function(response, status, xhr) {
        if (status == "error") {
            console.error("Error loading layout.html: " + xhr.status + " " + xhr.statusText);
        }
    });
});
