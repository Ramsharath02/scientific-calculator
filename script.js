let expression = '';

function appendValue(value) {
    expression += value;
    document.getElementById('display').value = expression;
}

function clearDisplay() {
    expression = expression.slice(0, -1); // Remove the last character
    document.getElementById('display').value = expression;
}

function calculate() {
    try {
        const result = eval(expression);
        document.getElementById('display').value = result;
        expression = '';
    } catch (error) {
        document.getElementById('display').value = 'Error';
        expression = '';
    }
}
