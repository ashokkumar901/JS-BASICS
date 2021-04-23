// // //This is my first javascript code
// // //    console.log('Hello worldtest');
// // //Variables
// // // let name='Ashok';
// // // console.log(name);

// // //Objects

// // let person = {
// //     name: 'ashok',
// //     age: 23
// // };

// // //dotted notation
// // person.name = 'changedname';

// // //bracket notation
// // let age = 'age';
// // person[age] = 25;
// // console.log(person);

// //Arrays

// // let selectedColors = ['red', 'blue'];
// // selectedColors[2] = 1;
// // console.log(selectedColors.length,typeof selectedColors);

// //Functions
// // //Peforming a task
// // function greet(name, lastname/*parameters*/) {
// //     console.log(`Hello ${name} ${lastname}`);
// // }

// // greet('ashok', 'kumar'/*arguments*/);

// //Calculating a value
// // function square(num) {
// //     return num * num;
// // }

// // console.log(square(11));

// //Equality operators
// //Strict equality(compares type and value)
// // console.log(1 === 1); //true
// // console.log('1' === 1); //false

// // //Loose equality(compares only value)
// // console.log(1 == 1); //true
// // console.log('1' == 1); //true
// // console.log(true == 1); //true

// //Falsy values in js(false) 
// //undefined
// //null
// //0
// //false
// //''
// //Nan

// // //Anything that is not falsy is truthy

// // //Example

// // // let userColor;
// // // let defaultColor = 'blue';

// // // console.log(userColor || defaultColor);

// // //swap the variables

// // let a = 'red';
// // let b = 'blue';

// // let temp = a;
// // a = b;
// // b = temp;

// // console.log(a);
// // console.log(b);

// //If the hour is between 6am and 12pm ; the message is good morning
// //If it is between 12pm and 6pm ; Good afternoon
// //Otherwise Good evening

// // let hour = 12;

// // if (hour >= 6 && hour < 12) {
// //     console.log('Good morning');
// // } else if (hour >= 12 && hour < 18) {
// //     console.log('Good noon');
// // } else {
// //     console.log('Good evening');
// // }

// //Switch statement
// // let user='moderator';

// // switch (user) {
// //     case 'guest':
// //         console.log('Guest User');
// //         break;
// //     case 'moderator':
// //         console.log('Moderator User');
// //         break;
// //     default:
// //         console.log('Unknown user');
// // }

// //for-in
// const person = {
//     name: 'Ashok',
//     age: 23
// };

// for (let key in person)
//     console.log(key, person[key])

// let colors = ['red', 'blue', 'yellow'];

// for (let color of colors)
//     console.log(color);

// let i = 0;
// while (i <= 10) {
//     if (i === 5) break;
//     console.log(i);
//     i++;
// }

// let max = (a, b) => {
//     return a > b ? a : b;
// }

// console.log(max(60, 7));

// let isLandScape = (width, height) => {
//     return (width > height) ? ('landScape') : ('Portrait');
// }

// console.log(isLandScape(200, 100));