function testString(str) {
  if (typeof str !== "string" || str.length === 0) return false;

  return true;
}
console.log("Testing empty string 1 ", testString(""));
console.log("Testing string 2", testString("aditya"));
console.log("Testing Number 3 ", testString(7));

function testFrequncyCounter(str) {
  if (!testString(str)) return false;
  debugger;
  const freq = {};

  /*   for (let i = 0; i < str.length; i++) {
    const char = str[i];
    freq[char] = (freq[char] || 0) + 1;
  } */

  for (const char of str) {
    //cleaner ES6
    freq[char] = (freq[char] || 0) + 1;
  }
  return freq;
}

console.log("Function Passing string ", testFrequncyCounter("aditya"));
console.log("Function Passing number ", testFrequncyCounter(7));

function frequencyCounterReduce(str) {
  return [...str].reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});
}
console.log("Testing Reduce ", frequencyCounterReduce("aditya"));
