const findOdd = (arr) => {
  const occurrences = {};

  for (const num of arr) {
    occurrences[num] = (occurrences[num] || 0) + 1;
  }

  for (const [key, value] of Object.entries(occurrences)) {
    if (value % 2 !== 0) {
      return parseInt(key, 10);
    }
  }
};
const array = [1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1, 4, 4];
const oddInt = findOdd(array);
  console.log(`The integer appearing an odd number of times is: ${oddInt}`);
module.exports = findOdd;
