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


/* 
2️ Find the Largest Number

Concepts: comparison, iteration

Problem:
Given an array of numbers, return the largest value.
*/

// Input
let secondArray = [3, 7, 2, 9, 4];

function largestValue(secondArray){
    if(!Array.isArray(secondArray)) return false;
    let max = secondArray[0];
    for(let i=1;i<secondArray.length;i++){
        if(secondArray[i]>max){
            max = secondArray[i];
        }
    }
    return max;
}

console.log("Larget Value of an Array is : ", largestValue(secondArray));


const largestValueReduce = secondArray.reduce((a,b)=> a>b? a:b);
console.log("Largest Value of an Array using Reduce:", largestValueReduce );
// Output
// 9



/* 
3️. Count Occurrences of a Value

Concepts: counting, equality checks

Problem:
Given an array and a value, return how many times that value appears.

// Input
([1, 2, 2, 3, 2], 2)

// Output
3

*/
function elementOccurrence(arr,element){
    if(!Array.isArray(arr)) return false;
    let count = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]===element){
            count++;
        }
    }
    return count;
}

console.log("Element Occurence : ", elementOccurrence([1, 2, 2, 3, 2], 2));
// Using Filter


console.log(
  "Element Occurrence Filter:",
  ((arr, el) => arr.filter(x => x === el).length)([1, 2, 2, 3, 2], 2)
);
/* 
4️. Reverse an Array (Without Built-in Reverse)

Concepts: indexing, array creation

Problem:
Return a new array that is the reverse of the input.

// Input
[1, 2, 3, 4]

// Output
[4, 3, 2, 1]

*/
function reverseArray(sampleArray){
    if(!Array.isArray(sampleArray)) return false;

    let newArray =[];
    for(let i=sampleArray.length-1;i>=0;i--){
        newArray.push(sampleArray[i]);
    }
    return newArray;
}
console.log("Reverse Array : ", reverseArray([1, 2, 3, 4]));
/* 
5️⃣ Check if Array is Sorted (Ascending)

Concepts: adjacent comparison, early exit

Problem:
Return true if the array is sorted in ascending order, otherwise false.

// Input
[1, 2, 3, 4]   → true
[1, 3, 2, 4]   → false
https://chatgpt.com/c/695d2310-ca00-8331-88e3-10c310b2c245
*/