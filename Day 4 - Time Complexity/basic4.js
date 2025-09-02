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

