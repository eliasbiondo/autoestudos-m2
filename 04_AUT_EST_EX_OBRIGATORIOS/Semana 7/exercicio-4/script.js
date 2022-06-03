// Instacing calc function.
function calc() {

    // Getting all required input elements from dom.
    const quantityOfPeople = document.querySelector("#quantity-of-people").value;
    const selectedRadio = document.querySelector("input[type='radio'][name='period']:checked").value;
    const resultLabel = document.querySelector("#result");

    // Checking if is daytime or nighttime.
    const isDayTime = selectedRadio == 'diurno' ? true : false;

    // Setting the value per person according to the selected period.
    let valuePerPerson = isDayTime ? 200 : 100;

    // Setting up the value per person according to the quantity of people and period.
    if(quantityOfPeople > 50) {
        isDayTime ? valuePerPerson = valuePerPerson * 0.6 : valuePerPerson = valuePerPerson * 0.8;
    }

    // Calculating the total.
    const total = valuePerPerson * quantityOfPeople;

    // Printing the result on the screen.
    resultLabel.innerHTML = `Dado que a quantidade de pessoas é ${quantityOfPeople} e o período escolhido é ${isDayTime ? 'diurno' : 'noturno'}, o total é de <b>R$${total}</b>.`;

}