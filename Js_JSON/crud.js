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
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }

    fetch(courseAPI, options)
        .then((response) => {
        response.json()
        })
        .then(callback)
}

function handleDeleteCourse(id) {
    let options = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }

    fetch(courseAPI + '/' + id, options)
        .then((response) => {
        response.json()
        })
        .then(() => {
            let courseItem = document.querySelector(".course-item-" + id)
            if (courseItem) {
                courseItem.remove()
            }
        })
}

function renderCourse(courses) {
    let listCourseBlock = document.querySelector("#list-course")
    let renders = courses.map((course) => {
        return `
            <li class="course-item-${course.id}">
                <h4>${course.name}</h4>
                <p>${course.description}</p>
                <button onClick="handleDeleteCourse(${course.id})">Delete</button>
            </li>
            `
    })
    listCourseBlock.innerHTML = renders.join('')
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

        createCourse(formData, () => {
            getCourse(renderCourse)
        });
    }
}