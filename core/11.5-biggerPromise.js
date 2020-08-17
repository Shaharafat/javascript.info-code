let names = ["iliakan", "remy", "jeresig"];

let requests = names.map((name) =>
  fetch(`https://api.github.com/users/${name}`)
);

Promise.all(requests)
  .then((responses) => {
    for (let response of responses) {
      console.log(`${response.url}: ${response.status}`);
    }

    return responses;
  })

  // map array of responses into an array of response.json() to
  // read their content.
  .then((responses) => Promise.all(responses.map((r) => r.json())))

  // all JSON answers are parsed: 'users' is the array of them
  .then((users) => users.forEach((user) => console.log(user.name)));
