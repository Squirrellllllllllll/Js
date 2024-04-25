// Từ khóa this tham chiếu đến đối tượng nó thuộc về

const iPhone13 = {
    // Property
    name: 'iPhone13',
    color: 'Blue',
    weight: 300,

    // Method
    takePhoto() {
        console.log(this)
    },

    objChild: {
        methodChild() {
            console.log(this)
        }
    }
}

console.log(iPhone13.takePhoto())
console.log(iPhone13.objChild.methodChild())


//  Example 2
function Car(name, color, weight) {
    this.name = name
    this.color = color
    this.weight = weight
    this.run = function () {
        console.log("Running...", this)
    }
}

const mercedesS680 = new Car("Mercedes S680", "Black", "4tons")

console.log(mercedesS680.run())


// Nếu use strict thì this trong function = undefined
// this ở ngoài hàm sẽ là window
// Arrow function k có this
// Arrow function sẽ lấy this gần nhất bên ngoài
