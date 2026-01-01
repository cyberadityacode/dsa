/* 
Welcome to the Next Level: Recursion 🧠
Now that you've mastered the iterative (loop-based) way of thinking, it's time to learn the Recursive way.

In JavaScript, Recursion is when a function calls itself. 
It sounds like a circular nightmare, but it’s actually the most elegant way to solve problems 
that involve "nested" or "branching" structures (like folders inside folders).
*/

/* 
The Two Golden Rules of Recursion
To prevent a function from calling itself forever 
(which causes the famous "Stack Overflow" error), every recursive function MUST have two things:

The Base Case: The "Stop" condition. When the function reaches this point, it stops calling itself.

The Recursive Step: The part where the function calls itself again,
but with a smaller or simpler input.
*/

/* A Simple Example: Counting Down
The Novice Way (Iterative): */

function countDown(num){
    for(let i=num;i>0;i--){
        console.log(i);
    }
    console.log("ALL DONE");
}

console.log(countDown(10));

// The Expert Way (Recursive):
function countDownRecursive(num){
    // 1. base case(stop sign)
    if(num<=0){
        console.log("ALL DONE!");
        return;
    }

    console.log(num);

    // 2. Recursive Step(Call self with a smaller number)
    num--;
    countDownRecursive(num);
}

console.log("Expert Way:", countDownRecursive(10));


/* 
Why use Recursion?
While the for loop is often faster for simple things, recursion is "quintessential" for:

Searching through JSON objects with unknown depth.

Traversing Trees and Graphs (the backbone of Social Media and Google Maps).

Sorting algorithms like Merge Sort and Quick Sort.
*/