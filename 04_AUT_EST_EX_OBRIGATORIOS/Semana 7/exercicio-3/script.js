// Getting all required elements from dom.
const textInput = document.querySelector("input[type='text']");
const buttonInput = document.querySelector("input[type='button']");
const resultLabel = document.querySelector("#result");

// Instacing an event listener to text input.
textInput.addEventListener("input", function() {
    // Allowing or blocking the button click depending on text input length.
    textInput.value.length > 0 ? buttonInput.disabled = false : buttonInput.disabled = true;
})

// Instacing the telephone validator function.
function telephoneValidator() {
    // Validating telephone.
    const isTelephoneNumberInTheCorrectFormat = /^\([1-9]{2}\)(?:[2-8]|[1-9][1-9])[0-9]{3}\-[0-9]{4}$/g.test(textInput.value);

    // Printing the result on the screen.
    resultLabel.innerHTML = `
        <div class="circle ${isTelephoneNumberInTheCorrectFormat ? 'valid' : 'invalid'}"></div>
        <span>Formato ${isTelephoneNumberInTheCorrectFormat ? 'correto' : 'incorreto'}</span>
    `
}