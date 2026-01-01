/* 
What is a Subsequence? (Simple & Interview-ready)

A subsequence is a sequence that can be derived from another sequence 
by deleting some elements without changing the order of the remaining elements.

1. Order matters
2. Elements do NOT need to be contiguous

example:
"abcde"

Valid Subsequences
"ace"
"abc"
"ade"
"a"
""

Invalid subsequence
"bcd"
"bed"
"ed"


The fundamental difference between a substring and subsequence are as followed:
in substring order is important and string must be continuous
in subsequence order is important and string can or can't be continuous

Array example
[1, 2, 3, 4, 5]

Valid subsequence
[1, 3, 5]
[2, 4]
[1, 2, 3, 4, 5]


Invalid
[3,1]

*/


// Classic Interview Problem
// “Is one string a subsequence of another?”

isSubsequence("abc", "a1b2c3") // true
isSubsequence("abc", "acb")    // false
// Simple JS Implementation (Two Pointer Approach)

/* function isSubsequence(s1,s2){
    let i=0; //pointer for 1st string
    let j=0; //pointer for 2nd string

    // if first string is empty, its technically a subsequence
    if(!s1) return true;

    while(j<s2.length){
        if(s1[i] === s2[j]){
            i++;
        }

        // if first pointer reaches the end, we found the whole order!
        if(i===s1.length) return true;

        // always move the second pointer
        j++;
    }
    return false;
} */

function isSubsequence(s1, s2) {
    let i = 0;
    let j = 0;

    if(!s1) return true;

    while (i < s1.length && j < s2.length) {
        if (s1[i] === s2[j]) {
            i++;
        }
        j++;
    }

    return i === s1.length;
}


/* 
Time & Space Complexity

Time: O(n)

Space: O(1)
 */


/* 
Watching a movie and picking only your favorite scenes
(order stays the same, scenes are skipped)
*/

console.log(isSubsequence('abc', 'acb')) //-> false (order changed)
console.log(isSubsequence('abc', 'abracadabra')) //-> true (a...b...c... exists)