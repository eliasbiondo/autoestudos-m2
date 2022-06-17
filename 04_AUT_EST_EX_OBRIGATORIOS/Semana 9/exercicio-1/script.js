const input = document.querySelector("#input");
const button = document.querySelector("#button");
const result = document.querySelector("#result");

function isEvenOrOdd(number) {

    if(number % 2 == 0) {
        return 'even';
    }

    return 'odd';

}

function calc(value) {
    
    const str = ((String(value)).split("")).reverse();
    const targetValue = parseInt(str[2]);

    const evenOrOdd = isEvenOrOdd(targetValue);

    if(evenOrOdd == 'even') {
        result.innerHTML = 'O dígito da centena é par';
    } else {
        result.innerHTML = 'O dígito da centena é ímpar';
    }
    
}

button.addEventListener("click", function() {
    calc(input.value);
})
