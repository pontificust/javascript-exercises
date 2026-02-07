const removeFromArray = function(arr, ...valuesToRemove) {
    for(let i = 0; i < valuesToRemove.length; i += 1) {
        while(arr.indexOf(valuesToRemove[i]) >= 0){
            let indexToRemove = arr.indexOf(valuesToRemove[i]);
            arr.splice(indexToRemove, 1);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
