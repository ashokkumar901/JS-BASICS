const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
}

//cloning using Object.assign
const another1 = Object.assign({}, circle);

//cloning using spread operator
const another2 = { ...circle };

console.log(another2);