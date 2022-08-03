/*
  Inspired by this blogpost (https://blog.tdwright.co.uk/2022/07/14/fizzbuzz-is-fizzbuzz-years-old-and-still-a-powerful-tool/)
  about the history of FizzBuzz and some interesting takes on it, here's a modular solution:
*/

/* 
  arr: Array<T>
  replacements: Array<{|
    validator: (T) => boolean,
    replacement: R, (really this could be anything)
  |}>
  callback: (R) => void
  
  Note that the replacements array is in order of priority — if a value satisfies multiple validators, it will use the
  replacement earliest in the list (closest to the 0th index)
*/

function fizzBuzzReplacer(arr, replacements, callback) {
  return arr.forEach((item) => {
    const output = replacements.reduceRight(
      (acc, { validator, replacement }) =>
        validator(item) ? replacement : acc,
      item
    );
    callback(output);
  });
}

const rangeTo100 = [...new Array(100)].map((_, i) => i + 1);
const fizzBuzz = [
  {
    validator: (val) => val % 5 === 0 && val % 3 === 0,
    replacement: "FizzBuzz"
  },
  {
    validator: (val) => val % 5 === 0,
    replacement: "Buzz"
  },
  {
    validator: (val) => val % 3 === 0,
    replacement: "Fizz"
  }
];
const logger = (val) => console.log(val);

fizzBuzzReplacer(rangeTo100, fizzBuzz, logger); // outputs what you'd expect
