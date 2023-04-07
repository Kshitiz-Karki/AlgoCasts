// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  //using recursion:
  // if (str.length === 1) return str[0]
  // return str.slice(-1).concat(reverse(str.slice(0, -1)))
  // ########################################################################
  //using for loop:
  // let reversed = ''
  // for (const char of str) {
  //   reversed = char + reversed
  // }
  // return reversed
  // ########################################################################
  //using inbuilt js methods
  // return str.split('').reverse().join('')
  // ########################################################################
  // using reduce
  return str.split('').reduce((reversed, char) => char + reversed, '')
}

// console.log(reverse('hello'))

module.exports = reverse
