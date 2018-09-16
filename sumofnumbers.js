const test = [1, 2, 3];

function sumFor(num) {
  let total = 0;
  for (let i = 0; i < num.length; i++) {
    total += num[i];
  }
  return total;
}
console.log(sumFor(test));

function sumWhile(num) {
  let total = 0;
  let i = 0;
  while (i < num.length) {
    total += num[i];
    i++;
  }
  return total;
}
console.log(sumWhile(test));

function sumRecursion(num) {
  if (num.length === 0) {
    return 0;
  }
  const first = num.shift();
  return first + sumRecursion(num);
}
console.log(sumRecursion(test));

function sumTheSimpleWay(nums) {
  return _.reduce(nums, function (memo, num) { return memo + num; }, 0);
}
console.log(sumTheSimpleWay(test));
