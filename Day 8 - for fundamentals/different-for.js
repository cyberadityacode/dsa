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

