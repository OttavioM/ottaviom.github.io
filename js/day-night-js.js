
document.addEventListener('DOMContentLoaded', function () {
  const toggleCheckbox = document.querySelector('.toggle--checkbox');
  const elementsToToggle = document.querySelectorAll('.day-night');

  if (toggleCheckbox && elementsToToggle.length > 0) {
    // Add an event listener to the checkbox
    toggleCheckbox.addEventListener('change', function () {
      // Loop through elements with class 'day-night' and toggle their background colors
      elementsToToggle.forEach(function (element) {
        element.style.backgroundColor = this.checked ? 'white' : 'black';
        element.style.color = this.checked ? 'black' : 'white';
      }, this);
    });

    // Set the initial background color for elements with class 'day-night' based on the checkbox state
    elementsToToggle.forEach(function (element) {
      element.style.backgroundColor = toggleCheckbox.checked ? 'white' : 'black';
      element.style.color = toggleCheckbox.checked ? 'black' : 'white';
    });
  } else {
    console.error('Toggle checkbox or elements to toggle not found.');
  }
});
