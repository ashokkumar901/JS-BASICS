//Camel Notation oneTwoThreeFour
//Pascal Notation OneTwoThreeFour

function Circle(radius) {
    this.radius = radius;
    this.draw = () => {
        console.log('draw');
    }
}

const circle1 = new Circle(1);

console.log(circle1.draw());