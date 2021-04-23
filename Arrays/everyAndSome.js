const arr = [1, 2, 3, 5];
const arr2 = [-1, 4, 5, 6, 7];

const allPositive = arr.some(element => element < 0);
const atleastPositive = arr.some(element => element >= 0);

console.log(allPositive);
console.log(atleastPositive);