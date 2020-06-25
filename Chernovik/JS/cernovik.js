/*
Создаем 2 блока, с кнопкой Нажмите и счетчиком счетчик (в виде числа).
При нажатии на Click - счетчик увеличивается. При перезагрузке страницы counter
Доп задание
2) Создать кнопку ClearCounters () - очищает все счетчики

Создать кнопку setCounter (), который запрашивает идентификатор
(в каком блоке изменить счетчик).
 */
console.log('=================WH16================');
window.onload = function() {
    var buttons = document.querySelectorAll('.button');
    var buttonClear = document.querySelector('.button1');

    var store = {
        setInStore: function(key, value) {
            localStorage.setItem(key, value);
        },
        getFromStore: function(key) {
            return localStorage.getItem(key);
        }

    };

    for(var i = 0; i < buttons.length; i++) {
        getParent(buttons[i],'.block')
            .querySelector('.counter').innerHTML = store.getFromStore('counter-' + i);

        buttons[i].addEventListener('click', click.bind(buttons[i], i));
        buttonClear.addEventListener('click', clearKey.bind(null, i));
    }



    function click(i) {
        var block  = getParent(this,'.block');
        var counter = block.querySelector('.counter');
        var counterValue = ++counter.innerHTML;

        store.setInStore('counter-' + i, counterValue); // counter - 2
    }


    function getParent(node, parentSelector) {
        return node.closest(parentSelector);
    }

    function clearKey(i) {
        store.setInStore('counter-' + i, 0);

    }


};
