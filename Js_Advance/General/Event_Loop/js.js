// Call stack
const multiply = (x, y) => {
  return x * y;
};

const multiplyLogger = (x, y) => {
  const value = multiply(x, y);
  console.log(value);
};

multiplyLogger(2, 3);

/**
 * First application calls multiplyLogger()
 * multiplyLogger(2,3) gets added to call stack
 * multiplyLogger(2,3) calls multiply(2,3) and it gets added to the call stack
 * multiply(2,3) returns a value and finishes executing
 * Then it get's removed from call stack
 * console.log(value) is called and it gets executed
 * console.log() finish and removed
 * Finally, multiplyLogger(2,3) finishes and gets removed
*/


// II. Web APIs + Callback Queue
console.log("First");

setTimeout(() => {
  console.log("Second");
}, 2000);

console.log("Third");

// Expected output
// "First"
// "Third"
// "Second"