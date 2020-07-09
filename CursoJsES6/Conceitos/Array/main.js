const arr = [1, 2, 3, 4, 5, 6];

const newArr = arr.map(function (iten, index) {
  return iten + index;
});

console.log(newArr);

const sum = arr.reduce(function (total, next) {
  return total + next;
});

console.log(sum);

const filter = arr.filter(function (iten) {
  return iten % 2 === 0;
});

console.log(filter);

const find = arr.find(function (iten) {
  return iten === 4;
});

console.log(find);
