"use strict";

var user = {
  name: "Gabriel",
  age: "20",
  address: {
    city: "Natal",
    state: "RN"
  }
};

function showName(_ref) {
  var name = _ref.name,
      age = _ref.age;
  console.log(name, age);
}

showName(user);
