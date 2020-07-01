axios
  .get("https://api.github.com/users/Gabriel-Oliver")
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.warn(error);
  });
