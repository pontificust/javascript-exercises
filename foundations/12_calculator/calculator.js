const add = function(addend1, addend2) {
	return addend1 + addend2;
};

const subtract = function(minuend, subtrahend) {
	return minuend - subtrahend;
};

const sum = function(numbers) {
	return numbers.reduce((acc, number) => acc + number, 0);
};

const multiply = function(numbers) {
  return numbers.reduce((acc, number) => acc * number, 1);
};

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(number) {
  let factorial = 1;
	for(let i = 2; i <= number; i += 1) {
    factorial *= i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
