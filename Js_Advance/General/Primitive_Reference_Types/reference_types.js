// Tham chiếu
                        //  Biến     Giá Trị     Ô Nhớ
let a = {
    name: 'Mercedes',   // a.name    Mercedes      1
}  

let b = a               //   b       Mercedes      1

a.name = 'BMW'          // a.name      BMW         2

console.log(b)          //  b          BMW         2
