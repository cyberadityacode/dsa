/* 
1. Array Basics and MemoryIn many languages, arrays are a fixed size. In JavaScript, they are dynamic, meaning they can grow or shrink as needed. However, the way they are stored in memory still dictates their performance.
2. The Big O of Array Operations -This is where most novice developers get tripped up. Not all array methods are created equal!Accessing an Element: $O(1)$If you know the index, getting the value is instant.let fruit = fruits[2];The computer does a simple math calculation to find the exact memory address of index 2. It doesn't matter if the array has 10 items or 10 million.Adding/Removing from the End: $O(1)$Methods like .push() and .pop() are very efficient.Since the computer knows the length of the array, it just goes to the very end and adds or removes an item. No other elements have to move.
Adding/Removing from the Beginning: $O(n)$This is the "Hidden Cost." Methods like .unshift() (add to start) and .shift() (remove from start) are expensive.Why? Imagine a line of people. If someone cuts to the very front of the line, every single person behind them has to move back one step to make room.In JavaScript, if you unshift an item into an array of 1,000 items, the computer has to re-index all 1,000 existing items.
*/

console.log("Adding element to beginning is costly compared to end");

/* 
The "Expert" Insight
When you are building an app and you need to add items to a collection frequently, 
adding to the end is always better than adding to the beginning. 
If you find yourself using .unshift() inside a loop, 
your code will slow down drastically as your data grows.
*/

console.time();
let sampleArray = [1, 2, 3, 4];

function reverseArray(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.unshift(arr[i]); //adding element to the start of an array
  }
  return newArray;
}
console.log(reverseArray(sampleArray));

console.timeEnd();

/* 
I guessed time complexity as O(n) but its incorrect
 but this is exactly where many developers fall into a performance trap! 
 This is what we call a "hidden complexity" error.
 While it looks like a single loop, the actual complexity is $O(n^2)$ (Quadratic).
*/

/* 
Why is it $O(n^2)?
To find the total complexity, 
we have to look at what is happening inside the loop.The Loop: 
You are right that the for loop runs $n times. 
That is $O(n)$.The Method: Inside that loop, you are calling .unshift(). 

As we discussed, .unshift() is an $O(n)$ operation 
because it has to move every single existing element in newArray to the right 
to make room at the front.

When you put an $O(n)$ operation inside an $O(n)$ loop, 
you multiply them:$$n (\text{loop}) \times n (\text{unshift}) = n^2
*/

/* 
The "Expert" Way to Fix It
If we want to become experts, we need to achieve this in Linear Time ($O(n)$). 
We can do this by avoiding .unshift() and using .push() instead, which is $O(1)$.
*/

console.time();
function reverseArrayExpert(arr) {
  let newArray = [];
  for (let i = arr.length; i >= 0; i--) {
    newArray.push(arr[i]); //push() is O(n)
  }
  return newArray;
}
console.timeEnd();
console.log("Expert Reverse Array ", reverseArrayExpert(sampleArray));

/* 
Loop: $n iterations.
Inside: $O(1) operation.

Total: $O(n) Much faster!
*/
