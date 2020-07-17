"use strict";

var empresa = {
  nome: "Rocketseat",
  endereco: {
    cidade: "Rio do Sul",
    estado: "SC"
  }
}; // const {
//   nome,
//   endereco: { cidade, estado },
// } = empresa;
// console.log(nome); // Rocketseat
// console.log(cidade); // Rio do Sul
// console.log(estado); // SC
// git commit -m "adiciona o exercício 4.1 da lista de desafios"

function mostraInfo() {
  return "".concat(nome, " tem ").concat(idade, " anos.");
}

var _nome$idade = {
  nome: "Diego",
  idade: 23
},
    nome = _nome$idade.nome,
    idade = _nome$idade.idade;
console.log(mostraInfo()); // git commit -m "adiciona o exercício 4.2 da lista de desafios"
