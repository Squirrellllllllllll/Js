// IIFE is Immediately Invoked Function Expression
// has ';' before function
// Function private

const fullName = 'An Dang'

    ; {
        () => {
    console.log("Now !")
    }
} ("")

const app = (function () {
    const cars = []

    return {
        add(car) {
            cars.push(car)
        },
        edit(index, car) {
            cars[index] = car
        },
        delete(index) {
            cars.splice(index, 1)
        }
    }
})

// tsao sinh ra cái này?