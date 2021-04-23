//countOccurrences using reduce
const countOccurences = (array, searchElement) => {
    if (!(Array.isArray(array)))
        throw new Error('Please enter an array');
    return array.reduce((a, b) => {
        let occurrences = 0;
        occurrences = (b === searchElement) ? 1 : 0;
        a = a + occurrences;
        return a;
    }, 0);
}

const numbers = [1,1,2,3,4,1,1,1]
try {
    const count1 = countOccurences(null, 1);
    console.log(count1);
} catch (e) {
    console.log('error', e);
}