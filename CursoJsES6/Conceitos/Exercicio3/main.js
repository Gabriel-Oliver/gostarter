// 3.1

const arr = [1, 2, 3, 4, 5];
const arr2 = arr.map((item) => item + 10);

// console.log(arr2);

//git commit -m "adiciona o exercício 3.1 da lista de desafios"

const usuario = [{ nome: "Diego", idade: 23 }];
const test = usuario.map((usuario) => usuario.idade);
// console.log(test);

//git commit -m "adiciona o exercício 3.2 da lista de desafios"

const usuario2 = [{ nome: "Diego", idade: 23 }];

const { idade, nome } = usuario2.find((usuario2) => usuario2);
console.log(nome, idade);
console.log(idade);

//git commit -m "adiciona o exercício 3.3 da lista de desafios"

const promise = () => {
  return new Promise((resolve, reject) => resolve());
};

console.log(promise());

//git commit -m "adiciona o exercício 3.4 da lista de desafios"
