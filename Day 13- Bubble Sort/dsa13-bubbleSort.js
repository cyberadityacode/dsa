let sampleArray = [3,14,2,4,11];

// try to sort using bubble sort
console.time();
function bubbleSort(sampleArray){
    for(let i=sampleArray.length;i>0;i--){
        for(let j=0;j<i-1;j++){
            if(sampleArray[j] > sampleArray[j+1]){
                // swap
                [sampleArray[j], sampleArray[j+1]] = [sampleArray[j+1],sampleArray[j]];
            }
        }
    }
    return sampleArray;
}
console.timeEnd();

console.log(bubbleSort(sampleArray));

// this will continue to loop even after sorting successfully until condition for 'i' is satisfied.
console.time();
function bubbleSortOptimized(sampleArray){
    let swapped;
    for(let i=sampleArray.length;i>0;i--){
        swapped = false;

        for(let j=0;j<i-1;j++){
            if(sampleArray[j]>sampleArray[j+1]){
                [sampleArray[j], sampleArray[j+1]] = [sampleArray[j+1],sampleArray[j]];
                swapped= true;
            }
        }
        if(!swapped) break;
    }
    return sampleArray;
}
console.timeEnd();
console.log(bubbleSortOptimized(sampleArray));

console.log("hello");
