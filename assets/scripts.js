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

function triangleEqui2(num) {
  let result = "";

  for (let i = 0; i < num; i++) {
    let space = ' '.repeat(i);
    let stars = '*'.repeat(num - i);

    result += space + stars;

    if (i < num - 1) {
      result += '\n';
    }
  }

  return result;

}

function triangleEqui(num) {
  let result = "";
  for (let i = num; i >= 1; i--) {
    let star = "";
    if (i % 2 != 0) {
      let space = ' '.repeat((num - i) / 2);
      for (let j = i; j >= 1; j--) {
        star += "*";
      }
      result += space += star;
      if (i !== 1) {
        result += "\n"
      }
    }
  }
  return result
}

console.log(triangleEqui(99));

