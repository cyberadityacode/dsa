//1. Given an array of numbers, return the sum of all elements.
// Input
let sampleArray = [1, 2, 3, 4, 5];

// Output
// 15

function sumArray(sampleArray){
    if(!Array.isArray(sampleArray)) return false;

    let total=0;
    let i=0
    while(i<sampleArray.length){
        total+= sampleArray[i];
        i++;
    }

    return total;
}

console.log(sumArray(sampleArray));

// Best / Most Idiomatic JavaScript Solution using reduce

const sumArrayReduce = (arr)=> arr.reduce((acc,element)=> acc+=element,0);
console.log(sumArrayReduce(sampleArray))