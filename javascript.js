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
    if(value2 == 0) {
        currentValue = '';
        previousValue = '';
        currValue.innerText = "ERROR";
    }
    else {
        return value1 / value2;
    }
    
};

const operate = function(operator, value1, value2) {
    if(operator == "+") {
        console.log("+ geldi")
        return add(value1, value2);
    }
    else if(operator == "-") {
        console.log("- geldi")
        return subtract(value1, value2);
    }
    else if(operator == "x") {
        console.log("x geldi")
        return multiply(value1, value2);
    }
    else if(operator == "/") {
        console.log("/ geldi")
        return divide(value1, value2);
    }
};

const numberButtons = document.querySelectorAll(".number");
const addButton = document.querySelector(".add");
const subtractButton = document.querySelector(".subtract");
const divideButton = document.querySelector(".divide");
const multiplyButton = document.querySelector(".multiply");
const clearButton = document.querySelector(".clear");
const equalsButton = document.querySelector(".equals");
const preValue = document.querySelector(".previous");
const currValue = document.querySelector(".current");

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        if(currentValue.length < 15) {
            currentValue += button.innerText; 
            currValue.innerText = currentValue;
        }
        else {
            alert("ERROR");
        }   
        
    })
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
    console.log(operator);
});

subtractButton.addEventListener('click', () => {
    operator = "-";
    previousValue = currentValue;
    preValue.innerText = previousValue;
    currentValue = '';
    currValue.innerText = currentValue;
    console.log(operator);
});

multiplyButton.addEventListener('click', () => {
    operator = "x";
    previousValue = currentValue;
    preValue.innerText = previousValue;
    currentValue = '';
    currValue.innerText = currentValue;
    console.log(operator);
})

divideButton.addEventListener('click', () => {
    operator = "/";
    previousValue = currentValue;
    preValue.innerText = previousValue;
    currentValue = '';
    currValue.innerText = currentValue;
    console.log(operator);
});


equalsButton.addEventListener('click', () => {
    if(previousValue == "" && currentValue == "") {
        currValue.innerText = "ERROR";
    }
    else if(currentValue != "" && previousValue == "") {
        currValue.innerText = currentValue;
    }
    else {
        previousValue = parseInt(previousValue);
        currentValue = parseInt(currentValue);
        currentValue = operate(operator, previousValue, currentValue);
        previousValue ="";
        preValue.innerText = previousValue;
        currValue.innerText = currentValue;
    }

});



/*

Divide by zero not working
Numbers are flowing out of display
Decimal not working
Floats are huge
innertext everytime is not a good practice -> build a function

*/
