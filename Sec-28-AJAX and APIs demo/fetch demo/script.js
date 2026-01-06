fetch("https://swapi.tech/api/people/1/")
  .then((res) => {
    console.log("Resolved!", res);
  })
  .catch((e) => {
    console.log("Error!", e);
  });
