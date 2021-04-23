//Speed limit =70
//5 -> 1 point
//12 points suspended

const speedLimit = 74;

const checkSpeed = (speed) => {
    let points = 0;
    const kmPointer = 5

    if (speed <= 74)
        return 'ok';

    points = Math.floor((speed - 70) / kmPointer);

    if (points >= 12)
        return 'License suspended';

    return points;
}

console.log(checkSpeed(180));
