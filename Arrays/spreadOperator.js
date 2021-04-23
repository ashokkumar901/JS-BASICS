const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];

const combined = ['a', ...arr1, ...arr2, 'c'];

//Copying an array using spread
const copy = [...combined];

console.log(copy);