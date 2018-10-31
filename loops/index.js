// for loop

// for (let i = 0; i < 5; i++) {
//     console.log('Test');
// }


// // for (let i = 1; i <= 5; i++) {
// for (let i = 5; i >= 1; i--) {

//     // console.log('Test', i)
//     if (i % 2 !== 0) console.log(i)
// }



// while loop (display odd numbers)

// let i = 0;
// while (i <= 5) {
//     if (i % 2 !== 0) console.log(i);
//     i++;
// }


// do-while

// let i = 0;
// do {
//     if (i % 2 !== 0) console.log(i);
//     i++;
// } while (i <= 5);

// for-in
// const person = {
//     name: 'Carl',
//     age: 32
// };

// for (let key in person)
// console.log(key, person[key]);

// const colors = ['red', 'green', 'blue']
// // for (let index in colors)
// // console.log(index, colors[index]);

// // for-of

// for (let color of colors)
// console.log(color);

// break-continue
// let i = 0;
// while (i <= 10) {
//     if (i === 5) break;
//     // if (i % 2 === 0) {
//     //     i++;
//     //     continue;
//     // }


// console.log(i);
// i++;
// }

// let number = max(5,4)
// console.log(number);

// function max(num1, num2) {
//     // if (num1 > num2) return num1;
//     // return num2;

//     return (num1 > num2) ? num1 : num2;
// }

console.log(isLandscape(300,600));
function isLandscape(width, height) {
    return (width > height);
}