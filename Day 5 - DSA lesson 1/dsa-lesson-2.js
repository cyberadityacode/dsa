// Quadratic Time (O n square)

// Find pairs

function findPairs(arr) {
  let pairs = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        pairs.push(arr[i], arr[j]);
      }
    }
  }
  return pairs;
}

const arr = [1, 2, 3, 3, 4];
const arr2 = [1, 3, 5, 4, 4];

console.log(findPairs(arr));
console.log(findPairs(arr2));

// Optimized Version (Best Practice – O(n))

function findPairsOptimized(arr) {
  const seen = new Set();
  const pairs = [];

  for (let num of arr) {
    if (seen.has(num)) {
      pairs.push([num, num]);
    } else {
      seen.add(num);
    }
  }
  return pairs;
}

console.log(findPairs([1, 2, 3, 3, 4]));
