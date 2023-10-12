function triangle(number) {
  let star = "";
  for (let i = 0; i < number; i++) {
    star += '*';
    console.log(star);
  }
}

triangle(5);