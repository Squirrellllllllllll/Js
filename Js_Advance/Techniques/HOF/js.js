// grades obj
var grades = [
    {name: 'John', grade: 8, sex: 'M'},
    {name: 'Sarah', grade: 12, sex: 'F'},
    {name: 'Bob', grade: 16, sex: 'M'},
    {name: 'Johnny', grade: 2, sex: 'M'},
    {name: 'Ethan', grade: 4, sex: 'M'},
    {name: 'Paula', grade: 18, sex: 'F'},
    {name: 'Donald', grade: 5, sex: 'M'},
    {name: 'Jennifer', grade: 13, sex: 'F'},
    {name: 'Courtney', grade: 15, sex: 'F'},
    {name: 'Jane', grade: 9, sex: 'F'}
]

/**
 *  Tìm thứ hạng trung bình của cả lớp 
    Tìm thứ hạng trung bình của nam trong lớp 
    Tìm thứ hạng trung bình của Nữ trong lớp 
    Tìm thứ hạng cao nhất của Nam trong lớp 
    Tìm thứ hạng cao nhất của Nữ trong lớp
    Tìm thứ hạng thấp nhất của Nam trong lớp 
    Tìm thứ hạng thấp nhất của Nữ trong lớp 
    Tìm thứ hạng cao nhất của cả lớp 
    Tìm thứ hạng thấp nhất của cả lớp
 */


// Thay vì làm từng yêu cầu 1 với các dòng code lặp đi lặp lại
// Chúng ta nên sử dụng HOF để giải quyết vde nhanh hơn

let isBoy = grades => {
    grades.sex === 'M'
}

let isGirl = grades => {
    grades.sex === 'F'
}

let getBoys = grades => {
    grades.filter(isBoy)
}

let getGirl = grades => {
    grades.filter(isGirl)
}

let average = grades => {
    grades.reduce((acc, cur) => (
    acc + cur.grade
    ), 0) / grades.length
}

let maxGrade = grades => {
    Math.max(...grades.map(student => student.grade))
}

let minGrade = grades => {
    Math.min(...grades.map(student => student.grade))
}

let classAvg = average(grades)
let boyAvg = average(getBoys(grades))
let girlAvg = average(getGirl(grades))
let maxBoy = maxGrade(getBoys(grades))
let maxGirl = maxGrade(getGirl(grades))
let minBoy = minGrade(getBoys(grades))
let minGirl = minGrade(getGirls(grades))
let maxStu = maxGrade(grades)
let minStu = minGrade(grades)