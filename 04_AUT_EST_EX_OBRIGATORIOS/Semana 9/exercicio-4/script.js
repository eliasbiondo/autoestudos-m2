const intervaloBaixo = document.querySelector("#n1");
const intervaloAlto = document.querySelector("#n2");
const button = document.querySelector("#button");
const result = document.querySelector("#result");

function isPrime(n) {
    for(let i=2; i<n; i++) {
        if(n % i == 0) {
            return false;
        }
    }

    return true;
}

function calc(min, max) {
    
    let primes = [];
    let currentLoop = min;
    let loopMaxSize = max;

    while(currentLoop <= loopMaxSize) {

        if(isPrime(currentLoop)) {
            primes.push(currentLoop);
        }

        currentLoop++;

    }
    
    return primes;

}

button.addEventListener("click", function() {

    const primes = calc(intervaloBaixo.value, intervaloAlto.value);

    result.innerHTML = "Os números primos, presentes dentro do intervalo digitado, são: " + primes + ".";
    
})
