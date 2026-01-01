/* 
Problem 2: Digit Frequency (The Interview Classic)
This is a variation often seen in technical screenings 
because it forces you to convert types.

The Goal: Given two positive integers, 
find out if the two numbers have the same frequency of digits.

Example:

sameFrequency(182, 281) ⮕ true

sameFrequency(34, 14) ⮕ false

sameFrequency(3589578, 5879385) ⮕ true
*/


/*
Rejects: strings , NaN Infinity 
*/
/* function sameFrequencyTest(numOne,numTwo){
    return Number.isFinite(numOne) && Number.isFinite(numTwo);
}

console.log(sameFrequencyTest(123,321));
console.log(sameFrequencyTest(123,"321"));
console.log(sameFrequencyTest("123","321"));

 */

function sameFrequency(numberOne,numberTwo){
    // step 1 : validation
    if(!Number.isFinite(numberOne) && Number.isFinite(numberTwo)){
        return false;
    }

    // step 2: convert to strings

    const str1 = String(numberOne);
    const str2 = String(numberTwo);

    // step 3: length check
    if(str1.length !== str2.length){
        return false;
    }

    // step 4: frequency counter
    const freq = {};
    for(let char of str1){
        freq[char] = (freq[char] || 0) +1;
    }

    // step 5: compare
    for(let char of str2){
        if(!freq[char]){
            return false;
        }
        freq[char]--;
    }

    return true;
}

console.log(sameFrequency(182, 281));       // true
console.log(sameFrequency(34, 14));         // false
console.log(sameFrequency(3589578, 5879385));// true

console.log(sameFrequency(123, "321"));     // false
console.log(sameFrequency("123", "321"));   // false
console.log(sameFrequency(NaN, 123));       // false
console.log(sameFrequency(12, Infinity));   // false



// if order doesn't matter than its a piece of a cake.
function isIdentical(num1,num2){
    return num1.toString() === num2.toString();
}

console.log("is Identical ", isIdentical(182, 281));       // false
console.log("is Identical ", isIdentical("182", "281"));       // false
console.log("is Identical ", isIdentical(192, 129));       // false
console.log("is Identical ", isIdentical(192, 192));       // true



