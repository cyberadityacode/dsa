let sampleArray = [3,14,2,4,11];

// try to sort using bubble sort
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

console.log(bubbleSort(sampleArray));