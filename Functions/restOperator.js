function sum(...args/*rest operator*/) {
    return args.reduce((a, b) => a + b);
}

console.log(sum(1, 3, 4));

function discount(disc, ...prices) {
    const total = prices.reduce((a, b) => a + b);
    return total * (1 - disc);
}

console.log(discount(0.5, 20, 30));