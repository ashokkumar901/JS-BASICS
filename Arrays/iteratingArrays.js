const arr = [1, 2, 3, 4];

for (let element of arr)
    console.log(element);

arr.forEach((element, index) => console.log(index, element))