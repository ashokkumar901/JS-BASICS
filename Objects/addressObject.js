//create an address object street,city and zipcode

const address = {
    street: 'Main veedhi',
    city: 'K.ch.palle',
    zipCode: 535557
}

const showAddress = (address) => {
    for (let key in address)
        console.log(key, address[key]);
}

showAddress(address);