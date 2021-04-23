//Function decleration
walk();
function walk() {
    console.log('walk')
}

//Function expression
let run = () => {
    console.log('run');
}

run();//This line cant be put above the run method since it returns an error