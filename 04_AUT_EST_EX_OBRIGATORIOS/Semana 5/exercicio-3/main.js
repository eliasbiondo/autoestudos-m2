// Getting the trigger button from DOM.
const triggerBtn = document.querySelector("#calculateBtn");
const result = document.querySelector(".result");

// Defining the bubbleSort ordenation algorithm.
function bubbleSort(items) {

    let length = items.length; 

    for (let i = 0; i < length; i++) { 
          for (let j = 0; j < (length - i - 1); j++) { 
                   if(items[j] > items[j+1]) {
                           let tmp = items[j]; 
                items[j] = items[j+1]; 
                items[j+1] = tmp;
            }
        }        
    }

    return items;
}

// Defining the binarySearch algorithm.
function binarySearch(arr, focus) {

    let element = {
        pos: 0,
        isFound: false,
    }

    let lastPosition = arr.length - 1;

    while (element.pos <= lastPosition && !element.isFound) {

        listMiddle = Math.ceil((element.pos + lastPosition) / 2);
        
        if (arr[listMiddle] == focus) {

            element.isFound = true;

        }
        else {

            if (focus < arr[listMiddle]) {
                lastPosition = listMiddle - 1;
            }
            else {
                element.pos = listMiddle + 1;
            }

        }
    }

    return element;
}

// Adding a click event listener to the trigger button.
triggerBtn.addEventListener("click", function(){

    // Getting all necessary elements from DOM.
    const elements = {
        list : document.querySelector("#list").value,
        focus: Number(document.querySelector("#focus").value),
    }

    // Defining an array by splitting the input value from DOM.
    let list = elements.list.split(",");

    // Converting all string values to number values.
    list.forEach((element, i) => {
        list[i] = Number(element);
    })

    // Ordenating the list.
    let orderedList = bubbleSort(list);

    // Getting the position of focus element.
    let focusElement = binarySearch(orderedList, elements.focus);

    result.innerHTML = `
    
        <span>A lista ordenada de forma crescente é: ${orderedList}</span>
        <span>${focusElement.isFound ? `O valor foco encontra-se na posição ${focusElement.pos+1} da lista ordenada.` : `Valor foco não encontrado na lista!`}</span>

    `

    

})
