const arr = [
    { id: 1, name: 'Node.js' },
    { id: 2, name: 'javascript' }
];

arr.sort((a, b) => {
    const objA = a.name.toUpperCase();
    const objB = b.name.toUpperCase();

    if (objA < objB) return -1;
    if (objA > objB) return 1;
    return 0;
});

console.log(arr);