"use strict";

var user = {
  name: "Gabriel"
};
user.name = "cleiton";
console.log(user);

function test(x) {
  var y = 2;

  if (x > 5) {
    y = 4;
    console.log(x, y);
  }
}

test(10);
