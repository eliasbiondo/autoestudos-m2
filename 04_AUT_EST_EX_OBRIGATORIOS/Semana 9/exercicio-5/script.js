const input = document.querySelector("#n");
const button = document.querySelector("#button");
const result = document.querySelector("#result");

function fibonacci(n) {
    if (n <= 2) {
        return 1;
    } else {
        return fibonacci(n-1) + fibonacci(n-2);
    }
}

function calc(n) {
    
    let arr = [];

    for(let i = 1; i <= n; i++) {
        arr.push(fibonacci(i));
    }

    return arr;

}

button.addEventListener("click", function() {

    const res = calc(parseInt(input.value));

    result.innerHTML = "A sequência fibonacci até o n-ésimo termo digitado é " + res + ".";
})
