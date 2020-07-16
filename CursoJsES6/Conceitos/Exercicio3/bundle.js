"use strict";

// 3.1
var arr = [1, 2, 3, 4, 5];
var arr2 = arr.map(function (item) {
  return item + 10;
}); // console.log(arr2);
//git commit -m "adiciona o exercício 3.1 da lista de desafios"

var usuario = [{
  nome: "Diego",
  idade: 23
}];
var test = usuario.map(function (usuario) {
  return usuario.idade;
}); // console.log(test);
//git commit -m "adiciona o exercício 3.2 da lista de desafios"

var usuario2 = [{
  nome: "Diego",
  idade: 23
}];
var teste = usuario2.find(function (usuario2) {
  return usuario2;
});
console.log(teste.nome, teste.idade);
console.log(teste.idade); //git commit -m "adiciona o exercício 3.3 da lista de desafios"
//git commit -m "adiciona o exercício 3.4 da lista de desafios"
