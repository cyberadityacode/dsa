/* 
Binary Search is used when you aren't looking for a pair, 
but a single specific value in a sorted array. 

It is incredibly fast—it's how a computer can find one specific name in a list of 1 billion names
in just 30 steps.

The Logic: "Divide and Conquer"Instead of moving pointers one step at a time,
 Binary Search jumps to the middle.
 Left pointer at the start, 
 Right pointer at the end.
 
 Find the Middle index.
 
 Is the middle element your target?If Yes, you're done!
 If the middle is too big, move the Right pointer to middle - 1 (you just eliminated the entire right half!).
 If the middle is too small, move the Left pointer to middle + 1 (you just eliminated the entire left half!).Why Experts Love it: $O(\log n)$
 This is the first time we encounter Logarithmic Time. 

 While $O(n)$ grows as the data grows, $O(\log n)$ barely grows at all.
*/

/* 
Number of Items (n),O(n) Steps,O(logn) Steps (Binary Search)
10,10,~3
"1,000","1,000",~10
"1,000,000","1,000,000",~20
"1,000,000,000","1,000,000,000",~30
*/

function binarySearch(arr, target){
    if(!Array.isArray || arr.length ===0) return undefined;

    let left = 0;
    let right = arr.length-1;
    
    while(left<=right){
        // find the middle index.
        let middle = Math.floor((left+right)/2);
        if(arr[middle] === target) {
            return true;
        }else if(arr[middle]< target){
            left = middle+1;
        }else{
            right = middle-1;
        }
    }
    return false; //target not found
}

console.log("Binary Search 7 ", binarySearch([1,2,3,6,7,8,10], 7));
// console.log("Binary Search 7 ", binarySearch([1,2,3,6,7,8,10], 11));


/* 
n an interview, if you are given a sorted array and asked to find something, 
and you reach for a for loop ($O(n)$), you are acting like a novice. 
If you reach for Binary Search ($O(\log n)$), you are acting like an expert.
*/

