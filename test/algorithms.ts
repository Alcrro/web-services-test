const numbers = [3, 7, 1, 9, 4];

//var1
let max = numbers[0];
for (const number of numbers) {
  if (number > max) {
    max = number;
  }
}

//var2
const mathMax = Math.max(...numbers);

//! 2

const fruits = ["mere", "pere", "banane"];

function rev(item: string[]) {
  //var1
  let reversed: string[] = [];
  for (let i = item.length - 1; i >= 0; i--) {
    reversed.push(item[i]);
  }
  //   console.log("reversed: ", reversed);

  //   //var 2
  //   console.log("reverse method: ", item.reverse());
}

// rev(fruits);

const text = "Programarea e fun!";

for (let i = 0; i <= text.length - 1; i++) {
  const voult = ["a", "e", "i", "o", "u"];
  if (voult.includes(text[i])) {
    console.log(text[i]);
  }
}

const obj = { a: 1, b: 2, c: 3 };

for (const [key, val] of Object.entries(obj)) {
  console.log({ val: key });
}
