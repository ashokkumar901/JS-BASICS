const countOccurences = (array, searchElement) => {
    let count = 0;
    for (let element of array)
        if (element === searchElement)
            count++;
    return count;
}

const numbers = [1, 1, 3, 5, 6, 4, 1, 1, 1];
const count = countOccurences(numbers, 3);

// console.log(count);

//countOccurrences using reduce
const countOccurences2 = (array, searchElement) => {
    return array.reduce((a, b) => {
        let occurrences = 0;
        occurrences = (b === searchElement) ? 1 : 0;
        a = a + occurrences;
        return a;
    }, 0);
}

const count1 = countOccurences2(numbers, 1);
console.log(count1);