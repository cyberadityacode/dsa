/* Example 2: The "Mirror" (Valid Palindrome)
Problem: Check if a string is a palindrome (reads the same forward and backward).

"racecar" ⮕ true

"pizza" ⮕ false */


function checkPalindrome(str){
    if(typeof str!=="string") return false;

    let left=0;
    let right = str.length -1;

    while(left<right){
        if(str[left] !== str[right]) return false;
        left++;
        right--;
    }
    return true;
}

console.log(checkPalindrome("racecar"));
console.log(checkPalindrome("racecae"));
/* 
Time: O(n)
Space: O(1)
*/

// Clever way, but uses extra memory

const cleverPalindrome = str=>
    typeof str === "string" && str === str.split("").reverse().join("");


console.log(cleverPalindrome("aba"));
console.log(cleverPalindrome("racecar"));
