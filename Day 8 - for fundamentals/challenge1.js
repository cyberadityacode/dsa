// compare squared array

function compareSquaredArray(arrayOne, arrayTwo){
    if(arrayOne.length !== arrayTwo.length) {
        return false;
    } 

    for(let i=0; i<arrayOne.length;i++){
        if(arrayOne[i]**2 !== arrayTwo[i]){
            return false;
        }
    }
    return true;
}

console.log(compareSquaredArray([1,2,3], [1,4,16])); //false
console.log(compareSquaredArray([1,2,3], [1,4,9])); //true


/* 
Hidden Assumption (Important)

Your solution assumes:

The squared values appear in the SAME ORDER in arrayTwo.

Example where your code fails:

compareSquaredArray([1,2,3], [9,1,4]); //  false (but should be true logically)
*/

// Addressing the edge case

// Interview Insight
// 
// Most interviewers expect:
// 
// “Check if arrayTwo contains the squares of arrayOne, regardless of order and frequency.”

// let's tryy brute force approach

function compareSquaredArrayBruteForce(arrayOne,arrayTwo){
    if(arrayOne.length !== arrayTwo.length) {
        return false;
    }

    // make a copy so we dont mutate the original array
    const arrayTwoCopy = [...arrayTwo];

    for(let i=0;i<arrayOne.length;i++){
        const squared = arrayOne[i] **2;
        let foundIndex = -1;

        for(let j=0;j<arrayTwoCopy.length;j++){
            if(arrayTwoCopy[j] === squared){
                foundIndex = j;
                break;
            }
        }
        if(foundIndex === -1){
            return false;
        }

        // remove matched element to handle duplicates
        arrayTwoCopy.splice(foundIndex,1);
    }

    return true;
}

console.log(compareSquaredArray([1, 2, 3], [1, 4, 9]));   // true
console.log(compareSquaredArray([1, 2, 3], [9, 2, 4]));   // false
compareSquaredArray([1, 2, 2], [1, 4, 4]);   // true
compareSquaredArray([1, 2, 2], [1, 4, 9]);   // false


/* 
“I used a nested loop approach where for each element in the first array, 
I look for its squared value in the second array.
 Once found, I remove it to correctly handle duplicates. 
 This approach works but has O(n²) time complexity,
 which is why a frequency-counter solution is more optimal.”
*/


