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
        var values = '';

        for(i = 0; i < inputs.length; i++){
            values += inputs[i].value + ', ';
        }
        myText.value = values;
    }, 3000);
};
console.log('=====================');