// Getting all required elements from dom.
const textInputs = document.querySelectorAll("input[type='text']");

// Instacing swap text function.
function swapText() {
    // Saving the first text input value.
    let aux = textInputs[0].value;

    // Assigning the first text input value as the second text input value.
    textInputs[0].value = textInputs[1].value;

    // Assigning the second text input value as the saved value.
    textInputs[1].value = aux; 
}