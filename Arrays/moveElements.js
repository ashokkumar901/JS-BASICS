const move = (array, index, offset) => {
    const output = [...array];
    const position = index + offset;
    if (position >= array.length || position < 0) {
        console.error('Invalid offset');
        return;
    }

    const element = output.splice(index, 1)[0];
    output.splice(position, 0, element);
    return output;
}

const numbers = [1, 2, 3, 4];
console.log(move(numbers, 2, -2));