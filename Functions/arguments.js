function sum() {
    let count = 0
    for (let element of arguments) {
        count += element;
    }

    return count;
}

console.log(sum(1, 2, 3, 4, 6, 5));

