// adding elements

// const numbers = [3,4];
// // end
// numbers.push(5, 6);
// // beginning
// numbers.unshift (1,2);
// // middle
// numbers.splice(2, 0, 'a', 'b');
// console.log(numbers);




// // finding elements (primitive)

// const numbers = [1, 2, 3, 1, 4];
// console.log(numbers.indexOf(1, 2)); // using fromIndex to start from another position
// console.log(numbers.lastIndexOf(1));
// console.log(numbers.indexOf(1) !==-1);
// console.log(numbers.includes(1));

// finding elements (ref)

// const courses = [
//     { id: 1, name: 'a' },
//     { id: 2, name: 'b' },
// ];
// const course = courses.find(function(course) { // findIndex also available
//     return course.name === 'a';
// })
// console.log(course);



// // arrow functions 

// const courses = [
//     { id: 1, name: 'a' },
//     { id: 2, name: 'b' },
// ];
// const course = courses.find(course => course.name === 'a');
// console.log(course);





// // removing elements

// const numbers = [1, 2, 3, 4];

// // // End
// // const last = numbers.pop(); // remove the last element

// // // Beginning
// const first = numbers.shift(); // remove the first element
// console.log(first);


// let test = numbers()

// // // Mid
// numbers.splice(); // remove an element somewhere in the middle
// console.log(numbers);


// empty array
// let numbers = [1, 2, 3, 4];
// let another = numbers;

// // Solution 1
// // numbers = []; // if numbers is not referenced it will be removed by the garbage collector


// // // Solution 2
// // numbers.length = 0;


// // Solution 3
// // numbers.splice(0, numbers.length);


// // Solution 4
// while (numbers.length > 0)
// numbers.pop();
// console.log(numbers);
// console.log(another);


// var myArray = [1, 2, 'three'];
// console.log(myArray.length);
// console.log(myArray);
// var firstItem = myArray.shift();
// console.log(firstItem);
// console.log(myArray.length);
// console.log(myArray);


// var testArray = ['apa', 'zebra', 'hund', 'katt', 'elefant']
// testArray.sort();
// console.log(testArray);

// var myArray = [1, 2, 10, 20, 100, 200];
// myArray.sort();
// console.log(myArray);

// function sortNumbers(a, b) {
//   return a - b;
// }
// console.log(myArray.sort());


// var steps = [ 'wash', 'rinse', 'repeat'];

// var stepsElements = steps.map(function(step) {
//   return '<li>' + step + '</li>';
// });

// console.log('<ul>\n\t' + stepsElements.join('\n\t') + '\n</ul>'); 

// var directionsLibrary = [
//     ['wash', 'rinse', 'repeat'],
//     ['be born', 'live', 'die'],
//               ['wake', 'work', 'sleep']
//   ];
  
  // function saveDirectionInDatabase(direction) {
  //   // save the direction in the database
  //   console.log('`saveDirectionInDatabase` called');
  // }
  
//   console.log(directionsLibrary.forEach(saveDirectionInDatabase));

// function sum(total, num) {
//     return total + num;
//   };
  
//   var numbers = [1, 22, 3, 4];
  
//   console.log(numbers.reduce(sum)); // => 10

// function isEven(num) {
//     return num % 2 === 0;
//   }
  
//   var myNumbers = [1, 2, 3, 4, 5, 6];
//  console.log(myNumbers.find(isEven)) // => 2
  
//   var myNumbers2 = [1, 3, 5, 7, 9, 10];
//   console.log(myNumbers2.find(isEven)) // => undefined


//   var countTo = 5;
// for (var i = 1; i <= countTo; i++) {
//   console.log(i);
// }

// for - present items in an array

// var myArray = ['name1', 'name2', 'name3'];
// for (let i = 0; i <= myArray.length; i++) {
//   console.log(myArray[i])
// }


// for
// for (let i = 0; i <5; i++) {
//   console.log('Test');
// }


// for (let i = 1; i <= 5; i++) { // 1-5
//   for (let i = 5; i >= 1; i--) { // reversed
//   if (i % 2 !== 0) console.log(i); 
// }


// while

// let i = 0;
// while (i <= 5) {
//   if (i % 2 !== 0) console.log(i);
//   i++;
// }

// do-while
// let i = 0;
// do {
//   if (i % 2 !== 0) console.log(i);
//   i++;
// } while (i <= 5);


// for-in
// const person = {
//   name: 'Carl',
//   age: 32
// };

// for (let key in person)
// console.log(key, person[key]);

// const colors = ['red', 'green', 'blue'];

// for (let index in colors)
// console.log(index, colors[index]);

// // for-of

// for (let color of colors)
// console.log(color);


// // break

// let i = 0;
// while (i <= 10) {
//   // if (i === 5) break;
//   if (i % 2 === 0) {
//     i++;
//     continue;
//   }
//   console.log(i);
//   i++;
// }


// function of max numbers

// let number = maxNumbers(10,2);
// console.log(number);

// function maxNumbers(a,b) {
// if (a > b) return a;
// else return b;
// }


function average(numbers); {

var total = numbers[0]; // start with the first value

for (var i=1; i < numbers.length; i++) { // compare with every number and divide with the length to get the average
  total+=numbers[i];
}

return total/numbers.length;
}









