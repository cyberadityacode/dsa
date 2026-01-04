/* 
1. The Engine: The Call Stack 
To be an expert, you have to understand how JavaScript handles these recursive calls. 
JavaScript uses a Call Stack.

Imagine a stack of literal plates.

When you call a function, it's like putting a plate on the top of the stack (Push).

When a function returns (finishes), you take the plate off the top (Pop).

In recursion, you keep adding plates on top of each other. 
If you don't have a Base Case, 
you keep adding plates until the stack gets too high and falls over. 
In programming, we call that a Stack Overflow.
*/


/* 
2. A Real-World Problem: The Nested Sum
Let's look at something more practical than factorials. Imagine you are working with data from an API, and you need to sum all the numbers in an array. But here is the catch: The array might contain other arrays.

Example: [1, 2, [3, 4], 5]

A for loop would struggle here because it doesn't know how "deep" the nesting goes. Recursion handles this effortlessly.
*/


// just for warm-up lets add simple array elements
const sumArraySimple = [1,2,3,4,5].reduce((acc,ele)=> acc+=ele,0);
console.log(sumArraySimple); //15

// now lets move to nested array sum using recursion

function nestedArraySum(sampleArray){
    let total = 0;
    for(let item of sampleArray){
        if(Array.isArray(item)){
            // if its an array, RECURSE! call the same function on the inner array
            total += nestedArraySum(item);
        }else{
            // if its a number, just add it
            total += item;
        }
    }
    return total;
}

console.log(nestedArraySum([1, [2, [3]], 4])); 

/* 
Why this is powerful:
This function doesn't care if the array is nested 2 times or 200 times. It will keep calling itself until it hits "bottom" (the numbers), and then it will bubble those sums back up to the top.
*/


// nested array sum experiment using reduce

const sumArrayBase = (arr)=> arr.reduce((acc,ele)=> acc+=ele,0);

console.log(sumArrayBase([10, 20, 30])); //60

const sumDeepArray = (arr) =>
    arr.reduce(
        (acc,ele)=>
            Array.isArray(ele)
                ? acc + sumDeepArray(ele)
                : acc + ele,
            0
    );
console.log(sumDeepArray([10,[20,[30,40]]])); //100