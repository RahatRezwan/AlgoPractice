// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// solution-2
function reverseInt(n) {
  let reversedNumber = 0;
  while (n !== 0) {
    const lastNumber = n % 10;
    reversedNumber = reversedNumber * 10 + lastNumber;
    n = (n - lastNumber) / 10;
  }
  return reversedNumber;
}

module.exports = reverseInt;

// solution-1
// function reverseInt(n) {
//   const reversed = n
//     .toString()
//     .split('')
//     .reverse()
//     .join('');

//   return parseInt(reversed) * Math.sign(n);
// }
