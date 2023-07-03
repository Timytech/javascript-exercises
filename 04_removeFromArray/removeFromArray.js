const removeFromArray = function(array, ...args) {
    return array.filter(val => !args.includes(val))
}

// Do not edit below this line
module.exports = removeFromArray;

/*
//Alternative Solution
const removeFromArray = function (arr, ...args) {
  const newArray = [];
  arr.forEach((item) => {
    if (!args.includes(item)) {
      newArray.push(item);
    }
  });
  return newArray;
};
*/