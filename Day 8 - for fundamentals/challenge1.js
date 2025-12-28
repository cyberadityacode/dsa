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