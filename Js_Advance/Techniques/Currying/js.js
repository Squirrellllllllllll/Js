// Example Currying
nonCurryingFunc('param1', 'param2', 'param3');
curryingFunc('param1')('param2')('param3');


// Ex2: Instead use addNor, we should use addCurrying
const addNor = (a, b) => a + b
addNor(1, 2) //should return 3

const addCurrying = a => b => a + b
addCurrying(1)(2) //should return 3


// Ex3: Cấu hình chức năng có thể tái sd
// obj movies
const movies = [
  {
    "id": 1,
    "name": "Matrix"
  },
  {
    "id": 2,
    "name": "Star Wars"
  },
  {
    "id": 3,
    "name": "The wolf of Wall Street"
  }
]

// obj series
const series = [
  {
    "id": 4,
    "name": "South Park"
  },
  {
    "id": 5,
    "name": "The Simpsons"
  },
  {
    "id": 6,
    "name": "The Big Bang Theory"
  }
]

// create func Currying
const get = property => object => object[property];

// getId func
const getId = get("id")

// getName func
const getName = get("name")

// get property of 2 obj = map()
movies.map(getId);
series.map(getId);

movies.map(getName)

