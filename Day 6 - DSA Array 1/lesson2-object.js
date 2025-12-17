/**
Moving to Objects: The "Dictionary" of JS 
Now that we've seen how Arrays can be sneaky with performance, 
let's talk about Objects (and Maps).

In DSA terms, JavaScript Objects act like Hash Tables. They store data in key-value pairs.

Why Objects are Performance Kings
Unlike Arrays, Objects don't have a specific "order" that requires re-indexing. 
If you want to find "John's age" in an object, 
you don't have to look through every entry—you go directly to the "John" key.

*/
/* 
$O(1);
Access (arr['key'])
Insertion
Removal
Searching (Value)

Mentor Note: If you need to store data and your primary task is looking things up quickly, 
an Object or a Map is almost always better than an Array.

*/

/* 
Comparison Challenge 

Imagine you are building a username checker for a website with 1,000,000 users. 
You need to check if a new username is already taken.

Approach 1: Store usernames in an Array and use .includes().

Approach 2: Store usernames as keys in an Object and check if (usernames[newName]).

Which approach is faster for a million users, and why? (Think about the Big O of searching an Array vs. accessing an Object).

*/

let namesArray = ["aditya", "cyberaditya", "abc", "xyz"];

console.time();
function isUsernameTaken(arr, username) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == username) {
      return true;
    }
  }
  return false;
}
console.timeEnd();
console.log(isUsernameTaken(namesArray, "abc"));

console.time();
function isUsernameTakenIncludes(arr, username) {
  return arr.includes(username);
}
console.timeEnd();
console.log(isUsernameTakenIncludes(namesArray, "abc"));

//
const usernames = {
  aditya: 1,
  cyberaditya: 1,
  abc: 1,
  xyz: 1,
};

console.time();
// console.log("Object.hasOwn :", Object.hasOwn(usernames, "abc"));
console.log("Just call :", usernames["abc"]);
console.timeEnd();

// Convert namesArray to Object
console.time();
const usernamesObj = Object.fromEntries(namesArray.map((name) => [name, 1]));

console.log(usernamesObj);
console.timeEnd();

// BEST- use SET, it only cares about existence
console.time();
const usernamesSet = new Set(namesArray);
console.log(usernamesSet.has("abc"));
console.timeEnd();
