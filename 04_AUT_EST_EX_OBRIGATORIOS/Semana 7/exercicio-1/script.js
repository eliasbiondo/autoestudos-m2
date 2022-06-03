// Getting all required elements from dom.
const numberInput = document.querySelector("input[type='number']");
const buttonsInput = document.querySelectorAll("input[type='button']");

// Instacing an event listener to number input.
numberInput.addEventListener("input", function() {
    // For each button input, allowing or blocking the button click depending on number input length.
    buttonsInput.forEach(button => {
        numberInput.value.length > 0 ? button.disabled = false : button.disabled = true;
    })
})

// Instacing the addOne function.
function addOne() {
    // Adding one unity to the quantity.
    numberInput.value = parseInt(numberInput.value) + 1;
}

// Instacing the removeOne function.
function removeOne() {
    // Removing one unity from quantity since its quantity is not less than zero.
    numberInput.value > 0 ? numberInput.value -= 1 : numberInput.value = 0;
}