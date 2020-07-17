"use strict";

var arr = [1, 2, 3, 4, 5, 6];
var x = arr[0],
    y = arr.slice(1); // console.log(x);
// console.log(y);

function soma() {
  for (var _len = arguments.length, numeros = new Array(_len), _key = 0; _key < _len; _key++) {
    numeros[_key] = arguments[_key];
  }

  return numeros.reduce(function (total, next) {
    return total + next;
  });
} // console.log(soma(1, 2));
// git commit -m "adiciona o exercício 5.1 da lista de desafios (Rest)"
