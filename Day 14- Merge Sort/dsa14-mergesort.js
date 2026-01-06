/* When we merge, we aren't "sorting" in the traditional sense. We are simply comparing the smallest available items from two piles that are already sorted.

The "Two Pile" Visualization
Imagine you have two piles of sorted numbered cards on a table. Your goal is to combine them into one single sorted row.

Pile A: [1, 10]

Pile B: [2, 5, 8]

Result Row: []

Step-by-Step Walkthrough:
Step 1: Compare the "tops" of both piles.

Is 1 (from A) or 2 (from B) smaller?

1 is smaller. Move 1 to the Result Row.

Result: [1] | Remaining: A: [10], B: [2, 5, 8]

Step 2: Compare the new "tops."

Is 10 (from A) or 2 (from B) smaller?

2 is smaller. Move 2 to the Result Row.

Result: [1, 2] | Remaining: A: [10], B: [5, 8]

Step 3: Compare again.

Is 10 (from A) or 5 (from B) smaller?

5 is smaller. Move 5.

Result: [1, 2, 5] | Remaining: A: [10], B: [8]

Step 4: Compare again.

Is 10 (from A) or 8 (from B) smaller?

8 is smaller. Move 8.

Result: [1, 2, 5, 8] | Remaining: A: [10], B: [] (Empty!)

Step 5: Cleanup.

Pile B is empty. We just take whatever is left in Pile A (10) and dump it at the end.

Final Result: [1, 2, 5, 8, 10] */

/* 
Why is this $O(n)$?Because we only look at each card exactly once. We don't have to go back and re-check anything. We just keep moving forward through the piles.The JavaScript Helper CodeHere is how that look in code. Notice we use two "pointers" (i and j) to keep track of where we are in each array.
*/

function merge(arr1,arr2){
    let results = [];

    let i=0; //pointer for arr1
    let j=0; //pointer for arr2

    // While there are still elements in BOTH arrays
    while(i<arr1.length && j<arr2.length){
        if(arr2[j] > arr1[i]){
            results.push(arr1[i]);
            i++;
        }else{
            results.push(arr2[j]);
            j++;
        }
    }

    // if one array finishes first, push the remaining items from the other
    while(i<arr1.length){
        results.push(arr1[i]);
        i++;
    }

    while(j<arr2.length){
        results.push(arr2[j]);
        j++;
    }

    return results;
}

/* 
Now, remember: Merge Sort uses Recursion to keep splitting a big messy array into tiny 1-item arrays. Then, it uses this merge function to sew them back together perfectly.

[4, 2, 7, 1] gets split into [4, 2] and [7, 1].

Those get split into [4], [2], [7], [1].

The computer merges [4] and [2] into [2, 4].

The computer merges [7] and [1] into [1, 7].

Finally, it merges [2, 4] and [1, 7] into [1, 2, 4, 7].
*/

/* 
The Final Piece: The Recursive Merge Sort
Now we combine the merge helper function with Recursion to create the full algorithm. This is a "Divide and Conquer" approach.
*/


function mergeSort(arr){
    // 1. Base Case: If the array has 0 or 1 elements. its already sorted
    if(arr.length<=1) return arr;

    // 2. Split the array into 2 halves
    let mid = Math.floor(arr.length/2);
    let left= mergeSort(arr.slice(0,mid)); // recursive call for left half
    let right = mergeSort(arr.slice(mid)); // recursive call for right half

    // 3. Merge the two sorted halves together.
    return merge(left,right);
}


/* 
Bubble Sort ($O(n^2)$): Every element is compared to every other element. As the list grows, the work grows exponentially.Merge Sort ($O(n \log n)$): You only split the list a few times ($\log n$), and merging is very efficient ($n$).
*/

console.log(mergeSort([24,1,2,232,4,8]));