/* Spread & Rest Operator */
// Rest Operator
let display = function(title, ...colors) {
  for(let i in colors) {
    console.log(colors[i]);
  }
}

let title = 'List of colors:';
let colorArray = ['Red', 'Blue', 'White'];
display(title, ...colorArray); //Spred Operator
// dispaly(title, 'Yellow', 'Grey', 'Pink');


/* 数组去重 */
// ES6 Implementation
var array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];

Array.from(new Set(array)); // [1, 2, 3, 5, 9, 8]

// ES5 Implementation
var array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];

uniqueArray(array); // [1, 2, 3, 5, 9, 8]

function uniqueArray(array) {
  var hashmap = {};
  var unique = [];

  for(var i = 0; i < array.length; i++) {
    // If key returns undefined (unique), it is evaluated as false.
    if(!hashmap.hasOwnProperty(array[i])) {
      hashmap[array[i]] = 1;
      unique.push(array[i]);
    }
  }

  return unique;
}