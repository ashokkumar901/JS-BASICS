const arr = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' }
];

const course = arr.findIndex(element => {
    return element.name === 'a';
});
;
console.log(course);