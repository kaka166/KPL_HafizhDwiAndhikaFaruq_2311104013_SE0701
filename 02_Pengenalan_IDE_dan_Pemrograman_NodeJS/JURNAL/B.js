for (let i = 0; i < 50; i++) {
  let output = i;

  if (i % 6 === 0) {
    output += " #$#$";
  } else if (i % 2 === 0) {
    output += " ##";
  } else if (i % 3 === 0) {
    output += " $$";
  }

  console.log(output);
}
