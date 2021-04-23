const arr = [1, 2, 5, 6, -4, -5, -7, 9];

const items = arr
    .filter(n => n >= 0)
    .map(e => ({ value: e }))
    .filter(n => n.value > 2)
    .map(e => e.value);

console.log(items);
