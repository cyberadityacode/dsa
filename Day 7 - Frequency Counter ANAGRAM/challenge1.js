/* 
Problem 1: The "Squared" Array
The Goal: Write a function called same, which accepts two arrays. 
The function should return true 
if every value in the array has its corresponding value squared in the second array.
The frequency of values must be the same.

Examples:

same([1, 2, 3], [4, 1, 9]) ⮕ true

same([1, 2, 3], [1, 9]) ⮕ false

same([1, 2, 1], [4, 4, 1]) ⮕ false (must be the same frequency)
*/

function sameArray(arrA, arrB) {
  if (arrA.length !== arrB.length) {
    return false;
  }

  const sqA = arrA.map((sq) => sq ** 2);
  console.log("square of array A ", sqA);
  console.log("whether its equal to B ", sqA == arrB);
}

console.log("Length of Array A", sameArray([1, 2, 3], [1, 4, 9]));

console.info([1, 2, 3] == [1, 4, 9]); //condition will always return false, because JS compares Object by reference not by value
