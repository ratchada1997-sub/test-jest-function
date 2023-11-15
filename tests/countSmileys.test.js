const countSmileys = require("../src/countSmileys");
//npx jest tests/countSmileys.test.js
describe("countSmileys function", () => {
  test("Counting valid smiley faces", () => {
    const faces1 = [":)", ";(", ";}", ":-D"];
    const count1 = countSmileys(faces1);
    expect(count1).toBe(2); 
  });

//   test("Counting with empty array", () => {
//     const faces2 = [];
//     const count2 = countSmileys(faces2);
//     expect(count2).toBe(0); 
//   });

//   test("Counting with more valid smiley faces", () => {
//     const faces3 = [":-)", ";~D", ":-D", ":~)", ";-D"];
//     const count3 = countSmileys(faces3);
//     expect(count3).toBe(5); 
//   });

  // Add more test cases as needed
});
