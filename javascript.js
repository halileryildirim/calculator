let value3;

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

