//  JSON

// JSON là 1 định dạng dữ liệu kiểu chuỗi
// Javascript Object Notation
//  JSON: Number, Boolean, Null, Array, Object

// Mã hóa / Giải mã
// Encode / Decode
// Stringify: Từ Js types -> JSON
// Parse: Từ JSON -> Js types

let json = 'true'
let json2 = 'false'

let json3 = '["Javascript", "PHP]';

let json4 = '{"name": "value", "age":18}';

let a = 'null';
let b = '"abc"';

// Thao tác parse
let object = JSON.parse(a);

// Thao tác stringify
let string = JSON.stringify([
    'Javascript',
    'PHP'
]);

let object2 = JSON.stringify({
    name: "An",
    age: 18
})

// function k thể hiện vs JSON

// Khi nhận từ api, chúng ta sẽ nhận về 1 JSON
// => Dùng parse để biến  JsonString thành Object và xử lý