const user = {
  name: "Gabriel",
  age: "20",
  address: {
    city: "Natal",
    state: "RN",
  },
};
function showName({ name, age }) {
  console.log(name, age);
}

showName(user);
