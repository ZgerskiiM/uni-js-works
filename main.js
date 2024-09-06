//1
document.getElementById("alert-button").addEventListener("click", function () {
  console.log("JavaScript подключен и работает");
});

document.getElementById("text-button").addEventListener("click", function () {
  document.getElementById("page-text").textContent = "Вы изменили текст!";
});

function buttonCounter() {
  document.getElementById("counter-button").addEventListener("click", function () {
    document.getElementById("page-text").textContent = "Вы изменили текст!";
  });
}

//2
let count = document.getElementById("button-counter-number");

document.getElementById("counter-button").onclick = function () {
  count.innerHTML++;
  let countPlus = count.innerHTML;
  calculate.innerHTML = calculations(countPlus);
};

//3
let inputText = document.getElementById("alert-form")

document.getElementById("input-alert-button").addEventListener("click", function () {
  let getText = inputText.value
  alert(getText)
})

//4
let counter = 1000;
const timer = setInterval(() => {
  document.getElementById("timer-element").textContent = counter <= 0
    ? clearInterval(timer)
    : counter--;
}, 1000);

//5
let imgForTransform = document.getElementById("img-transform");

imgForTransform.addEventListener('mouseover', function () {
  imgForTransform.style.width = "70vh";
}),
imgForTransform.addEventListener('mouseout', function () {
  imgForTransform.style.width = "50vh";
})

//6
function checkDay() {
  const day = document.getElementById("day-input").value.toLowerCase();
  let message;

  switch (day) {
      case "понедельник":
      case "вторник":
      case "среда":
      case "четверг":
      case "пятница":
          message = "Это рабочий день.";
          break;
      case "суббота":
      case "воскресенье":
          message = "Это выходной день.";
          break;
      default:
          message = "Пожалуйста, введите корректный день недели.";
  }

  document.getElementById("result").innerText = message;
}

//7
function calculate() {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const operation = document.getElementById('operation').value;
  let result;

  if (isNaN(num1) || isNaN(num2)) {
      result = "Пожалуйста, введите оба числа.";
  } else {
      switch (operation) {
          case 'add':
              result = num1 + num2;
              break;
          case 'subtract':
              result = num1 - num2;
              break;
          case 'multiply':
              result = num1 * num2;
              break;
          case 'divide':
              if (num2 !== 0) {
                  result = num1 / num2;
              } else {
                  result = "Деление на ноль невозможно!";
              }
              break;
          default:
              result = "Выберите операцию.";
      }
  }

  document.getElementById('result').innerText = "Результат: " + result;
}
