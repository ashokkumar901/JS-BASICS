const marks = [80, 80, 80];

//Average = 70

//1-59 : F
//60-69 : D
//70-79 : C
//80-89: B
//90-100: A

const calculateGrade = (marks) => {
    const avg = calculateAvg(marks);

    if (avg < 60) return 'F';
    if (avg < 70) return 'D';
    if (avg < 80) return 'C';
    if (avg < 90) return 'B';
    return 'A';
}

const calculateAvg = (array) => {
    let avg = 0;
    let sum = 0;
    const aLength = array.length;

    for (let value of array) {
        sum += value;
    }

    avg = Math.ceil(sum / aLength);

    return avg;
}

console.log(calculateGrade(marks));

