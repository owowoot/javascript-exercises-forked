const sumAll = function (startInt, endInt) {
    let array = [];
    let sumOfArray = 0;

    if (Number.isInteger(startInt) == false || Number.isInteger(endInt) == false) {
        return 'ERROR';
    } else if (startInt < 0 || endInt < 0) {
        return 'ERROR';
    } else if (startInt > endInt) {
        [startInt, endInt] = [endInt, startInt]
        for (i = startInt; i <= endInt; i++) {
            array.push(i)
            sumOfArray += i;
        };
        return sumOfArray;
    } else {
        for (i = startInt; i <= endInt; i++) {
            array.push(i)
            sumOfArray += i;
        };
        return sumOfArray;
    };
};

// Do not edit below this line
module.exports = sumAll;
