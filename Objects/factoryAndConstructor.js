// const address = {
//     street: 'Main veedhi',
//     city: 'K.ch.palle',
//     zipCode: 535557
// }

//factory function
function address(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    }
}

//constructor function
function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

const address1 = address('Main Veedhi', 'K.ch.Palle', 535557);
const address2 = new Address('main', 'city', 666667)
console.log(address1);
console.log(address2);