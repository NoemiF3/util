function isOdd(number) {
  if (number % 2 == 1) {
    return `Odd`;
  } else {
    return `Even`;
  }
}

console.log(isOdd(4));
console.log(isOdd(5));
module.exports = { isOdd };
