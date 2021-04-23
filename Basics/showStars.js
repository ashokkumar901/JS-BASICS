const showStars = (rows) => {
    let stoD = '';

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j <= i; j++) {
            stoD += '*';
        }
        console.log(stoD);
        stoD = '';
    }
}

showStars(10);