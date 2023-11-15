const invertValue = (value) => {
  const permutations = new Set();
  const getInvertValue = (chars, prefix = "") => {
    console.log("....", chars);
    if (chars.length === 0) {
      permutations.add(prefix);
    } else {
      for (let i = 0; i < chars.length; i++) {
        const rest = chars.substring(0, i) + chars.substring(i + 1);
        console.log("....rest", rest);
        getInvertValue(rest, prefix + chars[i]);
      }
    }
  };
  getInvertValue(value);
  return Array.from(permutations);
};
const inputString = "abc";
const result = invertValue(inputString);
console.log(result);

module.exports = invertValue;
