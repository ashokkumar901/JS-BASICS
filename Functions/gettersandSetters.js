const person = {
    firstName: 'Ashok',
    lastName: 'kumar',
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    },

    set fullName(value) {
        const valueArray = value.split(" ");
        this.firstName = valueArray[0];
        this.lastName = valueArray[1];
    }
};

person.fullName = 'Mohan kumar';

console.log(person);
console.log(person.fullName);