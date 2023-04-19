let currentInput = '';
let currentOperator = null;
let previousInput = '';

function addNumber(number) {
    currentInput += number;
    updateDisplay();
}

function addOperator(operator) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        calculateResult();
    }
    currentOperator = operator;
    previousInput = currentInput;
    currentInput = '';
}

function addDecimalPoint() {
    if (currentInput.includes('.')) return;
    if (currentInput === '') {
        currentInput = '0';
    }
    currentInput += '.';
    updateDisplay();
}

function deleteLastDigit() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    currentOperator = null;
    previousInput = '';
    updateDisplay();
}

function calculateResult() {
    if (currentInput === '' || previousInput === '' || currentOperator === null) return;
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);

    let result;
    switch (currentOperator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                alert('Erreur: Division par zéro');
                return;
            }
            result = num1 / num2;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    currentOperator = null;
    previousInput = '';
    updateDisplay();
}
