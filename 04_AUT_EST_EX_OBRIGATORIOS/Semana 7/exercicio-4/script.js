// Getting all required elements from dom.
const elements = {
    triggerButton: document.querySelector("#trigger-button"),
}

// Adding a click event listener to the trigger button.
elements.triggerButton.addEventListener("click", function() {
    // Getting all required input elements from dom.
    elements.quantityOfPeople = document.querySelector("#number-of-people");
    elements.selectedRadio = document.querySelector("input[type='radio'][name='period']:checked");

    // Setting up the quantity of people.
    const quantityOfPeople = elements.quantityOfPeople.value;

    // Checking if is daytime or nighttime.
    const isDayTime = elements.selectedRadio.value == 'diurno' ? true : false;

    // Setting the value per person according to the selected period.
    let valuePerPerson = isDayTime ? 200 : 100;

    // Setting up the value per person according to the quantity of people and period.
    if(quantityOfPeople > 50) {
        isDayTime ? valuePerPerson = valuePerPerson * 0.6 : valuePerPerson = valuePerPerson * 0.8;
    }

    // Calculating the total.
    const total = valuePerPerson * quantityOfPeople;

    // Instacing the user's feedback paragraph.
    const p = document.createElement("p");
    p.textContent = `Dado que a quantidade de pessoas é ${quantityOfPeople} e o período escolhido é ${isDayTime ? 'diurno' : 'noturno'}, o total é de R$${total}.`;

    // Appending the response to the body.
    document.body.appendChild(p);
})