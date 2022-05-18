// Getting the trigger button from DOM.
const triggerBtn = document.querySelector("#calculateBtn");
const result = document.querySelector(".result");

// Adding a click event listener to the trigger button.
triggerBtn.addEventListener("click", function(){

    // Getting all necessary elements from DOM.
    const elements = {
        numberInputs: {
            first: Number(document.querySelector("#number-1").value),
            second: Number(document.querySelector("#number-2").value),
        },
        selectedRadioBtn: document.querySelector("input[name=radio]:checked"),
    }

    // Instacing all required aux.
    let calculatedResult;
    let { first : firstNumber, second : secondNumber  } = elements.numberInputs;

    // Switching between the operations.
    switch(elements.selectedRadioBtn.id) {
        case 'radio-1':
            calculatedResult = firstNumber + secondNumber;
        break;

        case 'radio-2':
            calculatedResult = firstNumber - secondNumber;
        break;

        case 'radio-3':
            calculatedResult = firstNumber * secondNumber;
        break;

        case 'radio-4':
            calculatedResult = firstNumber / secondNumber;
        break;

        case 'radio-5':
            calculatedResult = Math.floor(firstNumber / secondNumber);
        break;

        case 'radio-6':
            calculatedResult = firstNumber % secondNumber;
        break;
    }

    result.innerHTML = `O resultado é ${calculatedResult}`

})
