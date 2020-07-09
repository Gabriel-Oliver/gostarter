"use strict";

var arr = [1, 2, 3, 4, 5, 6];
var newArr = arr.map(function (iten, index) {
  return iten + index;
});
console.log(newArr);
var sum = arr.reduce(function (total, next) {
  return total + next;
});
console.log(sum);
var filter = arr.filter(function (iten) {
  return iten % 2 === 0;
});
console.log(filter);
var find = arr.find(function (iten) {
  return iten === 4;
});
console.log(find);
