let currentValue, previousValue, operator;  //Declarations

currentValue = '';
previousValue = '';
operator = '';

const add = function(value1, value2) {      //Operator functions
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

const operate = function(operator, value1, value2) {    //Function to call the operators and use it with statements.
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

const numberButtons = document.querySelectorAll(".number");     //Dom selectors for buttons
const addButton = document.querySelector(".add");
const subtractButton = document.querySelector(".subtract");
const divideButton = document.querySelector(".divide");
const multiplyButton = document.querySelector(".multiply");
const clearButton = document.querySelector(".clear");
const decimalButton = document.querySelector(".decimal");
const equalsButton = document.querySelector(".equals");
const preValue = document.querySelector(".previous");           //Dom selectors for display
const currValue = document.querySelector(".current");

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        if(currentValue.length <=5) {
            currentValue += button.innerText;                   //EventListener is blocked by 6 digit number inputs to prevent calculator from breaking.
            currValue.innerText = currentValue;
        }
    })
})

decimalButton.addEventListener('click', () => {                 //Operators display update eventListeners
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
    preValue.innerText = previousValue + " + ";
    currentValue = '';
    currValue.innerText = currentValue;
});

subtractButton.addEventListener('click', () => {
    operator = "-";
    previousValue = currentValue;
    preValue.innerText = previousValue + " - ";
    currentValue = '';
    currValue.innerText = currentValue;
});

multiplyButton.addEventListener('click', () => {
    operator = "x";
    previousValue = currentValue;
    preValue.innerText = previousValue + " x ";
    currentValue = '';
    currValue.innerText = currentValue;
})

divideButton.addEventListener('click', () => {
    operator = "/";
    previousValue = currentValue;
    preValue.innerText = previousValue + " / ";
    currentValue = '';
    currValue.innerText = currentValue;
});


function roundNumber(num) {                                     //To create both float and int outcomes but limit the digits after the "."
    return Math.round(num * 1000) / 1000;
}

equalsButton.addEventListener('click', () => {
    if(previousValue == "" && currentValue == "") {
        currValue.innerText = "ERROR";
    }

    else if(previousValue != "" && currentValue == "") {
        currValue.innerText = currentValue;
    }
    
    else if(currentValue!='' && previousValue== "") {
        currValue.innerText = currentValue;
    }
    else {
        previousValue = parseFloat(previousValue);              //Preventing calculator from divide by zero error and resetting the program.
        currentValue = parseFloat(currentValue);
        currentValue = operate(operator, previousValue, currentValue);
        preValue.innerText = previousValue;
        currValue.innerText = roundNumber(currentValue);

        if(currentValue == "Infinity") {
            currentValue = "";
            previousValue = "";
            currValue.innerText = "ERROR";
            preValue.innerText = previousValue;
        };
    }

});
