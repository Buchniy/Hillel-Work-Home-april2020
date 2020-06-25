/*
Создать кнопку ClearCounters() - очищает все счетчики

Создать кнопку setCounter(), который запрашивает id (каком блоку изменить счетчик)
 */
console.log('=================WH17================');
window.onload = function() {
    var buttons = document.querySelectorAll('.button');
    var buttonClear = document.querySelector('.button1');
    var setCounter = document.querySelector('.button2');

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
        setCounter.addEventListener('click', set);
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

    function set() {
        var keyBox = prompt('какому ключу изменить счетчик', 'counter-');
        var keys = Object.keys(localStorage);
        for(var key of keys) {
            if(key === keyBox){
                var setValue = +prompt('новое числовое значение', '...');
                if(!isNaN(setValue)){
                    store.setInStore(keyBox, setValue);
                }else{
                    alert('значенние должно быть числом')
                }
            }
        }
    }
};
