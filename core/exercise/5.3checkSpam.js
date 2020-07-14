function checkSpam(str) {
  str = str.toLowerCase();
  if (str.includes('viagra') || str.includes('xxx')) {
    return true;
  } else {
    return false;
  }
}
console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam("innocent rabbit"));