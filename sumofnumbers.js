let sumFor;
// eslint-disable-next-line prefer-const
sumFor = numbers => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
};

let sumWhile;
// eslint-disable-next-line prefer-const
sumWhile = numbers => {
  let sum = 0;
  let i = 0;
  while (i < numbers.length) {
    sum += numbers[i];
    i++;
  }
  return sum;
};

let sumRecursion;
// eslint-disable-next-line prefer-const
sumRecursion = (numbers, index = 0) => {
  if (index === numbers.length) {
    return 0;
  }
  return numbers[index] + sumRecursion(numbers, index + 1);
};

let sumTheSimpleWay;
// eslint-disable-next-line prefer-const
sumTheSimpleWay = numbers => _.reduce(numbers, (sum, num) => sum + num, 0);

let numbers;
// eslint-disable-next-line prefer-const
numbers = [1, 2, 3, 4, 5];

console.log('Sum using for-loop:', sumFor(numbers));
console.log('Sum using while-loop:', sumWhile(numbers));
console.log('Sum using recursion:', sumRecursion(numbers));
console.log('Sum using underscore:', sumTheSimpleWay(numbers));
