function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}


function operate(operator, num1, num2) {
    switch(operator) {
        case '+':
            add(num1, num2);
            break;
        case '-':
            subtract(num1, num2);
            break;
        case '*':
            multiply(num1, num2);
            break;
        case '/':
            divide(num1, num2);
            break;
    }
}

const clearButton = document.getElementById("clear");
const negativeButton = document.getElementById("negative");
const percentButton = document.getElementById("percent");
const divideButton = document.getElementById("divide");
const sevenButton = document.getElementById("seven");
const eightButton = document.getElementById("eight");
const nineButton = document.getElementById("nine");
const multiplyButton = document.getElementById("multiply");
const fourButton = document.getElementById("four");
const fiveButton = document.getElementById("five");
const sixButton = document.getElementById("six");
const subtractButton = document.getElementById("subtract");
const oneButton = document.getElementById("one");
const twoButton = document.getElementById("two");
const threeButton = document.getElementById("three");
const addButton = document.getElementById("add");
const zeroButton = document.getElementById("zero");
const decimalButton = document.getElementById("decimal");
const equalButton = document.getElementById("equal");
const displayScreen = document.getElementById("display");

//displays last # clicked
let displayValue = 0;
displayScreen.textContent = `${displayValue}`;

const numbers = document.querySelectorAll(".number");
numbers.forEach((number) => {number.addEventListener('click', () => {displayScreen.textContent = `${number.textContent}`;
})});

//




