// $O(n) in JavaScript Think about this simple JavaScript function that iterates through an array to find a specific item:
// Linear Time (O(n) complexity)
/* The key takeaway is that the number of steps is directly proportional to the size of the input ($n$). */

function findItem(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return true;
    }
  }
  return false;
}

const arr = [1, 0, 7, 1, 3, 9];
console.log(findItem(arr, 7));
console.log(findItem(arr, 2));
