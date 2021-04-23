//Falsy values in js
//undefined,null,'',false,0,Nan

const countTruthy = (array) => {
    let count = 0;

    for (let value of array) {
        if (value) count++;
    }

    return count;
}

console.log(countTruthy([1, 2, 3, null, '', 5, 6, undefined]));