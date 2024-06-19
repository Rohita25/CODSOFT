let CurOp = '';
let valueDisplayed = '0';
let firstOp = '';
let secondOp = '';

function onDisplay(value) {
    if (valueDisplayed === '0' && value !== '.') {
        valueDisplayed = value;
    } else {
        valueDisplayed += value;
    }
    updateDisplay();
}

function clearDisplay() {
    valueDisplayed = '0';
    CurOp = '';
    firstOp = '';
    secondOp = '';
    updateDisplay();
}

function operation(op) {
    if (CurOp !== '') {
    
        calc();
    }
    valueDisplayed += op;
    CurOp = op;
    updateDisplay();
}

function calc() {
    if (CurOp === '' || valueDisplayed === '') {
        return;
    }

    let index = valueDisplayed.indexOf(CurOp);
    firstOp = valueDisplayed.substring(0, index);
    secondOp = valueDisplayed.substring(index + 1);

    let ans;
    
    switch (CurOp) {
        case '+':
            ans = parseFloat(firstOp) + parseFloat(secondOp);
            break;
        case '-':
            ans = parseFloat(firstOp) - parseFloat(secondOp);
            break;
        case '*':
            ans = parseFloat(firstOp) * parseFloat(secondOp);
            break;
        case '/':
            ans = parseFloat(firstOp) / parseFloat(secondOp);
            break;
        default:
            return;
    }
    
    valueDisplayed = ans.toString();
    CurOp = '';
    firstOp = '';
    secondOp = '';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = valueDisplayed; 
}
