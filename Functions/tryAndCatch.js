const person = {
    firstName: 'Ashok',
    lastName: 'kumar',
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    },

    set fullName(value) {
        if (typeof value !== 'string')
            throw new Error('Please enter a string');
        const valueArray = value.split(" ");
        if (valueArray.length !== 2)
            throw new Error('Please enter first name and lastname');
        this.firstName = valueArray[0];
        this.lastName = valueArray[1];
    }
};

try {
    person.fullName = '';
} catch (e) {
    console.log('error', e);
}

console.log(person);
console.log(person.fullName);