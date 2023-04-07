// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  //using recursion:
  // if (str.length === 2) return str[0] === str[1]
  // if (str.length === 1) return true
  // if (str[0] === str.slice(-1)) return palindrome(str.slice(1, -1))
  // return false
  //###########################################################################
  //using while loop
  let left = 0
  let right = str.length - 1
  while (left < right) {
    if (str[left] === str[right]) {
      left++
      right--
    } else return false
  }
  return true
  //###########################################################################
  //using reverse()
  // let reversed = str.split('').reduce((rev, char) => char + rev, '')
  // return reversed === str
  //###########################################################################
  // using for loop:
  // const middle = Math.floor(str.length / 2)
  // for (const [idx, char] of str.split('').entries()) {
  //   if (char !== str[str.length - 1 - idx]) return false
  //   if (idx === middle) break
  // }
  // return true
}

// console.log(palindrome('aba'))
module.exports = palindrome
