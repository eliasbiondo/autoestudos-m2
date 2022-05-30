// Getting all required elements from dom.
const elements = {
    triggerButton: document.querySelector("#trigger-button"),
}

// Adding a click event listener on trigger button.
elements.triggerButton.addEventListener("click", function() {
    // Getting all input fields from dom.
    elements.fields = document.querySelectorAll(".input-field input[type='text']");

    // Saving the current value of first input before swapping.
    const aux = elements.fields[0].value; 

    // Swipping the input values...
    elements.fields[0].value = elements.fields[1].value;
    elements.fields[1].value = aux;
})