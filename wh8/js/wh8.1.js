/*
Есть обьект obj = { } Внутри него описываем методы copy, clear, doFunction.
 Организовать создание методов так, что бы можно было вызывать любые комбинации:
obj.doFunction(sum, 2, 4).doFunction(mul, 6, 3).clear()
doFunction(func, x, y); получает параметрами 2 числа и функцию, которую нужно применить к x и y.
Результат операции сохранять в obj.result
clear() очищает значение obj.result в 0
copy(buffer) получает параметром название ключа buffer (string) и
 добавляет его к obj Далее в любом порядке можно вызывать комбинации функций

Создать метод target(property)- дальнейшие действия функций doFunction() и
 clear() будут изменять значение не result, а переданной property

Пример: obj .doFunction(sum, 2, 4) .copy('some_name') .target('another_some_name') .doFunction(mul, 6, 3)
 */
console.log('===================================');
var  obj = {
    resultKey: 'result',

    doFunction(func, x, y){
        this[this.resultKey] = func(x, y);
        console.log('x = ', x, ', y = ', y);
        return this;
    },

    clear(){
        this[this.resultKey] = 0;
        console.log('clear result');
        return this
    },

    copy(buffer){
        this[buffer] = this[this.resultKey];
        return this;
    },

    target(property){
        this[property] = this[this.resultKey];
        this.result = property;
        return this;
    }
};

function sum(e, f) {
    console.log('x + y');
    return e + f;
}
function diff(e, f) {
    console.log('x - y');
    return e - f;
}
function div(e, f) {
    console.log('x / y');
    return e / f;
}
function mul(e, f) {
    console.log('x * y');
    return e * f;
}
function rem(e, f) {
    console.log('x % y');
    return e % f;
}
function exp(e, f) {
    console.log('x ^ y');
    return e ** f;
}

console.log('==============doFunction=====================');
obj.doFunction(sum, 5, 6).doFunction(div, 455, 16);
console.log(obj.result, 'result last function');
obj.clear();
obj.doFunction(mul, 14, 8);
console.log(obj.result, 'result function');
obj.clear();
console.log(obj.result, 'result function');
console.log('===============copy(buffer)====================');
obj.doFunction(exp, 2, 8).copy('newKey');
console.log(obj.newKey, 'result buffer');
obj.clear();
console.log(obj.result, 'result function');
console.log(obj.newKey, 'result buffer');
console.log('===============target(property)====================');
obj.doFunction(mul, 14, 8).target('newObj');
console.log(obj.newObj, 'result newObj');
obj.doFunction(exp, 3, 10);
obj.target('newObj');
console.log(obj.newObj, 'result newObj');
obj.clear();
obj.target('newObj');
console.log(obj.newObj, 'result newObj');

console.log('================mix===================');
obj.doFunction(exp, 2, 8).copy('newKey').doFunction(mul, 14, 8).target('newObj').doFunction(div, 14, 8);
console.log(obj.newObj, 'result newObj');
console.log(obj.result, 'result function');
console.log(obj.newKey, 'result buffer');
console.log('===================================');
