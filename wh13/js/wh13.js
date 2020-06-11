console.log('=========wh13============');
/*
Есть 3 input. Выводить в textarea содержимое всех полей ввода через запятую.
Использовать setInterval.
*/

console.log('=====================');
window.onload = function () {

    var inputs = document.querySelectorAll('input');
    console.log(inputs, "all input");

    var myText = document.querySelector('textarea');

    setInterval( function () {

        for(i = 0; i < inputs.length; i++){
            myText.value += inputs[i].value + ', ';
        }
    }, 3000);
};
console.log('=====================');