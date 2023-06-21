// Write a program to remove all negative numbers from an array:

let num = [1, -2, 3, -1, 2, -3,];

for (let i = 0; i < num.length; i++) {
  if (num[i] < 0) {
    num.splice(i, 1);
    i--; 
  }
}
console.log(num);


let numbers = [1, -2, 3, -1, 2, -3,];

let result = numbers.filter(numbers => {
    return numbers > 0;
});
console.log(result);

// remove duplicate elements from an array:

var arr = [1, 2, 2, 3, 1 ];
var newarr = [];
for (var i = 0; i < arr.length; i++) {
  if (newarr.indexOf(arr[i]) === -1) {
    newarr.push(arr[i]);
  }
}
console.log(newarr);

// split an array into two separate arrays, one with even numbers and the other with add numbers:

var number = [1, 2, 3, 4, 5, 6];
var  even = [];
var odd = [];

for (var i = 0; i < number.length; i++) {
  if (number[i] % 2 === 0) {
    even.push(number[i]);
  } else {
    odd.push(number[i]);
  }
}
console.log( even);
console.log(odd);