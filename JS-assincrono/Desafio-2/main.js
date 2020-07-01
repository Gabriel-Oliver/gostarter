function adicionar() {
  let inputElement = document.querySelector("input");
  nameuser = inputElement.value;
  let nameURL = "https://api.github.com/users/" + nameuser + "/repos";
  axios
    .get(nameURL)
    .then(function (response) {
      let ul = document.querySelector("#list");
      let li;
      li = document.createElement("ul");
      li.innerText = nameuser;
      ul.appendChild(li);

      for (let i = 0; i < response.data.length; i++) {
        li = document.createElement("li");
        li.innerText = response.data[i].name;

        ul.appendChild(li);
      }
    })

    .catch(function (error) {
      console.warn(error);
    });
}
