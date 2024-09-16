//1
let name21 = document.getElementById("alert-input")

document.getElementById("input-button").addEventListener("click", function () {
    let userName = name21.value
    if (((userName).length) < 2) {
        alert("Hello, Guest!")
    }
    else {
        alert("Hello," + userName)
    }
    console.log(userName)
    console.log((JSON.stringify(userName)))
})

//2
function findMax() {
    let result = null;
    for (i in arguments) {
        result = Math.min((arguments[i]))
    }
    console.log(result);
}

findMax(7, 8, 3, 4, 5, 10, 5);

//3
const selectedDate = new Date(new Date().setHours(0, 0, 0, 0));

function formatDate (selectedDate) {
    return new Date(selectedDate).toLocaleDateString("ru-RU", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
};

console.log(formatDate(selectedDate))

//4
let weight = document.getElementById("weight-input")
let age = document.getElementById("age-input")
let height = document.getElementById("height-input")

let weightValue = weight.value
let ageValue = age.value
let heightValue = height.value

document.getElementById("calculate-button").addEventListener("click", function calculateCalories () {
    let bmr = 10 * weightValue + 6.25 * heightValue - 5 * ageValue + 5;
    console.log(bmr)
});

//5
const getStringLength = str => str.length;

console.log(getStringLength("Привет"));

//6
const sumArray = arr => arr.reduce((acc, curr) => acc + curr, 0);

console.log(sumArray[1, 2, 3, 4, 5]); // 15

//7
const toUpperCase = str => str.toUpperCase();

console.log(toUpperCase("hello"));
