// Fetch: Get information from back-end
//  API -> Application programming interface

// Back-end -> API -> Fetch -> JSON/XML -> JSON.parse -> Javascript types -> Render to HTML

let postApi = "https://jsonplaceholder.typicode.com/posts"

fetch(postApi)
    .then((response) => {
        return response.json()
        // JSON.parse
    })
    .then((posts) => {
        let html = posts.map((post) => {
            return `<li>
            <h2>${post.title}
            <p>${post.body}`
        })
        let htmls = html.join("")
        document.getElementById("post-block").innerHTML = htmls
    })

// B1: Tạo ra 1 biến chứa url của API
// B2: Sử dụng fetch lấy API về
//    Fetch sử dụng promise
//    sử dụng biến reponse để chuyển chuỗi JSON về Javascript type data
//    Sử dụng biến post để hiển thị data đã dc lấy về 