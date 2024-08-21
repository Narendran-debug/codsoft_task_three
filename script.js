let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let operand1 = null;

function appendNumber(number) {
    if (display.innerText === '0' || currentInput === '') {
        currentInput = number;
    } else {
        currentInput += number;
    }
    display.innerText = currentInput;
}

function appendOperator(op) {
    if (currentInput === '' && op === '-') {
        currentInput = op;
        display.innerText = currentInput;
        return;
    }
    if (currentInput === '' || operator) return;
    operand1 = parseFloat(currentInput);
    operator = op;
    currentInput = '';
    display.innerText = operator;
}

function clearDisplay() {
    display.innerText = '0';
    currentInput = '';
    operator = '';
    operand1 = null;
}

function calculate() {
    if (currentInput === '' || operator === '' || operand1 === null) return;
    let operand2 = parseFloat(currentInput);
    let result;
    switch (operator) {
        case '+':
            result = operand1 + operand2;
            break;
        case '-':
            result = operand1 - operand2;
            break;
        case '*':
            result = operand1 * operand2;
            break;
        case '/':
            if (operand2 === 0) {
                display.innerText = 'Error';
                return;
            }
            result = operand1 / operand2;
            break;
    }
    display.innerText = result;
    currentInput = result.toString();
    operator = '';
    operand1 = null;
}
