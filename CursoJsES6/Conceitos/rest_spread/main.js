//Rest

const user = {
  name: "gabriel",
  age: 20,
  company: "nenhuma",
};

const { name, ...resto } = user;

// console.log(name);
// console.log(resto);

const arr = [1, 2, 3, 4];

const [a, b, ...c] = arr;

// console.log(a);
// console.log(b);
// console.log(c);

function add(...params) {
  return params.reduce((total, next) => total + next);
}
// console.log(add(1, 4, 5, 6, 7));

//Spread

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];

// console.log(arr3);

const user1 = {
  name: "gabriel",
  age: 20,
  company: "nenhuma",
};

const user2 = { ...user1, name: "chico" };

console.log(user2);
