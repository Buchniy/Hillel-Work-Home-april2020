console.log('=================WH16/17================');
window.onload = function () {
    let buttons = document.querySelectorAll('.button');
    let blocks = document.querySelectorAll('.block');
    let buttonClear = document.querySelector('.button1');
    let setCounter = document.querySelector('.button2');

    let store = {
        setInStore: function (key, value) {
            localStorage.setItem(key, value);
        },
        getFromStore: function (key) {
            return localStorage.getItem(key);
        }

    };

    for (let i = 0; i < buttons.length; i++) {
        getParent(buttons[i], '.block')
            .querySelector('.counter').innerHTML = store.getFromStore('counter-' + i);

        buttons[i].addEventListener('click', click.bind(buttons[i], i));
        buttonClear.addEventListener('click', clearKey.bind(null, i));
        setCounter.addEventListener('click', setCounterKey);
    }

    function click(i) {
        let block = getParent(this, '.block');
        let counter = block.querySelector('.counter');
        let counterValue = ++counter.innerHTML;

        store.setInStore('counter-' + i, counterValue); // counter - 2
    }

    function getParent(node, parentSelector) {
        return node.closest(parentSelector)
    }

    function clearKey(i) {
        store.setInStore('counter-' + i, 0);
        return synchronize(i);
    }


    blocks.forEach((item, index) =>
        blocks[index].setAttribute('data-id', `counter-${index}`));


    function setCounterKey() {
        let keyBox = prompt('какому ключу изменить счетчик', 'counter-');
        blocks.forEach((item, index) => {

            if (blocks[index].dataset.id === keyBox) {
                return setCounterValue(keyBox, index)
            }
        });
    }

    function setCounterValue(keyBox, index) {
        let setValue = +prompt('новое числовое значение', '...');
        if (!isNaN(setValue)) {
            store.setInStore(keyBox, setValue);
            return synchronize(index)

        } else {
            alert('значенние должно быть числом')
        }
    }

    function synchronize(index) {
        getParent(blocks[index], '.block')
            .querySelector('.counter').innerHTML = store.getFromStore('counter-' + index);
    }

};
