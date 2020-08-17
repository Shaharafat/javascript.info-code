async function loadJson(url) {
  let fetchRes = await fetch(url);

  // console.log(fetchRes);
  if (fetchRes.status == 200) {
    return await fetchRes.json();
  } else {
    throw new Error(fetchRes.status);
  }
}


loadJson('https://api.github.com/users/shaharafat').then(console.log).catch(console.log)

console.log(loadJson('https://api.github.com/users/shaharafat'))