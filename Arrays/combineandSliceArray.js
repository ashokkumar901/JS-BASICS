const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];

const combined = arr1.concat(arr2);
const sliced = combined.slice(2, 5);

// console.log(sliced);
const arr3 = [{ id: 10 }];
arr3[0].id = 13;
const combined2 = arr1.concat(arr3);

console.log(combined2);
