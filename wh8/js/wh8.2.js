/*
в обьекте data существует метод addRecord, который аргументами получает любой набор объектов.
 Метод addRecord добавляет все свойства переданных объектов в data.

 data = {
     addRecord: function(){},
     p: 600,
     str: 'hello',
     y: -50
 }
 data.addRecord({x: 10}, {y: 20}, {z: 30, x: 50});
 data.x // 50
 data.y // 20
 data.z // 30
 data.p // 600
 data.str // 'hello'
 В метод addRecord добавляется последний необязательный аргумент flag,
  который указывает приоритет присвоения свойств с одинаковым названием.
  Если true - берется свойство из первоначального объекта this,
  если false - берется свойство из arguments. По умолчанию flag = false;
 */
console.log('===================================');
data = {
    addRecord: function () {
        console.log(arguments, 'arguments');

        for (var i = 0; i < arguments.length; i++) {
            for (let key in arguments[i]) {

                if (arguments[arguments.length - 1] === true) {

                    if (!(this.hasOwnProperty(key))) {
                        this[key] = arguments[i][key];
                    }
                }else{
                    this[key] = arguments[i][key];
                }
            }
        }
    },
    x: 'изначальный',
    p: 600,
    str: 'hello',
    y: -50
};
data.addRecord({x: 'повторный'}, {y: 20}, {z: 30, f: 50});
data.addRecord({z: 50}, {j: 6000}, {x: 'третий вызов'}, true);
console.log(data, 'data');

