// lets convert Linear Time O(n) complexity to Constant O(1)

// for sum of elements

/* 
Mathematicians (like the young Carl Friedrich Gauss) 
discovered a powerful formula for this calculation:
*/
function constantSum(numberOfElements) {
  return (numberOfElements * (numberOfElements + 1)) / 2;
}

console.log(constantSum(10));

// A great developer can turn a linear problem into a constant-time problem.
