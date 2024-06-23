// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// solution - 1 (BEST Solution)
function palindrome(str) {
  const reverseStr = str.split("").reduce((rev, char) => char + rev, "");
  return reverseStr === str;
}

module.exports = palindrome;

// solution-2 (Not the BEST Solution)
// function palindrome(str) {
//    return str.split("").every((char, i) => {
//      return char === str[str.length - i - 1];
//    });
//  }
