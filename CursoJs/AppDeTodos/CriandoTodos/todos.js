let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");

let todos = ["Fazer café", "Estudar JavaScript", "Entrar na comunidade"];

function rendertodos() {
  listElement.innerHTML = "";
  for (todo of todos) {
    let todoElement = document.createElement("li");
    let todoText = document.createTextNode(todo);

    todoElement.appendChild(todoText);
    listElement.appendChild(todoElement);
  }
}

rendertodos();
function addTodo() {
  let todoText = inputElement.value;
  todos.push(todoText);
  inputElement.value = "";
  rendertodos();
}

buttonElement.onclick = addTodo;
