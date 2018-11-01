// max and min (without sort)
// To complete this drill, you need to implement two functions, max and min. Both functions should take a single argument: 
// a list of numbers called numbers. max(numbers) should return the largest number in the list, while min(numbers) should return the smallest.

// Assume that the numbers input only contains numbers (that is, you don't have to inspect your inputs to confirm they only contain numbers).

// If the numbers array is empty, then both max and min should return null or undefined, whichever is more convenient.

// Finally, note that you are not allowed to use JavaScript's sort method which provides a simple-but-inefficient way to solve this problem 
// (simply sort the list and return either the first or last element, depending on if you need min or max). 
// Also, for obvious reasons, you are not allowed to use Math.max or Math.min.


// noprotect
// ^^ `noprotect` is here to prevent a bug with jsbin and for loops.



function max(numbers) {
// get all the items in the array, start from 0
var storedNumber = numbers[0];

// compare them with each other in a for loop, 
for (var i=0; i <= numbers.length; i++) {
    if (numbers[i] > storedNumber) {
        storedNumber = numbers[i];
        }
}

return storedNumber
}


// function max(numbers) {
//     console.log('the numbers', numbers);
//       var currentMax = numbers[0];
//       for (var i=0; i <= numbers.length; i++) {
//               console.log(currentMax)
//         if (numbers[i] > currentMax) {
//           currentMax = numbers[i];
    
//         }
//       }
//       return currentMax
//     }
    



// store the highest value

   function min(numbers) {
       var storedMinNumber = numbers[0];
       for (var i=0; i <= numbers.length; i++) {
           if (numbers[i] < storedMinNumber) {
               storedMinNumber = numbers[i];
           }
       }
       return storedMinNumber

    }
   
   
   
   /* From here down, you are not expected to 
      understand.... for now :)  
      
      
      Nothing to see here!
      
   */
   
   
   // tests
   
   function testFunctionWorks(fn, input, expected) {
     if (fn(input) === expected) {
       console.log('SUCCESS: `' + fn.name + '` works on `[' + input + ']`');
       return true;
     }
     else {
       console.log(
         'FAILURE: `' + fn.name + '([' + input + '])` should be ' + expected +
         ' but was ' + fn(input)
       );
       return false;
     }
   }
   
   
   (function runTests() {
     // we'll use the variables in our test cases
     var numList1 = [-5, 28, 98, -20013, 0.7878, 22, 115];
     var realMin1 = numList1[3];
     var realMax1 = numList1[6];
     var numList2 = [0, 1, 2, 3, 4];
     var realMin2 = numList2[0];
     var realMax2 = numList2[4];
     
     var testResults = [
       testFunctionWorks(max, numList1, realMax1),
       testFunctionWorks(max, numList2, realMax2),
       testFunctionWorks(min, numList1, realMin1),
       testFunctionWorks(min, numList2, realMin2),
     ];
     
     var numPassing = testResults.filter(function(result){ return result; }).length;
     console.log(numPassing + ' out of ' + testResults.length + ' tests passing.');
   })();