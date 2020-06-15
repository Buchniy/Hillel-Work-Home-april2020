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
console.log('====================================');
window.onload = function () {

     var rng = document.querySelector('#rng');
     var nmb = document.querySelector('#nmb');
     var val = document.querySelector('.value');
     var commis = document.querySelector('.commis');

        nmb.oninput = function(){
                rng.value = nmb.value;
                valueBox();
                commisBox();
        };
        rng.oninput = function(){
                console.log(rng.value);
                nmb.value = rng.value;
                valueBox();
                commisBox();
        };
        function  valueBox() {
               if(rng.oninput){
                       val.style.height = rng.value +'px'
               }else if(nmb.oninput){
                       val.style.height = nmb.value +'px';
               }
        }
        function commisBox() {
                var valueComis = rng.value || nmb.value;
                if(valueComis < 20 ){
                        commis.style.height = (rng.value * 2 / 100) + 'px';
                }else if(valueComis < 50){
                        commis.style.height = (rng.value * 4 / 100) + 'px';
                }else if(valueComis < 75){
                        commis.style.height = (rng.value * 6 / 100) + 'px';
                }else{
                        commis.style.height = (rng.value * 8 / 100)  + 'px';
                }
        }
};