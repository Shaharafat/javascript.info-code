function truncate(str, maxLength) {
  let strSize = str.length;
  if (strSize > maxLength) {
    return `${str.slice(0, 19)}...`;
  } else {
    return str;
  }
}

console.log(truncate("What I'd like to tell on this topic is:", 20));

console.log(truncate("Hi everyone!", 20));