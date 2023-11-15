const countSmileys = (arr) => {
  const validSmileys = arr.filter((face) => /^[:;][-~]?[)D]$/.test(face));
  return validSmileys.length;
};

const faces = [":)", ";(", ";}", ":-D"];
const count = countSmileys(faces);
console.log(`should return: ${count}`);

module.exports = countSmileys;
