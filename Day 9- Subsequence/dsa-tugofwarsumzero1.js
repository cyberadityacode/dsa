/* Example 1: The "Tug of War" (Sum Zero)
Problem: You have a sorted array of integers. Find the first pair where the sum is 0.

[-3, -2, -1, 0, 1, 2, 4] ⮕ [-2, 2]

[-2, 0, 1, 3] ⮕ undefined */

function tugOfWarSumZero(arr){
    if(!Array.isArray(arr)) return undefined;

    let left=0;
    let right = arr.length-1;
    
    while(left <right){
        const sum = arr[left] + arr[right];

        if(sum===0){
            return [arr[left],arr[right]];
        }else if(sum>0){
            right--;
        }else{
            left++;
        }
    }
    return undefined;
}

console.log(tugOfWarSumZero([-3, -2, -1, 0, 1, 2, 4]));
console.log(tugOfWarSumZero([-2, 0, 1, 3]));




