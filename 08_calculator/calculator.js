const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(arr) {
  return arr.reduce((total, value) => total + value, 0);
};

const multiply = function(...args) {
  let result = 1;
  for(let i=0; i<args.length; i++){
    result *= args[i];
  }
  return result;
};

const power = function(x,y) {
  return Math.pow(x,y);
};

const factorial = function(x) {
	if(x === 0) return 1;
  let result = 1;
  for(let i=x; i>0; i--){
    result *= i;
  }
  return result;
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
