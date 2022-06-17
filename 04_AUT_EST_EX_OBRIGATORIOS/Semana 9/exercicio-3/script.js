const inputs = document.querySelectorAll("input[name='name']");
const button = document.querySelector("#button");
const result = document.querySelector("#result");

function calc(names) {
    return names.sort();
}

button.addEventListener("click", function() {

    let names = [];

    inputs.forEach(name => {
        names.push(name.value)
    });

    const sortedNames = (calc(names)).join(", ");

    result.innerHTML = "Os nomes ordenados, em ordem alfabética, são: " + sortedNames + ".";
})
