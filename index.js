// Функция сработает, как только страница полностью загрузится
window.onload = function() {
    // Находим прелоадер и добавляем ему класс для скрытия
    let preloader = document.getElementById('preloader');
    preloader.classList.add('hide-preloader');
}

// Открытие всплывающей формы (убираем класс скрытия)
function openForm() {
    let form = document.getElementById('popupForm');
    form.classList.remove('hide-popup');
}

// Закрытие всплывающей формы (добавляем класс скрытия)
function closeForm() {
    let form = document.getElementById('popupForm');
    form.classList.add('hide-popup');
}