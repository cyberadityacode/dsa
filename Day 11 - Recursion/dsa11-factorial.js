// calculate factorial using recursion

function factorial(num){
    debugger;
    if(num===1) return 1; // base case

    return num*factorial(num-1); // recursive step
}

console.log(factorial(4));