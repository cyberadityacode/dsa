// We create an object to count how many times each letter appears in the first string, then compare it against the second.

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const lookup = {};

  //   Building frequency counter
  for (let char of str1) {
    lookup[char] = (lookup[char] || 0) + 1;
  }

  //   compare with the second string str2
  for (let char of str2) {
    if (!lookup[char]) {
      return false; //not an anagram if letter doesnt exist or is 0
    } else {
      lookup[char] -= 1;
    }
  }

  return true;
}

console.log(isAnagram("iceman", "cinema"));
console.log(isAnagram("olas", "laos"));
