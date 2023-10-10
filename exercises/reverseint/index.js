// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  // const num = Math.abs(n);
  // const reverse =  Number(num.toString().split("").reverse().join(""));
  // return n < 0 ? reverse * -1 : reverse;
  return parseInt(n.toString().split("").reverse().join("")) * Math.sign(n);
}

// console.log(reverseInt(-981));

module.exports = reverseInt;
