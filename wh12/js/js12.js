console.log('=============wh12==========');
/*
1) Создать класс new SuperArray(n, m, { min: 10, max: 55 }), который создаст
массив размерностью n на m и заполнит случайными числами в диапазоне
options.min - options.max. Массив сохраняется в екземпляр класса SuperArray.

2) Создать метод render(separator), в прототипе. Который выведет двумерный массив в документ.
С разделителем separator, под массивом.

3) Создать метод clear(direction, k), где direction может быть "row" или "column",
а k - номер строки или столбца, который нужно очистить. (поставить 0)

4) Создать Метод setMarker({ x: 6, y: 9 }), который устанавливает маркер "&"
в  переданную точку.

5) Создать метод goTo({ x: 2, y: 4 }), маркер передвигается в указанную точку.

6) Создать метод shift(direction), где direction может иметь значение
"left", "right", "top", "bottom", и маркер сдвинется в указанную сторону на 1 шаг.
 */
console.log('======================');
function SuperArray(n, m, { min: min,  max: max }) {

    var arr = new Array(n);
    for (var i = 0; i < n; i++) {
        arr[i] = new Array(m)
        for (var j = 0; j < arr[i].length; j++) {
            arr[i][j] = Math.ceil(Math.random() * (max - min) + min);
        }
    }
    return arr;
}
var mass = new SuperArray(5, 10, {min: 10, max: 55 } );
console.log(mass, 'mass');







console.log('======================');