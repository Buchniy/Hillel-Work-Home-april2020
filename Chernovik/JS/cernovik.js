/*
Создаем 2 блока, с кнопкой Нажмите и счетчиком счетчик (в виде числа).
При нажатии на Click - счетчик увеличивается. При перезагрузке страницы counter
Доп задание 2) Создать кнопку ClearCounters () - очищает все счетчики

Создать кнопку setCounter (), который запрашивает идентификатор
(в каком блоке изменить счетчик).
 */
console.log('=================WH16================');
window.onload = function() {



    var button = document.querySelectorAll('.button');
    var counter = document.querySelector('.counter');

    var store = {
        setInStore: function(key, value) {
            localStorage.setItem(key, value);
        },
        getFromStore: function(key) {
            return localStorage.getItem(key);
        }
    };

    counter.innerHTML = store.getFromStore('counter') || 0;

    var click = (function(event) {
        var counterValue = ++counter.innerHTML;

        store.setInStore('counter', counterValue);

    }).bind(null , counter);


    // button.addEventListener('click', click);


for(var i = 0; i < button.length; i++){
    button[i];
}


    button[1].addEventListener('click', click);
    button[0].addEventListener('click', click);
};