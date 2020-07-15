"use strict";

var usuarios = [{
  nome: "Diego",
  idade: 23,
  empresa: "Rocketseat"
}, {
  nome: "Gabriel",
  idade: 15,
  empresa: "Rocketseat"
}, {
  nome: "Lucas",
  idade: 30,
  empresa: "Facebook"
}];
var idades = usuarios.map(function (usuarios) {
  return usuarios.idade;
}); // console.log(idades);

var filter = usuarios.filter(function (usuarios) {
  return usuarios.nome && usuarios.idade >= 18 && usuarios.empresa === "Rocketseat";
});
console.log(filter);
