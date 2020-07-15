const usuarios = [
  { nome: "Diego", idade: 23, empresa: "Rocketseat" },
  { nome: "Gabriel", idade: 15, empresa: "Rocketseat" },
  { nome: "Lucas", idade: 30, empresa: "Facebook" },
];

const idades = usuarios.map((usuarios) => usuarios.idade);
// console.log(idades);

const filter = usuarios.filter((usuarios) => {
  if (usuarios.idade >= 18 && usuarios.empresa === "Rocketseat") {
    return usuarios.nome, usuarios.idade, usuarios.empresa;
  }
});

console.log(filter);
