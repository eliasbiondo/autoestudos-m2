// Getting all required elements from dom.
const quantityOfStudentsInput = document.querySelector("#quantity-of-students");
const freeFillButton = document.querySelector("#free-fill");
const toFillData = document.querySelector("#to-fill-data");
const result = document.querySelector("#result");

// Freeing or blocking the filling depending on the quantity of students input value length.
quantityOfStudentsInput.addEventListener("input", function () {
    if (quantityOfStudentsInput.value.length > 0) {
        freeFillButton.disabled = false;
    } else {
        freeFillButton.disabled = true;
    }
})

// Instacing all required variables.
let quantityOfStudents;

// Instancing the free fill function.
function freeFill() {

    quantityOfStudents = quantityOfStudentsInput.value;

    // Building the table header.
    let table = `
    
        <table>
            <tr>
                <th>#</th>
                <th>Aluno</th>
                <th>Nota da prova</th>
                <th>Nota do trabalho</th>
                <th>Média calculada</th>
            </tr>

    `

    // Adding one fill space for each student.
    for(let i = 1; i <= quantityOfStudents; i++) {
        table += `
    
            <tr>
                <td>${i}</td>
                <td>Estudante ${i}</td>
                <td><input type="number" name="test-grade" id="test-grade-${i}" min="0" max="10"></td>
                <td><input type="number" name="work-grade" id="work-grade-${i}" min="0" max="10"></td>
                <td id="weighted-average-${i}">-</td>
            </tr>
        
        `
    }

    // Building the table footer and the calc button.
    table += `
    
        </table>

        <input type="button" name="calc" id="calc" value="Calcular" onclick="calc()">

    `

    toFillData.innerHTML = table;
}

function calc() {

    let testTotalGrade = 0;
    let workTotalGrade = 0;
    let classTotalGrade = 0;
    let testLowestGrade = 0;
    let testHighestGrade = 0;
    let workLowestGrade = 0;
    let workHighestGrade = 0;

    // Calculating all required operations of each student.
    for(let i = 1; i <= quantityOfStudents; i++) {
        
        // Instacing the current student object.
        let currentStudent = {
            testGrade: parseFloat(document.querySelector(`#test-grade-${i}`).value),
            workGrade: parseFloat(document.querySelector(`#work-grade-${i}`).value),
            weightedAverageLabel: document.querySelector(`#weighted-average-${i}`),
        }

        // Calculating the weighted average.
        currentStudent.weightedAverage = ((currentStudent.testGrade * 2) + (currentStudent.workGrade * 3)) / 5;
        
        // Printing the calculated weighted average on the screen.
        currentStudent.weightedAverageLabel.innerHTML = currentStudent.weightedAverage;
        
        // Adding the current student grades inside the global grades variables.
        testTotalGrade += currentStudent.testGrade;
        workTotalGrade += currentStudent.workGrade;
        classTotalGrade += currentStudent.weightedAverage;

        // Defining the lowest and highest test and work grades.
        if(i == 1) {
            testLowestGrade = currentStudent.testGrade;
            testHighestGrade = currentStudent.testGrade;
            workLowestGrade = currentStudent.workGrade;
            workHighestGrade = currentStudent.workGrade;
        } else {
            currentStudent.testGrade < testLowestGrade ? testLowestGrade = currentStudent.testGrade : false;
            currentStudent.testGrade > testHighestGrade ? testHighestGrade = currentStudent.testGrade : false;
            currentStudent.workGrade < workLowestGrade ? workLowestGrade = currentStudent.workGrade : false;
            currentStudent.workGrade > workHighestGrade ? workHighestGrade = currentStudent.workGrade : false;
        }

    }

    const totalGradeAverage = (classTotalGrade/quantityOfStudents).toFixed(2);
    const testGradeAverage = (testTotalGrade/quantityOfStudents).toFixed(2);
    const workGradeAverage = (workTotalGrade/quantityOfStudents).toFixed(2);


    result.innerHTML = `
    
    <table>
        <tr>
            <th>Modalidade</th>
            <th>Resultado</th>
        </tr>
        <tr>
            <td>Média geral (considerando todos os alunos)</td>
            <td>${totalGradeAverage}</td>
        </tr>
        <tr>
            <td>Média artimética das notas de prova</td>
            <td>${testGradeAverage}</td>
        </tr>
        <tr>
            <td>Média artiméticas das notas do trabalho</td>
            <td>${workGradeAverage}</td>
        </tr>
        <tr>
            <td>Menor nota de prova</td>
            <td>${testLowestGrade}</td>
        </tr>
        <tr>
            <td>Maior nota de prova</td>
            <td>${testHighestGrade}</td>
        </tr>
        <tr>
            <td>Menor nota de trabalho</td>
            <td>${workLowestGrade}</td>
        </tr>
        <tr>
            <td>Maior nota de trabalho</td>
            <td>${workHighestGrade}</td>
        </tr>

    </table>

    `

}