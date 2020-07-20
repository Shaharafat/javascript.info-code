let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {
  let map = new Map();
  for (word of arr) {
    let sorted = word
      .toLowerCase()
      .split("")
      .sort()
      .join("");
    map.set(sorted, word);  
  }

  return Array.from(map.values());
}

// console.log(factorial(4));
console.log(aclean(arr));

