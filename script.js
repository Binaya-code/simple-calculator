let displayValue = "0";
let firstNumber = "";
let secondNumber = "";
let operator = "";
let result = "";

const display = document.getElementById("display");

function updateDisplay() {
    display.textContent = displayValue;
}

function clearCalculator() {
    displayValue = "0";
    firstNumber = "";
    secondNumber = "";
    operator = "";
    result = "";
    updateDisplay();
}

function handleDigitClick(digit) {
    if (operator === "") {
        firstNumber += digit;
        displayValue = firstNumber;
    } else {
        secondNumber += digit;
        displayValue = secondNumber;
    }
    updateDisplay();
}

function handleOperatorClick(op) {
    if (firstNumber !== "" && secondNumber === "") {
        operator = op;
    } else if (firstNumber !== "" && secondNumber !== "") {
        result = operate(operator, firstNumber, secondNumber);
        displayValue = result;
        firstNumber = result;
        secondNumber = "";
        operator = op;
    }
    updateDisplay();
}

function handleEqualsClick() {
    if (firstNumber !== "" && secondNumber !== "") {
        result = operate(operator, firstNumber, secondNumber);
        displayValue = result;
        firstNumber = result;
        secondNumber = "";
        operator = "";
        updateDisplay();
    }
}

function operate(operator, a, b) {
    a = parseFloat(a);
    b = parseFloat(b);
    switch (operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
        default:
            return null;
    }
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error";
    }
    return a / b;
}

// Add event listeners
document.querySelectorAll(".digit").forEach(button => {
    button.addEventListener("click", (e) => {
        handleDigitClick(e.target.textContent);
    });
});

document.querySelectorAll(".operator").forEach(button => {
    button.addEventListener("click", (e) => {
        handleOperatorClick(e.target.textContent);
    });
});

document.getElementById("equals").addEventListener("click", handleEqualsClick);
document.getElementById("clear").addEventListener("click", clearCalculator);

updateDisplay();