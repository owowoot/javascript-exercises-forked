const sumAll = function (startInt, endInt) { // 1,3
    let result = 0;
    let minNum = Math.min(startInt, endInt)
    let maxNum = Math.max(startInt, endInt)

    if (Number.isInteger(startInt) == false || Number.isInteger(endInt) == false) {
        return 'ERROR';
    } else if (startInt < 0 || endInt < 0) {
        return 'ERROR';
    }
    for (let i = minNum; i <= maxNum; i++) {
        result += i
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
