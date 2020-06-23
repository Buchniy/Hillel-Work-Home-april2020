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

function SuperArray(n, m, options) {

    var arr = new Array(n);
    var _value = {};

    for (var i = 0; i < n; i++) {
        arr[i] = new Array(m);
        for (var j = 0; j < arr[i].length; j++) {
            arr[i][j] = Math.ceil(Math.random() * (options.max - options.min) + options.min);
        }
    }
    console.log(arr, 'arr');

    this.clear = function (direction, k) {

        if(direction === 'row'){
            for (var j = 0, rowlength = arr[arr.length - 1].length; j < rowlength; j++){
                arr[k][j] = 0;
            }
            return arr;
        }if(direction === 'column'){
            for (var i = 0; i < n; i++){
                arr[i][k] = 0;
            }
            return arr;

        }
    };

    this.setMarker = function (marker) {

        if(marker.x <= n && marker.y <= m && 0 <= marker.x && 0 <= marker.y){
            _value = marker;
            console.log(_value, 'error');
            arr[_value.x][_value.y] += '&';

        }else{
            alert('Не корректные значения');
            return arr;
        }
    };

    this.getMarker = function() {
        return arr[_value.x][_value.y];
    };

    this.clearMarker = function () {
        arr[_value.x][_value.y] = parseInt(this.getMarker());
    };

    this.goTo = function (marker) {
        this.clearMarker();
        this.setMarker(marker);
    }

}




SuperArray.prototype.render = function (separator, m) {
    var separ = new Array(m);
    for(var i = 0; i < m; i++){
        separ[i] = separator;
    }
    return console.log(separ.join(''), '<= separator');
};



var mass = new SuperArray(5, 10, {min: 10, max: 55 } );
// console.log( mass.setMarker({x: 0, y: 0 }));
mass.setMarker({x: 0, y: 8 });
mass.render('*', 50);

mass.clear('row', 2);

mass.goTo({x: 1, y: 3 });
console.log('======================');