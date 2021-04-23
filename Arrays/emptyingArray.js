let arr = [1, 2, 3, 4];
let another = arr;

// arr = [];
// arr.length = 0;
// arr.splice(0, arr.length);
while (arr.length > 0)
    arr.pop();

console.log(arr, another);