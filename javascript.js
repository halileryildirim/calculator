let value3;

const add = function(value1, value2) {
    value3 = value1 + value2;
    return value3;
}
const subtract = function(value1, value2) {
    value3 = value1 - value2;
    return value3;
}

const multiply = function(value1, value2) {
    value3 = value1 * value2;
    return value3;
}

const divide = function(value1, value2) {
    value3 = value1 / value2;
    return value3;
}

const operate = function(operator, value1, value2) {
    return operator(value1,value2);
}