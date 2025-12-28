let sampleArray = [1,2,3,4,5];

// simple for loop : more control over indexes

/* 
Works on: Arrays, array-like objects (strings, NodeLists, etc.)

Use case: When you need full control over the index, can break/continue loops, or iterate custom steps.

Pros: Very flexible.

Cons: More verbose than modern loops.
*/
for(let i=0;i<sampleArray.length;i++){
    console.log( i, sampleArray[i]);
}


// for...of loop
/* 
Works on: Iterables like arrays, strings, Sets, Maps.

Use case: When you just want values from an iterable and don’t care about the index.

Pros: Clean syntax, works for any iterable.

Cons: Cannot directly get the index unless you use array.entries().
*/

for(const item of sampleArray){
    console.log(item);
}

// to access index using for ..of then use array.entries()
for(const [index,value] of sampleArray.entries()){
    console.log(index, value);
}

const sampleObject = {name:"aditya", message:"hello"};
/* 
you can't use for...of for object iteration : TypeError: sampleObject is not iterable
*/
/* for(const item of sampleObject){ 
    console.log(sampleObject[item]);
} */


// for...in loop
for(const key in sampleObject){
    console.log(key, sampleObject[key]);
}

/* Works on: Objects (enumerable properties), also arrays (but not recommended for arrays!)

Use case: When you want keys of an object.

Pros: Easy to iterate object properties.

Cons:

Iterates over all enumerable properties, including inherited ones.

Not ideal for arrays because keys are strings ("0", "1") and order is not guaranteed. */

// for Each method

sampleArray.forEach((item, index)=> {
    console.log(index, item);
});

// If you want to “do something” for every item and don’t need to stop early — use forEach().


/* 
forEach() is an array method in JavaScript that executes 
a provided callback function once for each element of the array. 
It is mainly used when we want to perform an action or 
side effect on every array element and do not need a return value.
*/

/* 
forEach() always returns undefined. It is not meant for transforming data. If we need a new array, we should use map(), filter(), or reduce()
*/
/* 
forEach() does not support break, continue, or return to stop iteration. The loop always runs for all elements.
*/
