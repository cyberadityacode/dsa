// Task 1 - Even or Odd function

const isEven = (num) => {
  return num % 2 === 0 ? "Even" : "Odd";
};

console.log(isEven(7));
console.log(isEven(4));

//Task 2 – Maximum of Two Numbers (Do not use Math.max() yet).

const maxOfTwo = (a, b) => {
  return a > b ? a : b;
};

console.log(maxOfTwo(4, 7));
console.log(maxOfTwo(20, 20));
console.log(Math.max(4, 7));

console.log("----");
// Task 3 – Maximum of Three Numbers (Challenge)
/* Extend the logic: Write maxOfThree(a, b, c).
Use your maxOfTwo inside it (reusability). */

/*  NOT GOOD APPROACH
const maxOfThree = (maxOfTwo, c) => {
  return maxOfTwo > c ? maxOfTwo : c;
};

console.log(maxOfThree(maxOfTwo(1, 7), 3));
 */

const maxOfThree = (a, b, c) => {
  return maxOfTwo(maxOfTwo(a, b), c);
};

console.log(maxOfThree(1, 2, 3));
console.log(maxOfThree(7, 1, 3));
