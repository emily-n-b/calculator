function add(num1, num2) { return (+num1 + +num2); }
function subtract(num1, num2) { return (+num1 - +num2); }
function multiply(num1, num2) { return (+num1 * +num2); }
function divide(num1, num2) { return (+num1 / +num2); }

const clearButton = document.getElementById("clear");
const backspaceButton = document.getElementById("backspace");
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

let displayValue = 0;

displayScreen.textContent = `${displayValue}`;

let num1;
let num2;
let op;
let result;

const numbers = document.querySelectorAll(".number");
numbers.forEach((number) => {number.addEventListener('click', () => {
    if (result && !op) {
        num1 = 0;
        result = 0;
    }
    
    if (!num1) {
        num1 = number.textContent;
        displayValue = num1;
    } else if (num1 && !op) {
        if (!(num1.length >= 8)) {
            num1 += number.textContent; 
        }
        displayValue = num1;
    } else if (num1 && op && !num2) {
        num2 = number.textContent;
        displayValue = num2;
    } else if (num2) {
        if (!(num2.length >= 8)) {
            num2 += number.textContent;
        }
        displayValue = num2;
    }
    displayScreen.textContent = `${displayValue}`;
})});

const operators = document.querySelectorAll(".operator");
operators.forEach(operator => {operator.addEventListener('click', () => {
    if (num1 && num2 && op) {
        num1 = operate(op, num1, num2);
        displayScreen.textContent = `${num1}`;
        num2 = 0;
    }
    op = operator.textContent;
})});

function shortenResult(number) {
    let string = number.toString();
    let array = string.split('.');
    let decimals = array[1];
    let num = array[0];
  console.log(`num = ${num}`);
  
    if (string.length < 9) {
      return number;
    }
  
    if (num.length > 8) {
      return number.toExponential(3);
    } else if (decimals) {
      return number.toFixed(8 - num.length);
  
    }
  }

function operate(op, num1, num2) {
    switch(op) {
        case undefined:
            result = +num1;
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
            if (num2 == 0) {
                result = "Error";
            } else {
            result = divide(num1, num2);
            }
            break;
    }

    let shortNumber = shortenResult(result);
    console.log(shortNumber);
    displayScreen.textContent = `${shortNumber}`;

    return shortNumber;


    //let shortNumber = shortenNumber(result);
    //return shortNumber;
    // rounds decimal places
    /*
    if (!Number.isInteger(result)) {
        if (result.toString().length > 7) {
            let string = result.toString().split('.');
            let decimals = string[1];
            let nums = string[0];

            if (decimals >= nums) {
                result = result.toFixed(3);
            } 
        }
    }
    parseFloat(result); // removes trailing 0's
    displayScreen.textContent = `${result}`;
    console.log(num1, num2, op);
    return result;
    */
    

}

equalButton.addEventListener("click", () => {
    if (num1 && !op) {
        return num1;
    } else if (num1 && !num2) {
        num2 = num1;
    } else if (!num1) {
        return 0;
    } 
    num1 = operate(op, num1, num2);
    num2 = 0;
    op = null;
});

clearButton.addEventListener("click", () => {
    num1 = null;
    num2 = null;
    op = null;
    displayValue = 0;
    displayScreen.textContent = `${displayValue}`;
});

negativeButton.addEventListener("click", () => {
    if (num2) {
        num2 = num2 - (num2 * 2); 
        displayValue = num2;
        displayScreen.textContent = `${displayValue}`;
    } else if (num1 && !num2) {
        num1 = num1 - (num1 * 2); 
        displayValue = num1;
        displayScreen.textContent = `${displayValue}`;
    }
});

percentButton.addEventListener("click", () => {
    if (num2) {
        num2 *= .01; 
        displayValue = num2;
        displayScreen.textContent = `${displayValue}`;
    } else if (num1 && !num2) {
        num1 *= .01; 
        displayValue = num1;
        displayScreen.textContent = `${displayValue}`;
    }
});

decimalButton.addEventListener("click", () => {
    if (num2) {
        if (!num2.includes('.')) {
            num2 += '.'; 
            displayValue = num2;
            displayScreen.textContent = `${displayValue}`;
        }
    } else if (num1 && !num2) {
        if (!num1.includes('.')) {
            num1 += '.'; 
            displayValue = num1;
            displayScreen.textContent = `${displayValue}`;
        }
    } else if (!num1 && !num2) {
        num1 = '0.'; 
        displayValue = num1;
        displayScreen.textContent = `${displayValue}`;
        
    }
});

backspaceButton.addEventListener("click", () => {
    if (num2) {
        num2 = num2.toString().slice(0, -1); 
        displayValue = num2;
        displayScreen.textContent = `${displayValue}`;
    } else if (num1 && !num2) {
        num1 = num1.toString().slice(0, -1);
        displayValue = num1;
        displayScreen.textContent = `${displayValue}`;
    }
});

