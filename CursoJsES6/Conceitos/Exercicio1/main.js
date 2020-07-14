class Admin {
  constructor() {
    super();
    this.email = [];
    this.senha = [];
    this.admin = true;
  }
  add(email, senha) {
    this.email.push(email);
    this.email.push(senha);
  }
}
class Usuario extends Admin {
  constructor() {
    this.email;
    this.senha;
  }
}

const User1 = new Usuario("email@teste.com", "senha123");
const Adm1 = new Admin("email@teste.com", "senha123");
console.log(Adm1.email);
// console.log(User1.isAdmin());
// console.log(Adm1.isAdmin());
