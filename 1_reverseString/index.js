// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split("").reduce((rev, char) => char + rev, "");
}

module.exports = reverse;

//Solution-1
// function reverse(str) {
//   return str
//     .split('')
//     .reverse()
//     .join('');
// }

//solution-2
// function reverse(str) {
//    let newStr = "";
//    for (let i = str.length - 1; i >= 0; i--) {
//      newStr += str[i];
//    }
//    return newStr;
//  }

// solution-3
// function reverse(str) {
//    let reversedStr = "";

//    for (let character of str) {
//      reversedStr = character + reversedStr;
//    }
//    return reversedStr;
//  }
