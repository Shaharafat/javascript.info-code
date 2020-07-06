let whoIsThis = prompt("Who's there?");
// if((whoIsThis === "Admin") )
if (whoIsThis) {
  if (whoIsThis === "Admin") {
    let password = prompt("Password?");
    if (password) {
      if (password == "TheMaster") {
        alert("welcome!");
      } else {
        alert("wrong password");
      }
    } else {
      alert("Canceled");
    }
  }
} else {
  alert("Canceled");
}

// 👁 their solution
let userName = prompt("Who's there?", "");

if (userName == "Admin") {
  let pass = prompt("Password?", "");

  if (pass == "TheMaster") {
    alert("Welcome!");
  } else if (pass == "" || pass == null) {
    alert("Canceled");
  } else {
    alert("Wrong password");
  }
} else if (userName == "" || userName == null) {
  alert("Canceled");
} else {
  alert("I don't know you");
}
