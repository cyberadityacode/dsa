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


