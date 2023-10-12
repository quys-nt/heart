function triangle(number) {
  let star = "";
  for (let i = 0; i < number; i++) {
    star += '*';
    console.log(star);
  }
}
// triangle(5)  

function triangleRevert(num) {
  let star = ""
  for (let i = num; i >= 1; i--) {
    for (let j = i; j >= 1; j--) {
      star += "*";
    }
    if (i !== 1) {
      star += "\n"
    }

  }
  return star
}

// console.log(triangleRevert(10));

