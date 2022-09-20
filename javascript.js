function add(num1, num2) {
    return +num1 + +num2;
}

function subtract(num1, num2) {
    return +num1 - +num2;
}

function multiply(num1, num2) {
    return +num1 * +num2;
}

function divide(num1, num2) {
    return +num1 / +num2;
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

//displays last # clicked & stores numbers in num1 or num2
let displayValue = 0;
displayScreen.textContent = `${displayValue}`;

let num1;
let num2;
let op;

const numbers = document.querySelectorAll(".number");
numbers.forEach((number) => {number.addEventListener('click', () => {
    
 
    
    if (!num1) {
        num1 = number.textContent;
        displayValue = num1;
    } else if (num1 && !op) {
        num1 += number.textContent; 
        displayValue = num1;
    } else if (num1 && op && !num2) {
        num2 = number.textContent;
        displayValue = num2;
    } else if (num2) {
        num2 += number.textContent;
        displayValue = num2;
    }
    
    displayScreen.textContent = `${displayValue}`;


    console.log(`num1 = ${num1}`);
    console.log(`num2 = ${num2}`);
}
)});

//
const operators = document.querySelectorAll(".operator");
operators.forEach(operator => {operator.addEventListener('click', () => {
    
    if (num1 && num2 && op) {
        num1 = operate(op, num1, num2);
        displayScreen.textContent = `${num1}`;
        num2 = 0;
    }

    op = operator.textContent;
    console.log(op);


})})

function operate(op, num1, num2) {
    
    let result;

    switch(op) {
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = subtract(num1, num2);
            break;
        case '*':
            result = multiply(num1, num2);
            break;
        case '/':
            result = divide(num1, num2);
            break;
    }
    displayScreen.textContent = `${result}`;
    console.log(`result = ${result}`);
    return result;

}



equalButton.addEventListener("click", () => {
    num1 = operate(op, num1, num2);
    num2 = 0;
});

clearButton.addEventListener("click", () => {
    num1 = null;
    num2 = null;
    op = null;
    displayValue = 0;
    displayScreen.textContent = `${displayValue}`;
});