const convertToCelsius = function(temp) {
  const tempCelsius = Math.round((temp - 32) * (5 / 9) * 10) / 10;
  return tempCelsius;
};

const convertToFahrenheit = function(temp) {
  const tempFahrenheit = Math.round(((temp * 9) / 5 + 32) * 10) / 10;
  return tempFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
