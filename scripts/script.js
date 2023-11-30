function changeImage(cardId, newImageSrc) {
    document.getElementById(`mainImage${cardId}`).src = newImageSrc;
}

// Получаем модальное окно
var modal = document.getElementById('myModal');

// Получаем кнопку, которая открывает модальное окно
var buttons = document.querySelectorAll('.main__button, .timer');

// Получаем элемент <span>, который закрывает модальное окно
var span = document.getElementsByClassName('close')[0];

// Привязываем обработчики событий для каждой кнопки
buttons.forEach(function (button) {
    button.onclick = function () {
        modal.style.display = 'block';
    };
});

// Когда пользователь кликает на <span> (x), закрываем модальное окно
span.onclick = function () {
    modal.style.display = 'none';
};

// Когда пользователь кликает где-угодно вне модального окна, закрываем его
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};

// Обработчик для отправки формы
document.getElementById('phoneForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Предотвращаем перезагрузку страницы
    var phoneNumber = document.getElementById('phoneNumber').value;
    // Тут можно добавить код для отправки номера телефона куда-либо
    console.log('Номер телефона:', phoneNumber);
    modal.style.display = 'none'; // Закрываем модальное окно после отправки
});