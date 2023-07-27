let currentValue, previousValue;

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
const operatorButtons = document.querySelectorAll(".operator")
const clearButton = document.querySelector(".clear");
const equalsButton = document.querySelector(".equals");


numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert(button.innerText)
    })
})

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert(button.innerText)
    })
})


