// 1. preventDefault is banned Action default of every events in Js

let aElements = document.querySelectorAll("a")

aElements.forEach(element => {
    element.onclick = (e) => {
        if (!e.target.href.startWith("https://f8.edu.vn")) {
            e.preventDefault();
        }
    }
    
});

// 2. Stop propagation is banned action to stop event nổi bọt khi click vào thằng con thì nó vẫn nhận cả action của thằng cha

document.getElementById("propagation").onclick = (e) => {
    console.log('DIV')
}

document.querySelector("button").onclick = (e) => {
    e.stopPropagation();
    console.log('click me!')
}