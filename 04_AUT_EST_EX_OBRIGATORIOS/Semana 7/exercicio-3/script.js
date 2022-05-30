// Getting all required elements fromd dom.
const elements = {
    triggerButton: document.querySelector("#validate"),
}

// Adding a click event listener on trigger button.
elements.triggerButton.addEventListener("click", function() {
    // Getting the telephone input from dom.
    elements.telephoneInput = document.querySelector("#telephone");

    // Checking if the telephone input value is in the correct format using regEx.
    const isTelephoneNumberInTheCorrectFormat = /^\([1-9]{2}\)(?:[2-8]|[1-9][1-9])[0-9]{3}\-[0-9]{4}$/g.test(elements.telephoneInput.value);

    // Instacing the user feedback paragraph.
    const p = document.createElement("p");

    // Setting the paragraph text content according to the test response.
    if(isTelephoneNumberInTheCorrectFormat) {
        p.textContent = `O número de telefone ${elements.telephoneInput.value} está em um formato CORRETO!`
    } else {
        p.textContent = `O número de telefone ${elements.telephoneInput.value} está em um formato INCORRETO! Utilize (XX)XXXXX-XXXX`
    }

    // Appending the paragraph to the document body.
    document.body.appendChild(p);
})