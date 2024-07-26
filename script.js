let displayValue = '';
let operator = '';
let firstOperand = '';
let secondOperand = '';

function appendNumber(number) {
    displayValue += number;
    updateDisplay();
}

function appendOperator(op) {
    operator = op;
    firstOperand = displayValue;
    displayValue = '';
    updateDisplay();
}

function appendDecimal() {
    if (!displayValue.includes('.')) {
        displayValue += '.';
        updateDisplay();
    }
}

function clearDisplay() {
    displayValue = '';
    operator = '';
    firstOperand = '';
    secondOperand = '';
    updateDisplay();
}

function calculate() {
    secondOperand = displayValue;
    let result;
    switch (operator) {
        case '+':
            result = parseFloat(firstOperand) + parseFloat(secondOperand);
            break;
        case '-':
            result = parseFloat(firstOperand) - parseFloat(secondOperand);
            break;
        case '*':
            result = parseFloat(firstOperand) * parseFloat(secondOperand);
            break;
        case '/':
            result = parseFloat(firstOperand) / parseFloat(secondOperand);
            break;
        case '^':
            result = Math.pow(parseFloat(firstOperand), parseFloat(secondOperand));
            break;
    }
    displayValue = result.toString();
    updateDisplay();
}

function calculatePercentage() {
    let result = parseFloat(displayValue) / 100;
    displayValue = result.toString();
    updateDisplay();
}

function backspace() {
    displayValue = displayValue.slice(0, -1);
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = displayValue;
}
