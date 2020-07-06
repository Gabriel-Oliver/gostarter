class list {
  constructor() {
    this.data = [];
  }
  add(data) {
    this.data.push(data);
    console.log(this.data);
  }
}

class todoList extends list {
  constructor() {
    super();
    this.user = "Gabriel";
  }
  showUser() {
    console.log(this.user);
  }
}
const myList = new todoList();

document.getElementById("newtodo").onclick = function () {
  myList.add("novo todo");
};
myList.showUser();
class math {
  static plus(a, b) {
    return a + b;
  }
}
console.log(math.plus(5, 10));
