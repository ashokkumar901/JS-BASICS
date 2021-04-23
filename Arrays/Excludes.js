const numbers = [1, 2, 3, 4, 1, 1];

const except = (array, excluded) => {
    const filteredArray = [];

    for (let element of array)
        if (!(excluded.includes(element)))
            filteredArray.push(element);

    return filteredArray;
}

console.log(except(numbers, [1, 2]));