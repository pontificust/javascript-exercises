const fibonacci = function(n) {
    if(n < 0 || !isFinite(n) || typeof n !== 'number' && !n){
        return 'OOPS';
    }
    const goldenRatio = 0.5 * (1 + Math.sqrt(5));
    const goldenRationConjugate = 0.5 * (1 - Math.sqrt(5));

    const nthFibonacci = (goldenRatio ** n - goldenRationConjugate ** n) / Math.sqrt(5);
    return Math.round(nthFibonacci);
};


// Do not edit below this line
module.exports = fibonacci;
