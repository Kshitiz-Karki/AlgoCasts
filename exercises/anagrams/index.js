// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  // const frequencyCounterA = {};
  // const frequencyCounterB = {};
  // for (const char of stringA) {
  //   if (char !== " ")
  //     frequencyCounterA[char] = (frequencyCounterA[char] || 0) + 1;
  // }
  // for (const char of stringB) {
  //   if (char !== " ")
  //     frequencyCounterB[char] = (frequencyCounterB[char] || 0) + 1;
  // }
  // for (const key in frequencyCounterA) {
  //   if (frequencyCounterA[key] !== frequencyCounterB[key]) return false;
  // }
  // if (
  //   Object.keys(frequencyCounterA).length !==
  //   Object.keys(frequencyCounterB).length
  // )
  //   return false;
  // return true;

  const cleanString = (str) =>
    str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");

  return cleanString(stringA) === cleanString(stringB);
}

console.log(anagrams("rail safety", "fairy tales"));
module.exports = anagrams;
