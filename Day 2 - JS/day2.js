// Task 1 - Print Number 1 to 20

for (let i = 1; i <= 20; i++) {
  console.log(i);
}

// Task 2 – Print even numbers from 1 to 50

for (let i = 1; i <= 20; i++) {
  /*  if (i % 2 === 0) {
    console.log(i);
  } */
  i % 2 === 0 ? console.log(i) : "";
}

console.log("----------------");
// Task 3 - Even or Odd

const readline = require("readline");
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("Enter Number: ", (answer) => {
  let num = Number(answer);
  if (isNaN(num)) {
    console.log("That's not a valid number!");
  } else {
    num % 2 === 0 ? console.log("Even") : console.log("Odd");
  }

  r1.close();
});
