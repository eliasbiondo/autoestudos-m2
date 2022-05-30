// Instacing all required elements from dom.
const elements = {
    input: document.querySelector("#input-number"),
    controls: {
        add: document.querySelector("input[type='button'][value='-']"),
        remove: document.querySelector("input[type='button'][value='+']"),
    }
}

// Taking all the control elements...
Object.values(elements.controls).forEach(control => {
    // Adding an event listener in all application controls.
    control.addEventListener("click", function() {
        // Summing or subtracting according to the control button value.
        elements.input.value = control.value == '+' ?  parseInt(elements.input.value) + 1 : parseInt(elements.input.value) - 1;
    })
})