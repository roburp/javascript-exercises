const convertToCelsius = function (temp) {
  // C = (F - 32) × 5/9
  let celcius = (temp - 32) * (5 / 9);
  celcius = Math.round(celcius * 10) / 10;
  return celcius;
};

const convertToFahrenheit = function (temp) {
  // F = (9/5) C+32
  let farenheit = (9 / 5) * temp + 32;
  farenheit = Math.round(farenheit * 10) / 10;
  return farenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
