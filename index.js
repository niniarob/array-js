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

let nums = [1,2,3,-1,-2,-3];
let num = [];

for (let i = 0; i < nums.length ; i++){
    if ( nums[i] > 0 ){
        num.push(nums[i]) 
    }
}
console.log(num)

// remove duplicate elements from an array:

let arr = [1, 2, 2, 3, 1 ];
let newarr = [];
for (let i = 0; i < arr.length; i++) {
  if (newarr.indexOf(arr[i]) === -1) {
    newarr.push(arr[i]);
  }
}
console.log(newarr);

// split an array into two separate arrays, one with even numbers and the other with add numbers:

let number = [1, 2, 3, 4, 5, 6];
let  even = [];
let odd = [];

for (let i = 0; i < number.length; i++) {
  if (number[i] % 2 === 0) {
    even.push(number[i]);
  } else {
    odd.push(number[i]);
  }
}
console.log( even);
console.log(odd);
