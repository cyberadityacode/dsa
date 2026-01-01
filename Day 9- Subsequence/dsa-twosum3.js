/* 
Scenario: You have a sorted array: [1, 2, 3, 4, 10, 11]. 
You want to find a pair that sums to 13.
*/

function twoSum(arr, target){
    if(!Array.isArray(arr)) return undefined;

    let left = 0;
    let right = arr.length-1;

    while(left<right){
        let sum = arr[left] +arr[right];

        if(sum === target){
            return [arr[left], arr[right]]; //found the pair
        }else if(sum>target){
            right--; //sum too high move right pointer to left
        }else{
            left++; //sum too low, move left pointer to right
        }
    }
    return null; //no pair found
}

console.log(twoSum([1, 2, 3, 4, 10, 11], 13));
console.log(twoSum([1, 2, 3, 4, 10, 12], 113));
console.log(twoSum([], 113));
console.log(twoSum("abc", 113));


/* Time Complexity: $O(n)$Space Complexity: $O(1)$ (We only created two variables: left and right) */