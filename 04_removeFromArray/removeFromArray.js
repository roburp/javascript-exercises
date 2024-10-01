const removeFromArray = function (arr, ...args) {
  const remove = Array.from(args);
  const filteredArr = arr.filter((item) => !remove.includes(item));
  return filteredArr;
};

// Do not edit below this line
module.exports = removeFromArray;
