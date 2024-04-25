// 1. Value types
/**
 *                 typeOf()
 *  - String        string
 *  - Number        number
 *  - Boolean       boolean
 *  - BigInt        number
 *  - Symbol        string
 *  - undefined     undefined
 *  - null          object
 */


// 2. Reference type
/**
 *  - Object        object
 *  - Array         array
 *  - Function      function
 */


// 3. Data types with function
/**
 *  - Value types
 */
function sum(a, b) {
    a = 0
    b = 0
    console.log(a, b) // a = b = 0
}

const c = 1
const d = 2

sum(c, d)

console.log(c, d) // c = 1, d = 2


/**
 *  - Reference types
 */
function func(obj) {
    // let obj = a
    obj.name = 'Mercedes'
    console.log(obj.name) // => Mercedes
}

const a = {
    name: 'BMW'
}

func(a)
console.log(a.name) // Mercedes


/**
 * Side effect
 */
function createCar(obj) {
    obj = JSON.parse(JSON.stringify(obj))
    obj.name = 'Mercedes'
    return obj
}

const car = {
    name: 'BMW'
}

const newCar = createCar(car)

console.log(car)
console.log(newCar)