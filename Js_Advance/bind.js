// Function bind()
// Trả về 1 hàm mới, Không sửa this

this.firstName = "Minh"
this.lastName = "Thu"

const teacher = {
    firstName: "Minh",
    lastName: "Thao",
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

console.log(teacher.getFullName()) // ==> Minh Thao 

const getTeacherName = teacher.getFullName

console.log(getTeacherName) // ==> Minh Thu
// Biến this trong hàm mới sẽ tham chiếu đến window => tham chiếu đến biến Thu ở ngoài


// Affect
//  If return Minh Thảo

const getTeacherName2 = teacher.getFullName.bind(teacher)
console.log(getTeacherName2) // ==> Minh Thảo