// Practice make comment with promise
let users = [
    {
        id: 1,
        name: "An Dang",
    },
    {
        id: 2,
        name: "Son Dang",
    },
    {
        id: 3,
        name: "Hieu Nguyen",
    }
];

let comments = [
    {
        id: 1,
        user_id: 1,
        content: "Comment 1",
    },
    {
        id: 2,
        user_id: 2,
        content: "Comment 2",
    },
    {
        id: 3,
        user_id: 3,
        content: "Comment 3",
    }
]

// 1. Get comments
// 2. Get user_id from comments
// 3. Target to user from user_id

// Fake API: 
function getComments() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(comments)
        }, 1000)
    })
}

function getUsersByIds(userIds) {
    return new Promise((resolve) => {
        let result = users.filter((user) => {
            return userIds.includes(user.id)
        })
        setTimeout(() => {
            resolve(result);
        }, 1000)
    }, 1000)
}

getComments()
    .then((comments) => {
        let userIds = comments.map((comment) => {
            return comment.user_id
        })
        return getUsersByIds(userIds)
            .then((users) => {
                return {
                    users: users,
                    comments: comments,
                }
        })
    })
    .then((data) => {
        let commentBlock = document.getElementById("comment-block")
        let html = ""
        data.comments.forEach(element => {
            let user = data.users.find((user) => {
                return user.id === element.user_id
            })
            html += `<li>${user.name}: ${element.content}`
        });

        commentBlock.innerHTML = html
    })