// Xử lý nhiều việc khi 1 event xảy ra
// Lắng nghe/ hủy bỏ lắng nghe

// Có thể dùng DOM event để thực hiện nhưng có nhiều hạn chế
// Dùng listener event để thực hiện

// addEventListener k có "on" ở trước hành động như DOM events, cú pháp như sau:
// 

let btn = document.getElementById("event-listener-btn")

btn.addEventListener("click", Event1);

btn.addEventListener("click", (e) => {
    console.log("Event 2");
})

btn.addEventListener("click", (e) => {
    console.log("Event 3");
})

// Example
function Event1() {
    console.log("Event 1")
}

// Remove event listener
setTimeout(() => {
    btn.removeEventListener("click", Event1)
}, 5000)


// Lưu ý:
// Sử dụng Dom event trong trg hợp đơn giản
//  Sử dụng listener event khi muốn hủy 1 case nào đó khi thực hiện tác vụ

