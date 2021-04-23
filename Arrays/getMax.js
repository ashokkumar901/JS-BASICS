let getMax = (array) => {
    if (array.length === 0) return undefined;
    let max = 0;
    for (let element of array)
        if (element > max) max = element;

    return max;
}

console.log(getMax([1, 2, 3, 4]));

//using reduce method
let getMax1 = (array) => {
    if (array.length === 0) return undefined;
    return array.reduce((a, b) => a > b ? a : b);
}
console.log(getMax1([1, 2, 3, 4, 60]));