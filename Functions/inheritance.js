//Class inheritance type1

class Baseclass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}


class ChildClass extends Baseclass {
    constructor(firstName, age, lastName) {
        super(firstName, age);
        this.lastName = lastName;
    }
}

const newClass = new ChildClass('Ashok', 22, 'kumar');

console.log(newClass.age);

//Prototype inheritance

function parentFunction(firstName, lastName) {
    this.firstName = firstName || 'unknown';
    this.lastName = lastName || 'unknown';
}

parentFunction.prototype.fullName = function() {
    return `${this.firstName} ${this.lastName}`;
}

function childFunction(firstName, lastName, age) {
    parentFunction.call(this, firstName, lastName);
    this.age = age || 0
}

childFunction.prototype = parentFunction.prototype;

const student1 = new childFunction('Ashok', 'kumar', 22);

console.log(childFunction.fullName());