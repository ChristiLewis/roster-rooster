const add = (number1, number2) => number1 + number2;

module.exports = {
    add: add,
};

module.exports = function( val1, val2 ) {
    if (val1 === val2) {
        return true;
    } else {
        return false;
    }
};