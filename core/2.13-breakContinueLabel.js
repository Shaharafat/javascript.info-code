outer: for (let i = 0; i < 5; i++){
  for (let j = 0; j < 5; j++){
    if (j == 3) continue outer
    console.log(`${i} ${j}`);
    
  }
}

// 👀 continue donot work after ?