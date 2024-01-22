// 1. input/select

let inputElement = document.querySelector('input[type="text"]')
let checkBoxElement = document.querySelector('input[type="checkbox"]')
let selectElement = document.querySelector('select')

// get values in form by Js
inputElement.onChange = (e) => {
    console.log(e.target.value)
}

checkBoxElement.onChange = (e) => {
    console.log(e.target.checked)
}

selectElement.onChange = (e) => {
    console.log(e.target.value)
}

// 2. Key up/down
// Use to add keyboard events for user experiences
// inputElement.onKeyDown = (e) => {
//     console.log(e.target.value)
// }

// inputElement.onKeyUp = (e) => {
//     console.log(e.target.value)
// }


// Use Esc and Enter keyboard to do sthg
// document.onkeydown = (e) => {
//     switch (e.which) {
//         case 27:
//             console.log("Exit")
//             break;
//         case 13:
//             console.log("Enter")
//             break;
//     }
// }