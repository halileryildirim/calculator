let currentValue, previousValue, operator;

currentValue = '';
previousValue = '';
operator = '';

const add = function(value1, value2) {
    return value1 + value2;
};
const subtract = function(value1, value2) {
    return value1 - value2;
};
const multiply = function(value1, value2) {
    return value1 * value2;
};
const divide = function(value1, value2) {
    return value1 / value2;
};

const operate = function(operator, value1, value2) {
    if(operator == "+") {
        return add(value1, value2);
    }
    else if(operator == "-") {
        return subtract(value1, value2);
    }
    else if(operator == "x") {
        return multiply(value1, value2);
    }
    else if(operator == "/") {
        if(currentValue == 0) {
            currentValue = "ERROR";
            currValue.innerText = currentValue;
        }
        return divide(value1, value2);
    }
};

const numberButtons = document.querySelectorAll(".number");
const addButton = document.querySelector(".add");
const subtractButton = document.querySelector(".subtract");
const divideButton = document.querySelector(".divide");
const multiplyButton = document.querySelector(".multiply");
const clearButton = document.querySelector(".clear");
const decimalButton = document.querySelector(".decimal");
const equalsButton = document.querySelector(".equals");
const preValue = document.querySelector(".previous");
const currValue = document.querySelector(".current");

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        if(currentValue.length < 15) {
            currentValue += button.innerText; 
            currValue.innerText = currentValue;
        }
        else if(currentValue == "ERROR") {
            currentValue = "";
            currValue.innerText = currentValue;
        }
        else {
            alert("ERROR");
        }   
        
    })
})

decimalButton.addEventListener('click', () => {
    if(!currentValue.includes(".")) {
        currentValue += ".";
        currValue.innerText = currentValue;

    }
})

clearButton.addEventListener('click', () => {
    currentValue = '';
    currValue.innerText = currentValue;

    previousValue = '';
    preValue.innerText = previousValue;

});

addButton.addEventListener('click', () => {
    operator = "+";
    previousValue = currentValue;
    preValue.innerText = previousValue;
    currentValue = '';
    currValue.innerText = currentValue;
});

subtractButton.addEventListener('click', () => {
    operator = "-";
    previousValue = currentValue;
    preValue.innerText = previousValue;
    currentValue = '';
    currValue.innerText = currentValue;
});

multiplyButton.addEventListener('click', () => {
    operator = "x";
    previousValue = currentValue;
    preValue.innerText = previousValue;
    currentValue = '';
    currValue.innerText = currentValue;
})

divideButton.addEventListener('click', () => {
    operator = "/";
    previousValue = currentValue;
    preValue.innerText = previousValue;
    currentValue = '';
    currValue.innerText = currentValue;
});



equalsButton.addEventListener('click', () => {
    if(previousValue == "" && currentValue == "") {
        currValue.innerText = "ERROR";
    }
    else if(previousValue != "" && currentValue == "") {
        currValue.innerText = currentValue;
    }
    else {
        previousValue = parseFloat(previousValue);
        currentValue = parseFloat(currentValue);
        currentValue = operate(operator, previousValue, currentValue);
        preValue.innerText = previousValue;
        currValue.innerText = currentValue;

        if(currentValue == "Infinity") {
            currentValue = "";
            previousValue = "";
            currValue.innerText = "ERROR";
            preValue.innerText = previousValue;
        };
    }

});

/*

Divide by zero error not working -solved
Equal after operator is causing errors. -solved
Decimal not working -solved
Floats are huge
Numbers are flowing out of display
innertext everytime is not a good practice -> build a function

*/
