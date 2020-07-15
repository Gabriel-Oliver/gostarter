const usuarios = [
  { nome: "Diego", idade: 23, empresa: "Rocketseat" },
  { nome: "Gabriel", idade: 15, empresa: "Rocketseat" },
  { nome: "Lucas", idade: 30, empresa: "Facebook" },
];

const idades = usuarios.map((usuarios) => usuarios.idade);
// console.log(idades);

const filter = usuarios.filter((usuarios) => {
  return (
    usuarios.nome && usuarios.idade >= 18 && usuarios.empresa === "Rocketseat"
  );
});

// console.log(filter);
const find = usuarios.find(
  (usuarios) => usuarios.nome && usuarios.empresa === "Google"
);
// console.log(find);

const users = usuarios.map((usuarios) => {
  usuarios.idade *= 2;
  return usuarios;
});

const filterI = users.filter(
  (users) => users.nome && users.idade <= 50 && users.empresa
);

console.log(filterI);
