const palindromes = function (str) {
    const lowerCaseStr = str.toLowerCase();
    const strWithoutPunctuation = 
    lowerCaseStr.split('').filter(val => 
        val.codePointAt(0) >= 'a'.codePointAt(0) && 
        val.codePointAt(0) <= 'z'.codePointAt(0) ||
        val.codePointAt(0) >= '0'.codePointAt(0) &&
        val.codePointAt(0) <= '9'.codePointAt(0)).join('');
    console.log(strWithoutPunctuation);
    return (
        strWithoutPunctuation.split('').reverse().join('') === strWithoutPunctuation);    
};

// Do not edit below this line
module.exports = palindromes;
