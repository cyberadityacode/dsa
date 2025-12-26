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

console.info("TRY ", [1,2]==[1,2]); // false, because JS compares object by reference not by value
console.info("EMPTY ARRAY COMPARE ", []==[]); // false, because JS compares object by reference not by value

console.info("EMPTY STRING COMPARE ", ""===""); // true
console.info("EMPTY STRING COMPARE different type quotes ", ""===''); // true
console.info("EMPTY STRING COMPARE different type string literals ", ""===``); // true



/* 
First Task: compare two arrays, return true if both arrays are same
*/


// Clean Solution (Primitive values)
function compareArray(firstArray, secondArray){
  if(firstArray.length !== secondArray.length){
    return false;
  }

  for(let i=0; i<firstArray.length;i++){
    if(firstArray[i] !==secondArray[i]){
      return false;
    }
  }
  return true;
}


console.log("Comparing two arrays using simple solution", compareArray([1,2,3], [1,2,3]));
console.log("Comparing two arrays using simple solution", compareArray([1,2,3], [1,2,4]));


// Modern & Concise (using every())

/* 
The Array.prototype.every() Method 
The every() method is an array iteration method that tests whether all elements in the array pass the test implemented by a provided function. 
Returns true: If the callback function returns a truthy value for all elements in the array.
Returns false: If the callback function returns a falsy value for even one element, every() immediately stops iterating (short-circuits) and returns false.
Does not change the original array. 
*/


function compareArrayModern(firstArray, secondArray){
  return (
    firstArray.length === secondArray.length && 
    firstArray.every((value,index)=> value=== secondArray[index])
  );
}

console.log("compare array modern", compareArray([1,2,3],[1,2,3]));
console.log("compare array modern", compareArray([1,2,3],[1,2,4]));


/* 
Task 2: The "Squared" Array
The Goal: Write a function called same, which accepts two arrays. 
The function should return true 
if every value in the array has its corresponding value squared in the second array.
The frequency of values must be the same.

Examples:

same([1, 2, 3], [4, 1, 9]) ⮕ true

same([1, 2, 3], [1, 9]) ⮕ false

same([1, 2, 1], [4, 4, 1]) ⮕ false (must be the same frequency)
*/

// slice() is an array method that creates a new array by copying elements from an existing array.

function squaredArrayCompare(firstArray, secondArray){
  if(firstArray.length !== secondArray.length){
    return false;
  }

  // sort both arrays
  firstArray = firstArray.slice().sort((a,b)=>a-b);
  secondArray = secondArray.slice().sort((a,b)=>a-b);
  
  for(let i=0; i<firstArray.length;i++){
    if(firstArray[i]**2 !== secondArray[i]){
      return false;
    }
  }

  return true;
}

console.log("SQUARED ARRAY COMPARE ", squaredArrayCompare([1,2,3], [1,4,9]));
console.log("SQUARED ARRAY COMPARE ", squaredArrayCompare([1,2,3], [1,1,9]));
console.log("SQUARED ARRAY COMPARE", squaredArrayCompare([1, 2, 1], [4, 4, 1])); // false
