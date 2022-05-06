// Getting the calculate button element.
const calculateButton = document.querySelector("#calculate-button");

// Getting the reserved result elements.
const nodeElements = {
    maxHeight: document.querySelector("#max-height"),
    totalTime: document.querySelector("#total-time"),
}

// Instancing the maxHeight function.
function getMaxHeight(initialSpeed, gravity) {
    return ((initialSpeed * initialSpeed)/(2*gravity));
}

// Instancing the totalTime function.
function getTotalTime(initialSpeed, gravity) {
    return (initialSpeed/gravity);
}

// Waiting the button click from user.
calculateButton.addEventListener("click", function() {

    const initialSpeed = document.querySelector("#initial-speed").value;
    const gravity = 10;

    const maxHeight = getMaxHeight(initialSpeed, gravity);
    const totalTime = getTotalTime(initialSpeed, gravity);

    nodeElements.maxHeight.style.visibility = "visible";
    nodeElements.maxHeight.innerHTML = `Altura máxima:  ${maxHeight} metros`;

    nodeElements.totalTime.style.visibility = "visible";
    nodeElements.totalTime.innerHTML = `Tempo total: ${totalTime} segundos`;

})