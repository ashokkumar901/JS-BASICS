function isPrime(num) {
    for (let j = 2; j < num; j++)
        if (num % j === 0)
            return false;
    return true
}

const showPrimes = (limit) => {
    for (let i = 2; i < limit; i++) {
        let primeOrNot = isPrime(i);

        if (primeOrNot) console.log(i);
    }
}



showPrimes(20);