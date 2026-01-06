function bubbleSortRevision(arr){
    if(!Array.isArray(arr)) return undefined;

    let noswap;
    for(let i=arr.length;i>0;i--){
        noswap= true; //assume that no sorting is needed

        for(let j=0;j<i-1;j++){
            if(arr[j]>arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1],arr[j]];
                noswap=false; //we made a swap,so we aren't done yet
            }
        }
        if(noswap) break;
    }
    return arr;
}

console.log(bubbleSortRevision([7,2,4,1]));