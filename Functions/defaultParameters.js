function interest(principal, rate = 3.5/*(default parameter)*/, years = 5) {
    return principal * rate / 100 * years;
}

console.log(interest(10000))