// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let charCount = {};
  let char = "";
  let max = 0;

  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  for (const [key, value] of Object.entries(charCount)) {
    if (value > max) {
      max = value;
      char = key;
    }
  }
  return char;
}

console.log(maxChar("abcccccccd"));
module.exports = maxChar;
