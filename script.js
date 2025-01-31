// Get references to the select element and button
const colorSelect = document.getElementById('colorSelect');
const button = document.querySelector('input[type="button"]');

// Add event listener to the button
button.addEventListener('click', function() {
    // Get the selected option
    const selectedColor = colorSelect.value;

    // Loop through the options and remove the selected color
    for (let i = 0; i < colorSelect.options.length; i++) {
        if (colorSelect.options[i].value === selectedColor) {
            colorSelect.remove(i);
            break; // Exit the loop once the color is removed
        }
    }
});
