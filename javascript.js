let currentValue, previousValue;

currentValue = '';
previousValue = '';

const add = function(value1, value2) {
    return value1 + value2;
}
const subtract = function(value1, value2) {
    return value1 - value2;
}

const multiply = function(value1, value2) {
    return value1 * value2;
}

const divide = function(value1, value2) {
    return value1 / value2;
}

const operate = function(operator, value1, value2) {
    return operator(value1,value2);
}

const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const clearButton = document.querySelector(".clear");
const equalsButton = document.querySelector(".equals");
const preValue = document.querySelector(".previous");
const currValue = document.querySelector(".current");

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentValue += button.innerText; 
        currValue.innerText = currentValue;
    })
})

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        previousValue = currentValue + " " + button.innerText;
        preValue.innerText = previousValue;
        currentValue = '';
        currValue.innerText = currentValue;
    })
})




