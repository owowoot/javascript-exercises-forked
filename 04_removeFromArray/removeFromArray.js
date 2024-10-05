const removeFromArray = function (array, ...args) {
    let newArray = [...array]
    for (let arg of args) {
        let index = newArray.indexOf(arg)
        while (index !== -1) {
            newArray.splice(index, 1)
            index = newArray.indexOf(arg)
        }
    };
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
