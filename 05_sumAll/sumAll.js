const sumAll = function (num1, num2) {
  let sum = 0;
  let start = Math.min(num1, num2);
  let end = Math.max(num1, num2);

  if ([num1, num2].some((num) => typeof num !== "number" || Number.isNaN(num) || num < 0 || !Number.isInteger(num))) {
    return "ERROR";
  }

  do {
    sum += start;
    start++;
  } while (start <= end);

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
