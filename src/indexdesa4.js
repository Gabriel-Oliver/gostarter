import axios from "axios";
export default class busca {
  static async buscaUsuario(usuario) {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${usuario}`
      );
      console.log(response.data);
    } catch (err) {
      console.log("Usuário não existe");
    }
  }
}
