const sumAll = function(a, b) {
    if(Number.isInteger(a) && Number.isInteger(b) && a >= 0 && b >= 0) {
        const startNumber = Math.min(a, b);
        let resultSum = 0;

        for(let i = startNumber; i <= a + b - startNumber; i += 1) {
            resultSum += i;
        }
        return resultSum;
    } else {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = sumAll;
