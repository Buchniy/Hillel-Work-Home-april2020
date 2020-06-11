console.log('=========wh11============');

/*
Создать класс SuperMath. Добавить к экземпляру метод - check(obj),
 параметр obj которого имеет свойства X, Y, znak.
Метод должен подтвердить у пользователя хочет ли он произвести действие znak c Х и У.
Если - да, сделать математическое действие znak(которое описано в прототипе),
иначе - запросить ввод новых данных через метод input() класса SuperMath.
Пример обекта: obj = { X:12, Y:3, znak: “/”}, возможные варианты znak=> + - / * %.
При вводе znak нужно сделать проверку корректности ввода
на возможные математические действия

 p = new SuperMath();
 p.check(obj); // --> no p.input() -> 3 prompt -> считает
*/
console.log('=====================');

function SuperMath() {
    this.check = function (obj) {
        if (confirm('произвести действие znak c Х и У?')){
            this.toDo(obj)
        }else{
            this.input()
        }
    };
    this.input = function () {
        var objNew = {};
        objNew.x = +prompt('введи новое занчение х', '');
        objNew.y = +prompt('введи новое занчение y', '');
        objNew.znak = prompt('введи новое занчение znak', '');
        return p.check(objNew);
    };
}
var obj = {
    x: 12,
    y: 3,
    znak: '+'
};
SuperMath.prototype.toDo = function(obj){
    if (obj.znak === '+'){
        this.sum(obj);
    }else if(obj.znak === '-'){
        this.diff(obj);
    }else if(obj.znak === '/'){
        this.div(obj);
    }else if(obj.znak === '*'){
        this.mul(obj);
    }else if(obj.znak === '%'){
        this.rem(obj);
    }else{
        alert('не корректное значение znak');
    }

};
SuperMath.prototype.sum = function (obj){
    console.log('x =', obj.x, ', y =', obj.y,);
    console.log('x + y =', obj.x + obj.y);
    return obj.x + obj.y ;
};
SuperMath.prototype.diff = function (obj){
    console.log('x =', obj.x, ', y =', obj.y,);
    console.log('x - y =', obj.x - obj.y);
    return obj.x - obj.y ;
};
SuperMath.prototype.div = function (obj){
    console.log('x =', obj.x, ', y =', obj.y,);
    console.log('x / y =', obj.x / obj.y);
    return obj.x / obj.y ;
};
SuperMath.prototype.mul = function (obj){
    console.log('x =', obj.x, ', y =', obj.y,);
    console.log('x * y =', obj.x * obj.y);
    return obj.x * obj.y ;
};
SuperMath.prototype.rem = function (obj){
    console.log('x =', obj.x, ', y =', obj.y,);
    console.log('x % y =', obj.x % obj.y);
    return obj.x % obj.y ;
};

var p = new SuperMath();
p.check(obj);

console.log('=====================');

