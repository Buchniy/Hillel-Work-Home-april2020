/*
Реализовать калькулятор, в котором есть слайдер (input type=”range”) и
поле ввода (input type=”number”).
Изменяя состояние range меняется состояние поля ввода number. И наоборот.
Реализовать блок-диаграмму, который в пикселях будет отображать значение range.
 Например - range выбрали число 83, высота блока-диаграммы будет 83 пикселя.
Красный блок - количество комиссии. Комиссия вычисляется по формуле:
(range < 20) -> 2%
(20 - 50)  -> 4%
(50 - 75)  -> 6%
(75 - 100)  -> 8%
Красный блок отображает количество комиссии. Например Значение выбора 100,
комиссия будет 8%. Результирующая сумма: 108. Высота красного блока - 8px
 */
console.log('================WH14====================');

window.onload = function () {

var rng = document.querySelector('#rng');
var nmb = document.querySelector('#nmb');
var diagram = document.querySelector('.value');
var commis = document.querySelector('.commis');

function calculation() {

    var calculator = {
        onNumber: function () {
            rng.value = nmb.value;
            this.onDiagram(rng.value);
            this.onCommis(rng.value);
        },
        onRange: function () {
            nmb.value = rng.value;
            this.onDiagram(nmb.value);
            this.onCommis(nmb.value);
        },
        onDiagram: function(inp) {
            diagram.style.height = inp + 'px';
        },
        onCommis: function(x) {
            var comm = commis.style;
            if (x < 20) {
                comm.height = (x * 2 / 100) + 'px';
            } else if (x < 50) {
                comm.height = (x * 4 / 100) + 'px';
            } else if (x < 75) {
                comm.height = (x * 6 / 100) + 'px';
            } else {
                comm.height = (x * 8 / 100) + 'px';
            }
        }
};
    nmb.addEventListener('input', calculator.onNumber.bind(calculator));
    rng.addEventListener('input', calculator.onRange.bind(calculator));
}
    calculation();
};


