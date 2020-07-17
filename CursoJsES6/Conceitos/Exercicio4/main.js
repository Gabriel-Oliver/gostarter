const empresa = {
  nome: "Rocketseat",
  endereco: {
    cidade: "Rio do Sul",
    estado: "SC",
  },
};
// const {
//   nome,
//   endereco: { cidade, estado },
// } = empresa;

// console.log(nome); // Rocketseat
// console.log(cidade); // Rio do Sul
// console.log(estado); // SC

// git commit -m "adiciona o exercício 4.1 da lista de desafios"

function mostraInfo() {
  return `${nome} tem ${idade} anos.`;
}

const { nome, idade } = { nome: "Diego", idade: 23 };

console.log(mostraInfo());

// git commit -m "adiciona o exercício 4.2 da lista de desafios"
