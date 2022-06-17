const input = document.querySelector("#input");
const button = document.querySelector("#button");
const result = document.querySelector("#result");

function calc(value) {
    
    const digits = ((String(value)).split("")).map(number => {
        return parseInt(number);
    });

    let sumOfAllDigits = 0;

    digits.forEach(digit => {
        sumOfAllDigits += digit;
    })

    return sumOfAllDigits;

}

button.addEventListener("click", function() {
    const value = calc(input.value);
    result.innerHTML = "A soma de todos os dígitos do valor digitado é " + value + ".";
})
