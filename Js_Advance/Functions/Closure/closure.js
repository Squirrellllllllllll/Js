// Example 1:

function createCounter() {
    let counter = 0

    function increase() {
        return ++counter
    }
    return increase
}

const counter = createCounter()

console.log(counter())


// Example Logger Function
function createLogger(namespace) {
    function logger(message) {
        console.log(`[${namespace}] ${message}`)
    }
    return logger
}

const infoLogger = createLogger('Info')

infoLogger('Start!')
infoLogger('Error')
infoLogger('End!')


// Ex3:
function name(n) {
  return function(a) {
    return `${n} likes ${a}`;
  };
}

var j = name("John");
var c = name("Cindy");

console.log(j('dogs'));  // 'John likes dogs'
console.log(c('cats'));  // 'Cindy likes cats

