// I. 3 cách copying
// Object.assign()
const obj1 = {a:1,b:2,c:3};
const objAssign = Object.assign({},obj1);
console.log(clone); // {a:1,b:2,c:3};

// Spread Operator Es6
const obj2 = {a:1,b:2,c:3};
const spreadOperator = {...obj2};
console.log(spreadOperator); // {a:1,b:2,c:3};

// JSON.parse(JSON.stringify())
const obj3 = {a:1,b:2,c:{d:3}};
const jsonParse = JSON.parse(JSON.stringify(obj3));
console.log(jsonParse); // {a:1,b:2,c:3};


// II. Shallow Copying
const obj4 = {a:1,b:2,c:{d:3}};
const shallowClone = {...obj4};
obj4.c.d = 34; // chúng ta thay đổi giá trị d của object gốc
console.log(obj4); // kết quả cho chúng ta thấy {a:1,b:2,c:{d:34}} 
console.log(shallowClone); // nhưng object mà chúng ta clone ra cũng bị thay đổi theo {a:1,b:2,c:{d:34}}


// III. Deep Copying
const obj5 = {a:1,b:2,c:{d:3}};
const deepClone = JSON.parse(JSON.stringify(obj5));
console.log(deepClone); // {a:1,b:2,c:3};
obj5.c.d = 34;
console.log(obj5); // {a:1,b:2,c:{d:34}}
console.log(deepClone); // {a:1,b:2,c:{d:3}}