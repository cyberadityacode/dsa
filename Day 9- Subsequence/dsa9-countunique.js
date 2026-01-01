function countUniqueValues(arr){
    if(!Array.isArray(arr) || arr.length ==0) return false;
    // debugger;
    let i=0; //slow pointer

    for(let j=1;j<arr.length;j++){ //the fast pointer
        if(arr[i] !== arr[j]){
            // we found a unique value!
            i++; //move the unique value
            arr[i] = arr[j]; //update the spot
        }
    }
    return i+1;
}

console.log(countUniqueValues([1,1,2,3,5,2,1].sort()));

console.log([1,1,2,3,5,2,1].sort());
// [1,1,1,2,2,3,5]

