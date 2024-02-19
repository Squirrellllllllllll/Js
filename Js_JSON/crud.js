let courseAPI = "http://localhost:3000/course"


function start() {
    getCourse(renderCourse);

    handleCreateForm();
}

start();

// Function
function getCourse(callback) {
    fetch(courseAPI)
        .then(function (response) {
            return response.json();
        })
        .then(callback);
}

function createCourse(data, callback) {
    let options = {
        method: "POST",
        body: JSON.stringify(data)
    }

    fetch(courseAPI, options)
        .then((response) => {
        response.json()
        })
        .then(callback)
}

function renderCourse(courses) {
    let listCourseBlock = document.querySelector("#list-course")
    let htmls = courses.map((course) => {
        return `
            <li>
                <h4>${course.name}</h4>
                <p>${course.description}</p>
            </li>
            `
    })
    listCourseBlock.innerHTML = htmls.join('')
}

function handleCreateForm() {
    let createBtn = document.querySelector("#create")
    createBtn.onclick = () => {
        let name = document.querySelector('input[name="name"]').value
        let description = document.querySelector('input[name="description"]').value

        let formData = {
            name: name,
            description: description
        }

        createCourse(formData)
    }
}