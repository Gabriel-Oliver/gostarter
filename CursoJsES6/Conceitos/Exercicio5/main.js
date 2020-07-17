const arr = [1, 2, 3, 4, 5, 6];

const [x, ...y] = arr;

// console.log(x);
// console.log(y);

function soma(...numeros) {
  return numeros.reduce((total, next) => total + next);
}

// console.log(soma(1, 2));
// git commit -m "adiciona o exercício 5.1 da lista de desafios (Rest)"
