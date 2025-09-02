const arrElement = [1, 2, 3, 4, 5];

arrElement.forEach((e) => {
    const f = e + 1;
    console.log(f)
});
//Use forEach when you need side effects (logging, updating UI, calling an API, etc.).


// Use map when you need to transform data into a new array.
arrElement.map(n => console.log(n + 1));

// cleaner and more modern ES6+ style with chaining.

arrElement.map(e => e + 1) //transform each element
    .forEach(e => console.log(e)); //log them

// map returns the transformed array. forEach then logs each value.


// Using modern features (spread + array methods)

console.log(...arrElement.map(e => e + 1));

// Suppose we want to increment only the even numbers

const incrementEvens = arrElement.filter(e => e % 2 == 0) //keeps only even number
    .map(e => e + 1);

console.log(incrementEvens);

/* reduce is more powerful: you can do filtering, mapping, and accumulation all in one go.

Example: Increment every number and build a new array: */

const incremented = arrElement.reduce((acc, e) => {
    acc.push(e + 1); //transform and add to result
    return acc;
}, []);

console.log(incremented);

// sum of all array elements 1,2,3,4,5
const sumArray = arrElement.reduce((sum, e) => {
    sum += e;
    return sum;
}, 0);


console.log("SUM of an Array", sumArray);

// sum of all array even elements
const sumEvenArray = arrElement.reduce((sumEven, e) => {
    e % 2 == 0 ? sumEven += e : sumEven;
    return sumEven;
}, 0);

console.log("SUM of an Even Array:", sumEvenArray);

/* Task
Keep only the even numbers.

Increment each by 1.

Find the sum of the resulting numbers.
*/

const taskArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const taskSum = taskArray.filter((e) => e % 2 === 0).map((e) => e + 1).reduce((sum, e) => {
    return sum += e;
}, 0);

console.log("Awesome Task: ", taskSum);

/* You can think of this as a data pipeline:
Original array → filter (select) → map (transform) → reduce (aggregate). */

/* Task 2
Scenario: E-commerce Orders

You have a list of customer orders.
Each order has:

id

customer

amount

status ("completed" or "pending")

👉 Task:

Keep only completed orders.

Add 10% tax to each order amount.

Find the total revenue.
*/

const orders = [
    { id: 1, customer: "Alice", amount: 250, status: "completed" },
    { id: 2, customer: "Bob", amount: 150, status: "pending" },
    { id: 3, customer: "Charlie", amount: 400, status: "completed" },
    { id: 4, customer: "Diana", amount: 100, status: "completed" },
    { id: 5, customer: "Evan", amount: 300, status: "pending" },
];

const taskOutput = orders.filter((e) => e.status === "completed").map((e) => e.amount * 1.1).reduce((revenue, e) => {
    return revenue += e;
}, 0);

console.log("task output:", taskOutput);