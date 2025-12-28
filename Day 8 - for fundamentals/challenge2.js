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

function sameFrequencyTest(numOne,numTwo){
    if( typeof numOne !== typeof numTwo) return false;

    return true;
}

console.log(sameFrequencyTest(123,321));
console.log(sameFrequencyTest(123,"321"));
