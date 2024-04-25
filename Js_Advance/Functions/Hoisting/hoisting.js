// function declarations
function addDe(num1, num2) {
    return num1 + num2;
}

// function expression
const addEx = function (num1, num2) {
    return num1 + num2;
}


// Example about function declarations & expression when hoisted

// This was hoisted, so it works
add(3, 3); // returns 6
function add(num1, num2) {
	return num1 + num2;
};

// This was not, so it doesn't
subtract(7, 4); // returns Uncaught TypeError: subtract is not a function
var subtract = function (num1, num2) {
	return num1 - num2;
};


// Var: Được hoisted với giá trị undefined

// let & const: Được hoisted nhưng sẽ hiện lỗi Uncaught TypeError:



// Bonus
const counter1 = makeCounter()

console.log(counter1()) 

function makeCounter() {
    let counter = 0

    return increase

    function increase() {
        return ++counter
    }
}