// // Write the code, one line for each action:

// // Create an empty object user.
// // Add the property name with the value John.
// // Add the property surname with the value Smith.
// // Change the value of the name to Pete.
// // Remove the property name from the object.

// let user = {
//     name: "John",
//     surname: "Smith"
// };
// user.name = "Pete";
// delete user.name;

// // ~~~~~~~~~~~~~~~~~~

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }

// // Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.
// for (let key in salaries) {
//     sum += salaries[key];
// }
// // If salaries is empty, then the result must be 0.

// // ~~~~~~~~~~~~~~~~~~~

// // Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };

// function multiplyNumeric(menu) {
//     for (let key in menu) {
//         if (typeof menu[key] == 'number') {
//             2 * menu[key];
//         }
//     }
// }
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~



// sumOfTripledEvens(array)
//Take in an array.
// For every even number, it will triple it.
// Then it will sum all those even numbers.

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
function sumOfTripledEvens(array) {
    // multiply all even numbers in the array by 3
    //filter method
    function getEvenNumbers(num) {
        return num % 2 === 0;
    }
    const evenNums = arr.filter(getEvenNumbers);

    function triple(num) {
        return num * 3;
    }
    //map method

    const tripledEvens = evenNums.map(triple);

    //reduce method
    const sumOfAllTripledEvens = tripledEvens.reduce((total, currentItem) => {
        return total + currentItem;
    }, 0);
    sumOfAllTripledEvens;

};
console.log(sumOfTripledEvens(arr));
