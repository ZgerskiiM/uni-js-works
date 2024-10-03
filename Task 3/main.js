//1
function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

//2
function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

function addListItem() {
    const ul = document.getElementById('item-list');
    const newItem = document.createElement('li');
    const itemText = document.createTextNode('Новый элемент списка');
    newItem.appendChild(itemText);
    ul.appendChild(newItem);
}

//3
function addParagraph() {
    const inputText = document.getElementById('text-input').value;

    if (inputText.trim() === "") {
        alert("Введите текст для добавления параграфа!");
        return;
    }
        const paragraphContainer = document.getElementById('paragraph-container');
    const newParagraph = document.createElement('p');
    const paragraphText = document.createTextNode(inputText);
    newParagraph.appendChild(paragraphText);
    paragraphContainer.appendChild(newParagraph);
    document.getElementById('text-input').value = "";
}

//4
document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    if (name.trim() === '' || age.trim() === '') {
        alert('Пожалуйста, заполните все поля!');
        return;
    }

    const table = document.getElementById('data-table').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    const nameCell = newRow.insertCell(0);
    const ageCell = newRow.insertCell(1);
    nameCell.textContent = name;
    ageCell.textContent = age;
    document.getElementById('dataForm').reset();
});

//5
const listItems = document.querySelectorAll('#item-list li');

    listItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            item.style.backgroundColor = '#87CEEB';
        });
        item.addEventListener('mouseout', function() {
            item.style.backgroundColor = '';
        });
    });

//6
function toggleImage(imageElement, imageA, imageB) {
    const currentSrc = imageElement.getAttribute('src');
    if (currentSrc === imageA) {
        imageElement.setAttribute('src', imageB);
    } else {
        imageElement.setAttribute('src', imageA);
    }
}
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');

image1.addEventListener('click', function() {
    toggleImage(image1, 'image1_a.jpg', 'image1_b.jpg');
});

image2.addEventListener('click', function() {
    toggleImage(image2, 'image2_a.jpg', 'image2_b.jpg');
});

image3.addEventListener('click', function() {
    toggleImage(image3, 'image3_a.jpg', 'image3_b.jpg');
});

//7
function calculate(operation) {
    const num1 = parseFloat(document.getElementById('number1').value);
    const num2 = parseFloat(document.getElementById('number2').value);
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        alert("Пожалуйста, введите оба числа.");
        return;
    }

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
            if (num2 === 0) {
                alert("Деление на ноль не допускается!");
                return;
            }
            result = num1 / num2;
            break;
    }
    document.getElementById('result').textContent = `Результат: ${result}`;
}

//8
let counter = 0;
    function incrementCounter() {
        counter++; 
        document.getElementById('click-count').textContent = counter;  // Отображаем обновленное значение
    }
