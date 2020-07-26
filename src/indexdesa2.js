import axios from "axios";
export default class Api {
  static async info(user) {
    try {
      const response = await axios.get(`https://api.github.com/users/${user}`);
      console.log(response.data);
    } catch (err) {
      console.warn("Usuário não existe");
    }
  }
}
